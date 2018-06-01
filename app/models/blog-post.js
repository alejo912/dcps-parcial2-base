import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  publishedAt: DS.attr('date'),
  content: DS.attr('string'),

  author: DS.belongsTo('author', {inverse: 'posts', polymorphic: true}),
});
