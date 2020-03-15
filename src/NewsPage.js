import React, { Fragment } from 'react';
import Categories from './Categories';
import NewsList from './NewsList';

const NewsPage = ({match}) => {
    const category = match.params.category || 'all';

    return (
        <Fragment>
            <Categories />
            <NewsList category={category} />
        </Fragment>
    )
}

export default NewsPage;