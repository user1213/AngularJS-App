const load = () => {
    const app = angular.module('app', []);
    app.controller('PhotoControl', (['$scope', '$http', function($scope, $http){
        $scope.title = 'Photo App';

        $http({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/photos'
        })
        .then(function(res){
            $scope.list = res.data;
            $scope.filtered = res.data;
        }, function(err){

        });

        $scope.search = e => {
            if(e.keyCode === 13){
                $scope.filtered = $scope.list.filter(obj => obj.title.toLowerCase().includes($scope.searchTxt.toLowerCase()));
            }
        }

        $scope.ascending = function(){
            debugger;
            $scope.filtered.sort((a, b) => {
                if(a.id === b.id) return 0;
                return (a.id < b.id) ?-1: 1;
            });
        }

        $scope.descending = function() {
            debugger;
            $scope.filtered.sort((a, b) => {
                if(a.id === b.id) return 0;
                return (a.id < b.id) ? 1: -1;
            })
        }
        
    }]));
}

window.addEventListener('DOMContentLoaded', load());