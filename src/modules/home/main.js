import React from 'react';
import ReactDom from 'react-dom';

export class Home extends React.Component {
    constructor (props) {
        super(props)
    }

    render() {
        return (
            <div className="default-container" >
            <div className="dl" >
            <dt><a href="#/todolist" className= "link" > Todo List< /a></dt >
            <dd>A simple todo list.
                  <br />
            <br/>
            < /dd>
            < dt > <a href="#/article" className= "link" > Articles < /a></dt >
            <dd>It finds articles based on a keyword given with filter capability.
                  <br />
            <br/>
            < /dd>
            < dt > <a href="#/poem" className= "link" > Poem < /a></dt >
            <dd>A poem written in two different languages.It shows how i18n could be accomplished.
                  <br />
            <br/>
            < /dd>
            < dt > <a href="#/speedtest/angular/1" className= "link" > Speed Test< /a></dt >
            <dd>Speed test against Angular and ReactJS.</dd>
            < /div>
            < /div>
      );
    }

}

ReactDom.render(
    <Home />,
    document.getElementById("content")
);
