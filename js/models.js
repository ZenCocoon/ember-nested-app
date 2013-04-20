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
  name: 'Table 1',
  seasons: [1, 2, 3],
  rules: [1, 2]
}, {
  id: 2,
  name: 'Table 2',
  seasons: [4],
  rules: [3]
}];

App.Season.FIXTURES = [{
  id: 1,
  name: 'Season 1',
  periods: [1, 2, 3]
}, {
  id: 2,
  name: 'Season 2',
  periods: [4]
}, {
  id: 3,
  name: 'Season 3',
  periods: []
}, {
  id: 4,
  name: 'Season 4',
  periods: []
}];

App.Period.FIXTURES = [{
  id: 1,
  name: 'Period 1'
}, {
  id: 2,
  name: 'Period 2'
}, {
  id: 3,
  name: 'Period 3'
}, {
  id: 4,
  name: 'Period 4'
}];

App.Rule.FIXTURES = [{
  id: 1,
  name: 'Rule 1'
}, {
  id: 2,
  name: 'Rule 2'
}, {
  id: 3,
  name: 'Rule 3'
}];
