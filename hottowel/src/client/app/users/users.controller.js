(function () {
    'use strict';

    angular
        .module('app.users')
        .controller('UsersController', UsersController);

    UsersController.$inject = ['logger', 'dataservice', '$q', '$timeout'];
    /* @ngInject */
    function UsersController(logger, dataservice, $q, $timeout) {
        var vm = this;
        vm.title = 'Users';
        
        activate();

        function activate() {
            var promises = [getPeople()];
            
            $q.all(promises).then(function() {
                $timeout(function() {
                    logger.info('Activated Users View');
                }, 2000)
            });
        }
        
        function getPeople() {
            return dataservice.getPeople().then(function (data) {
               vm.persons = data;
            });
        }
    }
})();
