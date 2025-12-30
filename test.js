'use strict';
const todo = require('./index.js');
const assert = require('node:assert');

// add, listのテスト
todo.add('xの月次レポートを作成する');
todo.add('断捨離をする');
// 左右が一致するか否か
assert.deepStrictEqual(todo.list(), ['xの月次レポートを作成する', '断捨離をする']);

// done, doneListのテスト
todo.done('xの月次レポートを作成する');
assert.deepStrictEqual(todo.list(), ['断捨離をする']);
assert.deepStrictEqual(todo.doneList(), ['xの月次レポートを作成する']);

console.log('テストが正常に完了しました');