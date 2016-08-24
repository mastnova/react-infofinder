var AppActions = require('../actions/AppActions');

module.exports = {
  searchResults: function(text) {
    $.ajax({
      url: 'http://api.duckduckgo.com/?q='+text+'&format=json&pretty=1',
      dataType: 'jsonp',
      success: function(data) {
        AppActions.receiveResults(data.RelatedTopics);
      },
      error: function(xhr, status, err) {
        console.log(err);
      }
    });
  }
}
