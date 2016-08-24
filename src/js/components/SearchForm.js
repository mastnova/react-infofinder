var React = require('react');
var AppActions = require('../actions/AppActions');

var SearchForm = React.createClass({
  render: function() {
    return (
      <div>
        <form onSubmit={this.submit} className="well">
          <div className="form-group">
            <label>Search for something...</label>
            <input type="text" className="form-control" ref="text" />
          </div>
        </form>
      </div>
    )
  },

  submit: function(e) {
    e.preventDefault();
    var search = {
      text: this.refs.text.value.trim()
    }
    AppActions.searchResults(search);
  }
});

module.exports = SearchForm;
