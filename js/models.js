// Models
App.Store = DS.Store.extend({
  revision: 11,
  adapter: 'DS.FixtureAdapter'
});

App.Table = DS.Model.extend({
  name: DS.attr('string'),
  seasons: DS.hasMany('App.Season'),
  rules: DS.hasMany('App.Rule')
});

App.Season = DS.Model.extend({
  name: DS.attr('string'),
  periods: DS.hasMany('App.Period')
});

App.Period = DS.Model.extend({
  name: DS.attr('string'),
});

App.Rule = DS.Model.extend({
  name: DS.attr('string'),
});

App.Table.FIXTURES = [{
  id: 1,
  name: 'Table 1'
}, {
  id: 2,
  name: 'Table 2'
}];

App.Season.FIXTURES = [{
  id: 1,
  table: 1,
  name: 'Season 1'
}, {
  id: 2,
  table: 1,
  name: 'Season 2'
}, {
  id: 3,
  table: 1,
  name: 'Season 3'
}, {
  id: 4,
  table: 2,
  name: 'Season 4'
}];

App.Period.FIXTURES = [{
  id: 1,
  season: 1,
  name: 'Period 1'
}, {
  id: 2,
  season: 1,
  name: 'Period 2'
}, {
  id: 3,
  season: 1,
  name: 'Period 3'
}, {
  id: 4,
  season: 2,
  name: 'Period 4'
}];

App.Rule.FIXTURES = [{
  id: 1,
  table: 1,
  name: 'Rule 1'
}, {
  id: 2,
  table: 1,
  name: 'Rule 2'
}, {
  id: 3,
  table: 2,
  name: 'Rule 3'
}];
