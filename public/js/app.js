angular.module('dry-forms', [
    'ui.router',
])
    .config([
        '$stateProvider',
        '$urlRouterProvider',
        '$httpProvider',
        //Set up state provider
        function($stateProvider, $urlRouterProvider, $httpProvider) {
            $urlRouterProvider.otherwise('/');
            $stateProvider.
            state('home', {
                url: '/',
                templateUrl: '/partials/home.html',
                data: {
                    pageTitle: 'Shortcut Junkie'
                }
            });
            $stateProvider
                .state('shortcuts', {
                    url: '/partials/shortcuts',
                    templateUrl: '/partials/shortcutHome.html',
                    controller: 'shortcutController',
                    data: {
                        pageTitle: 'Shortcuts Home'
                    }
                });
            $stateProvider
                .state('search', {
                    url: '/partials/search',
                    templateUrl: '/partials/search.html',
                    controller: 'searchController',
                    data: {
                        pageTitle: 'Search Shortcuts'
                    }
                });
        }
    ]);