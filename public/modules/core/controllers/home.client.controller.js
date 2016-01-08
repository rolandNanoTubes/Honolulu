'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication',
	function($scope, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;
		$scope.alerts = [
			{
				icon: "glyphicon glyphicon-user",
				color: "btn-success",
				total: "20,408",
				description: "TOTAL CUSTOMER"
			},
			{
				icon: "glyphicon glyphicon-calendar",
				color: "btn-primary",
				total: "8,382",
				description: "UPCOMING EVENT"
			},
			{
				icon: "glyphicon glyphicon-edit",
				color: "btn-success",
				total: "527",
				description: "NEW CUSTOMER IN 24H"
			},
			{
				icon: "glyphicon glyphicon-record",
				color: "btn-info",
				total: "85,000",
				description: "EMAILS SENT"
			},
			{
				icon: "glyphicon glyphicon-eye-open",
				color: "btn-warning",
				total: "268",
				description: "FOLLOW UPS REQUIRED"
			},
			{
				icon: "glyphicon glyphicon-flag",
				color: "btn-danger",
				total: "348",
				description: "REFERALS TO MODERATE"
			}
		];
	}
]);
