const assert = require('assert');
const { defaultState, addList, deleteList, addTask, isOverdue } = require('./src/model.js');

const s = defaultState();
assert.equal(s.lists.length, 1);

const work = addList(s, 'Work');
assert.equal(s.activeId, work.id);

const t = addTask(work, 'Ship it', '2020-01-01');
assert.equal(work.tasks.length, 1);
assert(isOverdue(t, '2025-01-01'));
assert(!isOverdue(t, '2019-12-31'));
t.done = true;
assert(!isOverdue(t, '2025-01-01'));
assert(!isOverdue({ done: false, due: '' }, '2025-01-01'));

deleteList(s, work.id);
assert.equal(s.lists.length, 1);
assert.equal(s.activeId, s.lists[0].id);

deleteList(s, s.lists[0].id);
assert.equal(s.lists.length, 1, 'deleting the last list recreates a default one');
assert.equal(s.activeId, s.lists[0].id);

console.log('ok');
