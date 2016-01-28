define(["react", "reactDom"], function(React, ReactDom) {

  "use strict";

  var Footer = React.createClass({
    render: function() {
		    var currentYear = new Date().getFullYear();       
      	var copyrightYears = currentYear > 2016 ? 2016 + '-' + currentYear : 2016;

		return (
			<small>(c) {copyrightYears} Shojib React-Seed.<br/>
			This seed is based on <a href="https://facebook.github.io/react/">
			React</a> and <a href="http://requirejs.org">RequireJS</a>.</small>
		) 
    }
  });

  ReactDom.render(
    <Footer />,
    document.getElementById("footer")
  );

});


