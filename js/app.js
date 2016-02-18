angular.module('myApp', [])
.controller('mainCtrl', function($scope){
	$scope.categories = [
		{"id": 0, "name": "Development"},
		{"id": 1, "name": "Design"},
		{"id": 2, "name": "Exercise"},
		{"id": 3, "name": "Humor"}
	];

	$scope.bookmarks = [
		{"id": 0, "title": "Test 1", "url": "http://getbootstrap.com/components/#glyphicons", "category": "Development" },
		{"id": 1, "title": "Test 2", "url": "http://getbootstrap.com/components/#glyphicons", "category": "Development" },
		{"id": 2, "title": "Test 3", "url": "http://getbootstrap.com/components/#glyphicons", "category": "Design" },
		{"id": 3, "title": "Test 4", "url": "http://getbootstrap.com/components/#glyphicons", "category": "Design" },
		{"id": 4, "title": "Test 5", "url": "http://getbootstrap.com/components/#glyphicons", "category": "Exercise" },
		{"id": 5, "title": "Test 6", "url": "http://getbootstrap.com/components/#glyphicons", "category": "Exercise" },
		{"id": 6, "title": "Test 7", "url": "http://getbootstrap.com/components/#glyphicons", "category": "Exercise" },
		{"id": 7, "title": "Test 8", "url": "http://getbootstrap.com/components/#glyphicons", "category": "Humor" },
		{"id": 8, "title": "Test 9", "url": "http://getbootstrap.com/components/#glyphicons", "category": "Humor" }
	];

	$scope.currentCategory = null;

	$scope.setCurrentCategory = function(e){
		$scope.currentCategory = e;

		$scope.cancelCreating();
		$scope.cancelEditing();
	};

	$scope.isCurrentCategory = function(category){
		return $scope.currentCategory !== null && category.name === $scope.currentCategory.name;
	};



	// CRUD
	$scope.resetCreateForm = function(){
		$scope.newBookmark = {
			title: "",
			url: "",
			category: $scope.currentCategory.name
		}
	};


	$scope.createBookmark = function(bookmark){
		bookmark.id = $scope.bookmarks.length;

		$scope.bookmarks.push(bookmark);
		console.log(bookmark);
		$scope.resetCreateForm();
	};


	$scope.editedBookmarl = null;

	



	//Creating and Editing

	$scope.isCreating = false;
	$scope.isEditing = false;

	$scope.startCreating = function(){
		$scope.isCreating = true;
		$scope.isEditing = false;

		$scope.resetCreateForm();
	};

	$scope.cancelCreating = function(){
		$scope.isCreating = false;
	};

	$scope.startEditing = function(){
		$scope.isEditing = true;
		$scope.isCreating = false;
	};

	$scope.cancelEditing = function(){
		$scope.isEditing = false;
	};

	$scope.shouldShowCreating = function(){
		return $scope.currentCategory && !$scope.isEditing;
	};

	$scope.shouldShowEditing = function(){
		return $scope.isEditing && !$scope.isCreating;
	};
	
});