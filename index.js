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
 * @return {array}
 */
function list() {
  return tasks
    .filter(task => !task.isDone)
    .map(task => task.name);
};

/**
 * タスクを完了にする
 * @param {string} taskName
 */
function done(taskName) {
  const indexFound = tasks.findIndex(task => task.name === taskName);
  if (indexFound !== -1) {
    tasks[indexFound].isDone = true;
  };
};

/**
 * 完了タスクの一覧を取得する
 * @return {array}
 */
function doneList() {
  return tasks
    .filter(task => task.isDone)
    .map(task => task.name);
};

/**
 * タスクの削除機能
 * @param {string} taskName
 */
function del(taskName) {
  const indexFound = tasks.findIndex(task => task.name === taskName);
  if (indexFound !== -1) {
    tasks.splice(indexFound, 1);
  }
}

module.exports = {
  add,
  list,
  done,
  doneList,
  del,
};