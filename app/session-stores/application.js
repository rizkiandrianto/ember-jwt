// app/session-stores/application.js
import Cookie from 'ember-simple-auth/session-stores/cookie';

export default Cookie.extend({
	cookieName: 'ember_simple_auth:session'
});