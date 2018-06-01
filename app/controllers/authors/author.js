import Controller from '@ember/controller';
import {computed} from '@ember/object'

export default Controller.extend({
  hasPosts: computed('model.posts.length', function () {
    return (this.get('model').posts.length > 0);
  }),
  actions: {
    deletePost(authorid, postid) {
      let author = this.get('store').peekRecord('author', authorid);
      let post = this.get('store').peekRecord('blog-post', postid);

      author.get('posts').removeObject(post);
      author.save();

      this.get('store').findRecord('blog-post', postid, {backgroundReload: false}).then(function (post) {
        post.destroyRecord();
      });
    }
  }
});
