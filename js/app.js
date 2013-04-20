/*global App*/
window.App = Ember.Application.create();

// Router
App.Router.map(function() {
  this.resource('tables', function() {
    this.resource('table', { path: ':table_id' });
  });
});

App.IndexRoute = Ember.Route.extend({
  setupController: function() {
    return App.Table.find();
  },

  redirect: function() {
    var table = App.Table.find(1);
    this.transitionTo('table', table);
  }
});

App.TablesRoute = Ember.Route.extend({
  model: function() {
    return App.Table.find();
  }
});

App.TableRoute = Ember.Route.extend({
  renderTemplate: function() {
    this.render('table');
    this.render('seasons', {
      into: 'table',
      outlet: 'seasons'
    });
    this.render('rules', {
      into: 'table',
      outlet: 'rules'
    });
  }
});