// Pure state functions, no DOM. Shared by the renderer and test.js.
const uid = () => Math.random().toString(36).slice(2, 10);

function defaultState() {
  const id = uid();
  return { lists: [{ id, name: 'Tasks', tasks: [] }], activeId: id };
}

function addList(s, name) {
  const list = { id: uid(), name, tasks: [] };
  s.lists.push(list);
  s.activeId = list.id;
  return list;
}

function deleteList(s, id) {
  s.lists = s.lists.filter((l) => l.id !== id);
  if (!s.lists.length) return Object.assign(s, defaultState());
  if (s.activeId === id) s.activeId = s.lists[0].id;
  return s;
}

function addTask(list, title, due) {
  const task = { id: uid(), title, due: due || '', done: false };
  list.tasks.push(task);
  return task;
}

function isOverdue(task, today) {
  return !task.done && !!task.due && task.due < today;
}

if (typeof module !== 'undefined') {
  module.exports = { defaultState, addList, deleteList, addTask, isOverdue };
}
