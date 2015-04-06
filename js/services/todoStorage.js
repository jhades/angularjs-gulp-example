/*global angular */

/**
 * Services that persists and retrieves todos from localStorage or a backend API
 * if available.
 *
 * They both follow the same API, returning promises for all changes to the
 * model.
 */
angular = require('angular');

angular.module('todomvc')
	.factory('todoStorage', function ($http, $injector) {
		'use strict';
		return $injector.get('localStorage');
	})
	.factory('localStorage', function ($q) {
		'use strict';

		var STORAGE_ID = 'todos-angularjs';

		var store = {
			todos: [],

			_getFromLocalStorage: function () {
				return todos;
			},

			_saveToLocalStorage: function (newTodos) {
				this.todos = newTodos;
			},

			clearCompleted: function () {
				var completeTodos = [];
				var incompleteTodos = [];
				store.todos.forEach(function (todo) {
					if (todo.completed) {
						completeTodos.push(todo);
					} else {
						incompleteTodos.push(todo);
					}
				});

				angular.copy(incompleteTodos, store.todos);
			},

			delete: function (todo) {
				store.todos.splice(store.todos.indexOf(todo), 1);
			},

			get: function () {
			},

			insert: function (todo) {
				store.todos.push(todo);
			},

			put: function (todo, index) {
				store.todos[index] = todo;
			}
		};

		return store;
	});
