'use strict';
// { name: タスクの名前、isDone: タスクの完了状態 }
const tasks = [];

/**
 * タスクを追加する
 * @params {string} taskName
 */
function add(taskName) {
  tasks.push({ name: taskName, isDone: false});
}

module.exports = { add };