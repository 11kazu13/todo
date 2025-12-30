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

/**
 * 未完了タスクの一覧を取得する
 * @return {arrayy}
 */
function list() {
  return tasks
    .filter(task => !task.isDone)
    .map(task => task.name);
}

module.exports = { add, list };