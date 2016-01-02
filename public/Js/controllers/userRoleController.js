(function(){
	var userRole = angular.module('userRoleController', []);

	userRole.controller('userRoleDisplayController', function(){
		this.userRoles = userRolesList;
		this.selectedRole = 0;
		this.selectRole = function(roleID){
			this.selectedRole = roleID;
		};
		this.isSelectedRole = function(roleID){
			console.log(roleID);
			console.log(this.selectedRole === 0 ? true : this.selectedRole === roleID);
			return this.selectedRole === 0 ? true : this.selectedRole === roleID;
		};
		this.showRoleExpander = function(){
			return this.selectedRole
		};
		this.expandAllRoles = function(){
			this.selectedRole = 0;
		};
	});

	userRole.directive('userLogin', function(){
		return{
			restrict: 'E',
			templateUrl: '../../views/template/login.html'
			
		};
	});

	var userRolesList = [
	{
		role_id: 1,
		role_type: 'Student'
	},
	{
		role_id: 2,
		role_type: 'Teacher'
	},
	{
		role_id: 3,
		role_type: 'Parent'
	},
	{
		role_id: 4,
		role_type: 'School'
	}];
})();