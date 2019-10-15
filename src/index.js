import React from 'react';
import ReactDOM from 'react-dom';
import Home from './modules/home/main';
import TodoList from './modules/todolist/main';
import Header from './modules/common/header';
import Footer from './modules/common/footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export class ReactSeed extends React.Component {
    render() {
        return(
            <Home />
        );
    }
}

// ReactDOM.render(
//     <Header />,
//     document.getElementById('header')
// );

ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/todolist" component={TodoList} />
            </div>
    </Router>,
    document.getElementById('content')
);

// ReactDOM.render(
//     <Footer />,
//     document.getElementById('footer')
// );