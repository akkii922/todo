var app = angular.module("myapp", []);
app.controller("mainCtrl", ["$scope", "$rootScope", function($scope, $rootScope){
	$scope.empty = false;
	$scope.editMode = false;

	$scope.todoLists = [{name : "one", edit : "false"},{name : "two", edit : "false"}];

	$scope.add = function(){
		if(!$scope.newItem == ""){
			$scope.todoLists.push({name:$scope.newItem, edit:"false"});
			$scope.newItem = "";
			$scope.empty = false;
		}else{
			$scope.empty = true;
		};
	};

	$scope.remove = function(item){
		var index = $scope.todoLists.indexOf(item);
		$scope.todoLists.splice(index, 1);
	};

	$scope.edit = function(index){
		$rootScope.ind = index;
		$scope.newItem = $scope.todoLists[$rootScope.ind].name;
		$scope.editMode = true;
		$scope.disabled = "disabled";
		$scope.todoLists[index].edit = "true";
	};

	$scope.update = function(item){
		if(!$scope.newItem == ""){	
			$scope.todoLists[$rootScope.ind].name = item;
			$scope.todoLists[$rootScope.ind].edit = "false";
			$scope.editMode = false;
			$scope.newItem = "";
			$scope.disabled = "";
		}else{
			$scope.empty = true;
		};
	};


}]);

