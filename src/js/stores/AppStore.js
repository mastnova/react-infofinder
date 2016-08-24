var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppAPI = require('../utils/AppAPI.js');

var CHANGE_EVENT = 'change';

var _results = [];
var _searchingText = '';

var AppStore = assign({}, EventEmitter.prototype, {

  receiveResults: function(results) {
    _results = results;
  },

  getResults: function() {
    return _results;
  },

  setSearchingText: function(text) {
    _searchingText = text;
  },

  getSearchingText: function() {
    return _searchingText;
  },

  emitChange: function(){
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback){
    this.on('change', callback);
  },
  removeChangeListener: function(callback){
    this.removeListener('change', callback);
  }
});

AppDispatcher.register(function(payload){
  var action = payload.action;

  switch(action.actionType){
    case AppConstants.SEARCH_RESULTS:
      AppStore.setSearchingText(action.search.text);
      AppAPI.searchResults(action.search.text);
      break;

    case AppConstants.RECEIVE_RESULTS:
      AppStore.receiveResults(action.results);
      break;

    default:
      return true;
  }

  AppStore.emitChange();
  return true;
});

module.exports = AppStore;
