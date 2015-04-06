angular.module('todomvc')
    .directive('tdFooter', function () {
        'use strict';

        return {
            restrict: 'E',
            templateUrl: '/partials/footer.html'
        };

    });
