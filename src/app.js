const $ = (id) => document.getElementById(id);
let state;

const save = () => window.store.save(state);
const active = () => state.lists.find((l) => l.id === state.activeId);
const today = () => new Date().toLocaleDateString('en-CA'); // YYYY-MM-DD in local time

function el(tag, props = {}, ...kids) {
  const node = Object.assign(document.createElement(tag), props);
  node.append(...kids);
  return node;
}

function taskRow(list, task) {
  const check = el('input', { type: 'checkbox', checked: task.done, ariaLabel: `Complete ${task.title}` });
  check.onchange = () => { task.done = check.checked; save(); render(); };
  const body = el('div', { className: 'body' }, el('div', { className: 'title', textContent: task.title }));
  if (task.due) {
    const over = isOverdue(task, today());
    body.append(el('div', { className: 'due' + (over ? ' overdue' : ''), textContent: (over ? 'Overdue: ' : 'Due: ') + task.due }));
  }
  const del = el('button', { className: 'ghost del', ariaLabel: `Delete ${task.title}`, title: 'Delete task' });
  del.onclick = () => { list.tasks = list.tasks.filter((t) => t.id !== task.id); save(); render(); };
  return el('li', { className: 'task' + (task.done ? ' done' : '') }, check, body, del);
}

function render() {
  const list = active();

  $('lists').replaceChildren(...state.lists.map((l) => {
    const open = l.tasks.filter((t) => !t.done).length;
    const btn = el('button', {}, el('span', { textContent: l.name }), el('span', { className: 'count', textContent: open || '' }));
    btn.setAttribute('aria-current', l.id === state.activeId);
    btn.onclick = () => { state.activeId = l.id; save(); render(); };
    return btn;
  }));

  $('list-title').textContent = list.name;
  const pending = list.tasks.filter((t) => !t.done);
  const done = list.tasks.filter((t) => t.done);
  const overdue = pending.filter((t) => isOverdue(t, today())).length;
  $('summary').replaceChildren(`${pending.length} open`, ...(overdue ? [el('span', { className: 'overdue-count', textContent: `${overdue} overdue` })] : []));
  $('tasks').replaceChildren(...(pending.length ? pending.map((t) => taskRow(list, t)) : [el('li', { className: 'empty', textContent: 'Nothing open.' })]));
  $('completed').replaceChildren(...done.map((t) => taskRow(list, t)));
  $('completed-wrap').hidden = !done.length;
  $('completed-count').textContent = `(${done.length})`;
}

$('new-list').onsubmit = (e) => {
  e.preventDefault();
  const name = e.target.name.value.trim();
  if (!name) return;
  addList(state, name);
  e.target.reset();
  save(); render();
};

$('new-task').onsubmit = (e) => {
  e.preventDefault();
  const title = e.target.title.value.trim();
  if (!title) return;
  addTask(active(), title, e.target.due.value);
  e.target.reset();
  save(); render();
};

$('delete-list').onclick = () => {
  if (!confirm(`Delete "${active().name}" and its tasks?`)) return;
  deleteList(state, state.activeId);
  save(); render();
};

$('list-title').onclick = () => {
  const list = active();
  const input = el('input', { value: list.name, ariaLabel: 'List name' });
  const finish = (commit) => {
    const name = input.value.trim();
    if (commit && name) list.name = name;
    save(); render();
  };
  input.onblur = () => finish(true);
  input.onkeydown = (e) => {
    if (e.key === 'Enter') input.blur();
    if (e.key === 'Escape') { input.onblur = null; finish(false); }
  };
  $('list-title').replaceChildren(input);
  input.focus();
  input.select();
};

document.addEventListener('keydown', (e) => {
  const typing = /^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName);
  if (e.key.toLowerCase() === 'n' && !typing && !e.metaKey && !e.ctrlKey && !e.altKey) {
    e.preventDefault();
    document.querySelector('#new-task [name=title]').focus();
  }
});

window.store.load().then((saved) => {
  state = saved && saved.lists && saved.lists.length ? saved : defaultState();
  if (!active()) state.activeId = state.lists[0].id;
  render();
});
