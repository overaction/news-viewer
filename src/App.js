import React,{useState, Fragment, useCallback} from 'react';
import NewsList from './NewsList';
import Categories from './Categories';

const App = () => {
    const [category, setCategory] = useState('all');
    const onSelect = useCallback(cate => setCategory(cate),[]);

    return (
        <Fragment>
            <Categories category={category} onSelect={onSelect}/>
            <NewsList category={category}/>
        </Fragment>
    )
}

export default App;
