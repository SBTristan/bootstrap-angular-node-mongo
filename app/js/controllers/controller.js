appControllers.controller('HomeCtrl', ['$scope', '$http',
	function HomeCtrl($scope, $http) {
		
		$scope.welcome = "Landing page for App!";
	}
]);


appControllers.controller('AppCtrl', ['$scope', '$http', '$stateParams',
	function AppCtrl($scope, $http, $stateParams) {

		$scope.uid = $stateParams.uid;

	}
]);

appControllers.controller('DashboardCtrl', ['$scope', '$http', '$stateParams',
	function DashboardCtrl($scope, $http, $stateParams) {

		/* Accessible because sub state */
		$scope.uid = $stateParams.uid;

	}
]);