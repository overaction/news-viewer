import React from 'react';
import {Route} from 'react-router-dom';
import NewsPage from './NewsPage';

const App = () => {
    return <Route path="/:categor?" component={NewsPage} />;
    // categor? 의 물음표는 category 값이 있을수도 있고 없을수도 있다는 뜻이다
    // categor 라고 설정 했으면 component인 NewsPage의 match.params에는 categor 가 들어갈 것이다
    // 
}

export default App;
