import React from 'react';
import { Router, Route } from 'react-router-dom';

import StreamList from './streams/StreamList';
import StreamEdit from './streams/StreamEdit';
import StreamShow from './streams/StreamShow';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import Header from './Header';
import history from '../history';

const App = () => {
    return (
        <div className="ui container">
            <Router history={history}>
                <div>
                    <Header />
                    <Route path="/" exact component={StreamList} />
                    <Route path="/streams/show" component={StreamShow} />
                    <Route path="/streams/edit" component={StreamEdit} />
                    <Route path="/streams/new" component={StreamCreate} />
                    <Route path="/streams/delete" component={StreamDelete} />
                </div>
            </Router>
        </div>
    );
}

export default App;