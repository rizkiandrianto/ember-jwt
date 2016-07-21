import Ember from 'ember';

export default Ember.Controller.extend({
	session: Ember.inject.service('session'),
	actions: {
		isAuth: function(){
	    	//console.log(this.get('session').isAuthenticated.isDescriptor);
	    	console.log(this.get('session.session.content.authenticated.token'));
	    	console.log(this.get('session'));
	    },
	}
});
