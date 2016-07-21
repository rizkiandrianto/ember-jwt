//import Model from 'ember-data/model';
import DS from 'ember-data';
import attr from 'ember-data/attr';
//import { belongsTo, hasMany } from 'ember-data/relationships';
import {hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
	total: attr('integer'),
	per_page: DS.attr('integer'),
	current_page: DS.attr('integer'),
	last_page: DS.attr('integer'),
	next_page_url: DS.attr('string'),
	users: hasMany('users'),
});
