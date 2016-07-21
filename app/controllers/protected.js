import Ember from 'ember';
import config from  '../config/environment'; 

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
