// app/controllers/login.js
import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  actions: {
    authenticate: function() {
    	var credential = this.getProperties('identification', 'password');
      	this.get('session').authenticate('authenticator:jwt', credential).catch((reason)=> {
      		alert(reason.error);
      	});
    }
  }
});
