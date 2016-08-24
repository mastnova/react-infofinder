var React = require('react');
var Result = require('./Result.js');

var ResultsList = React.createClass({
  render: function() {
    return (
      <div>
        {
          this.props.text ?
          <h2 className="page-header">Results for {this.props.text}</h2>
          : ''
        }
        {
          this.props.results.map(function(result, i) {
            return <Result result={result} key={i}/>
          })
        }
      </div>
    )
  }
});

module.exports = ResultsList;
