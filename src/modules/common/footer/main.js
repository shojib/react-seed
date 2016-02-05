import React from 'react';
import ReactDom from 'react-dom';

export class Footer extends React.Component {
    constructor (props) {
        super(props)
    }

    render () {
		    var currentYear = new Date().getFullYear();       
      	var copyrightYears = currentYear > 2016 ? 2016 + '-' + currentYear : 2016;

  		return (
  			<small>(c) {copyrightYears} Shojib React-Seed.<br/>
  			This seed is based on <a href="https://facebook.github.io/react/">
  			React</a> and <a href="http://www.ecmascript.org/">ES6</a>.</small>
  		) 
    }
}

ReactDom.render(
  <Footer />,
  document.getElementById("footer")
);

