import React, { Fragment } from 'react';
import Categories from './Categories';
import NewsList from './NewsList';

const NewsPage = ({match}) => {
    // Categories.js 의 to 항목이 없으면 업데이트 되지 않는다.
    const cate = match.params.categor || 'all';
    console.log(cate);
    console.log(match.params);
    return (
        <Fragment>
            <Categories />
            <NewsList categor={cate} />
        </Fragment>
    )
}

export default NewsPage;