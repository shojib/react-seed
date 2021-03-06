import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    render() {
        return (
            <div className="default-container">
                <div className="dl">
                    <dt><Link to="/todolist">Todo List</Link></dt>
                    <dd>A simple todo list.</dd>
                    <dt><Link to="/">Home</Link></dt>
                    <dd>Home</dd>
                </div>
            </div>
        );
    }
}

export default Home;
