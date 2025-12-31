'use strict';
// { name: タスクの名前、isDone: タスクの完了状態 }
let tasks = [];
const fs = require('node:fs');
const fileName = './tasks.json';

// 同期的にファイルから復元
try {
  const data = fs.readFileSync(fileName, 'utf8');
  tasks = JSON.parse(data);
} catch (err) {
  console.error(`${fileName}から復元できませんでした：${err.message}`);
}
// finally {
//   console.log("ファイルの復元を試みました");
// }

/**
 * タスクをファイルに保存する
 */
function saveTasks() {
  fs.writeFileSync(fileName, JSON.stringify(tasks), 'utf8');
}

/**
 * タスクを追加する
 * @params {string} taskName
 */
function add(taskName) {
  tasks.push({ name: taskName, isDone: false});
  saveTasks();
}

/**
 * タスク名と完了したか否かの真偽値が含まれるオブジェクトを受け取り、完了したか否かを返す
 * @param {object} task
 * @return {boolean} 完了したか否か
 */
function isDone(task) {
  return task.isDone;
}

/**
 * タスク名と完了したか否かの真偽値が含まれるオブジェクトを受け取り、完了していないか否かを返す
 * @param {object} task
 * @return {boolean} 完了していないか否か
 */
function isNotDone(task) {
  return !task.isDone;
}

/**
 * 未完了タスクの一覧を取得する
 * @return {array}
 */
function list() {
  return tasks
    .filter(isNotDone)
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
  saveTasks();
};

/**
 * 完了タスクの一覧を取得する
 * @return {array}
 */
function donelist() {
  return tasks
    .filter(isDone)
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
  saveTasks();
}

module.exports = {
  add,
  list,
  done,
  donelist,
  del,
  isDone,
  isNotDone,
  saveTasks,
};
