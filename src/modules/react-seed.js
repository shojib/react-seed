import React from 'react';
import ReactDOM from 'react-dom';
import Home from './home/main';
import Header from './common/header';
import Footer from './common/footer';

export class ReactSeed extends React.Component {
    render() {
        return(
            <Home />
        );
    }
}

ReactDOM.render(
    <Header />,
    document.getElementById('header')
);

ReactDOM.render(
    <ReactSeed />,
    document.getElementById('content')
);

ReactDOM.render(
    <Footer />,
    document.getElementById('footer')
);