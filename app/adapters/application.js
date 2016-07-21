import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import Ember from 'ember';

export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
	authorizer: 'authorizer:jwt',
});

export default DS.RESTAdapter.extend({
	session: Ember.inject.service('session'),
	host: 'http://128.199.255.96',
	namespace: 'v1/shared',
	/*headers: {
	    'Content-Type': 'application/json',
	    'Authentication': 'Bearer ' + this.get('session.session.content.authenticated.token')
	},*/
	headers: Ember.computed('session.authToken', function() {
		return {
		  "Authorization": "Bearer " + this.get("session.session.content.authenticated.token"),
		  'Content-Type': 'application/json',
		};
	})
});