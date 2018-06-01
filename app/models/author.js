import DS from 'ember-data';
import {computed} from '@ember/object'

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  fullName: computed('firstName', 'lastName', function () {
    return `${this.get('firstName')} ${this.get('lastName')}`;
  }),
  username: DS.attr('string'),
  email: DS.attr('string'),
  profilePicture: DS.attr('string'),

  posts: DS.hasMany('blog-post', {inverse: 'author', polymorphic: true}),
});
