var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var SearchForm = require('./SearchForm.js');
var ResultsList = require('./ResultsList.js');

function getAppState(){
  return {
    results: AppStore.getResults(),
    searchingText: AppStore.getSearchingText()
  }
}

var App = React.createClass({
  getInitialState: function(){
    return getAppState();
  },

  componentDidMount: function(){
    AppStore.addChangeListener(this._onChange);
  },

  componentUnmount: function(){
    AppStore.removeChangeListener(this._onChange);
  },

  render: function(){
    return(
      <div>
        <SearchForm />
        <ResultsList
          text={this.state.searchingText}
          results={this.state.results}
        />
      </div>
    );
  },

  _onChange: function(){
    this.setState(getAppState());
  }
});

module.exports = App;
