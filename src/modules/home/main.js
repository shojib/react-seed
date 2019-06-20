import React from 'react';

class Home extends React.Component {
    render() {
        return (
            <div className="default-container">
                <div className="dl">
                    <dt><a href="#/todolist" className="link">Todo List</a></dt>
                    <dd>A simple todo list.</dd>
                    <dt><a href="#/article" className="link">Articles</a></dt>
                    <dd>It finds articles based on a keyword given with filter capability.</dd>
                    <dt><a href="#/poem" className="link"> Poem </a></dt>
                    <dd>A poem written in two different languages.It shows how i18n could be accomplished.</dd>
                    <dt><a href="#/speedtest/angular/1" className="link">Speed Test</a></dt>
                    <dd>Speed test against Angular and ReactJS.</dd>
                </div>
            </div>
        );
    }
}

export default Home;