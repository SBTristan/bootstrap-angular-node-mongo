appControllers.controller('HomeCtrl', ['$scope', '$http',
	function HomeCtrl($scope, $http) {
		
		$scope.welcome = "Landing page for App!";
	}
]);


appControllers.controller('AppCtrl', ['$scope', '$http', '$state', '$stateParams',
	function AppCtrl($scope, $http, $state, $stateParams) {

		$scope.uid = $stateParams.uid;

		$scope.returnHome = function() {
			return $state.go('home', {param1: 'arg1'});
		}
	}
]);

appControllers.controller('DashboardCtrl', ['$scope', '$http', '$state', '$stateParams', 'MyService',
	function DashboardCtrl($scope, $http, $state, $stateParams, MyService) {

		/* Accessible because sub state */
		$scope.uid = $stateParams.uid;

		$scope.fetchData = function() {
			MyService.read($stateParams.uid).then(function(data) {
				$scope.data = data;
			});
		}


	}
]);