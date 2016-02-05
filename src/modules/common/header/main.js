import React from 'react';
import ReactDom from 'react-dom';

export class Header extends React.Component {
    constructor (props) {
        super(props)
    }

    render () {
      return (
  		  <h3 className="pull-left"> <a href="#/home">React-Seed</a></h3>
      ) 
    }
}

ReactDom.render(
  <Header />,
  document.getElementById("header")
);


