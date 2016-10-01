(function(){

  'use strict';

  angular
      .module('app')
      .config(function($stateProvider, $urlRouterProvider){
          $stateProvider
              .state('home', {
                  url: '/',
                  templateUrl: 'home/home.html',
                  controller: 'HomeController as homeCtrl'
              })
              .state('faq', {
                  url: '/faq',
                  templateUrl: 'faq/home.html'
              })
              .state('faq.history', {
                  url:'/history',
                  templateUrl: 'faq/history.html'
              })
              .state('faq.science', {
                  url: '/science',
                  templateUrl: 'faq/science.html'
              })
              .state('breweries', {
                url: '/breweries',
                templateUrl: 'breweries/home.html'
              })
              .state('breweries.index', {
                url: '/index',
                templateUrl: 'breweries/index.html',
                controller: 'BreweriesController as breweriesCtrl'
              })
              .state('breweries.create', {
                url: '/create',
                templateUrl: 'breweries/create.html',
                controller: 'BreweriesController as breweriesCtrl'
              })
              .state('breweries.show', {
                url: '/:id',
                templateUrl: 'breweries/show.html',
                controller: 'BreweriesController as breweriesCtrl'
              });
          $urlRouterProvider
              .otherwise('/');
    });

}());