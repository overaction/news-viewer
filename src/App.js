import React,{useState, Fragment} from 'react';
import NewsList from './NewsList';
import Categories from './Categories';

const App = () => {
    return (
        <Fragment>
            <Categories />
            <NewsList />
        </Fragment>
    )
}

export default App;
