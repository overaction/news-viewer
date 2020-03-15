import React from 'react';
import {Route} from 'react-router-dom';
import NewsPage from './NewsPage';

const App = () => {
    return <Route path="/:category?" component={NewsPage} />;
    // category? 의 물음표는 category 값이 있을수도 있고 없을수도 있다는 뜻이다
}

export default App;
