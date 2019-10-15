import React from 'react';
import { Link } from 'react-router-dom';

class TodoList extends React.Component {
    render() {
        return (
            <div className="default-container">
                TodoList
                <div className="dl">
                    <dt><Link to="/">Home</Link></dt>
                    <dd>Home</dd>
                </div>
            </div>
        );
    }
}

export default TodoList;