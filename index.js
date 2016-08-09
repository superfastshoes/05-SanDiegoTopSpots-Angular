var app = angular.module('app',[]);

//$scope go between javascript variables and HTML, giving the HTML access to
//those propertise
app.controller('SDTopSpots', function($scope, $http){
	
	$http.get("topSpots.json")
	.then(function (response){
		$scope.spot = response.data;});
		console.log("worked");
	//Just another way to navigate to another page, adding ng-click="openGoogleMaps(spot) would make this work
	$scope.openGoogleMaps = function (spot) {
		window.location.replace('https://maps.google.com?q=' + spot.location[0] + ',' + spot.location[1]);
	};
});