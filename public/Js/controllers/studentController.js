app.controller('studentController', ['$scope', '$resource', '$http',
	function($scope, $resource, $http) {
		//$scope.studentName= "Raja";
		$http.get('http://localhost:8080/students').success(
			function(data) {
				$scope.studentCollection = data;
			})
		$http.put('http://localhost:8080/students/id').success(
			function(req, res) {
				req.send(req.body);

			})
	}
]);