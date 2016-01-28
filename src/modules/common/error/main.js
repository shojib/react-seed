define(["react", "reactDom"], function(React, ReactDom) {

  "use strict";

  var Error = React.createClass({
    render: function() {
      return (
        <div>
          <h4>404: Page Not Found</h4>
        <p>The page you requested could not be found. 
        Please contact <a href="mailto:shojib1@gmail.com">Shojib</a> 
        or try again.</p>
        </div>
      ) 
    }
  });

  ReactDom.render(
    <Error />,
    document.getElementById("container")
  );

});


