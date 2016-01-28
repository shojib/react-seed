define(["react", "reactDom"], function(React, ReactDom) {

  "use strict";

  var Header = React.createClass({
    render: function() {
      return (
  		  <h3 className="pull-left"> <a href="#/home">React-Seed</a></h3>
      ) 
    }
  });

  ReactDom.render(
    <Header />,
    document.getElementById("header")
  );

});


