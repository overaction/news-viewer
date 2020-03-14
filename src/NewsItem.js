import React from 'react';
import styled from 'styled-components';

const NewsItemBlock = styled.div`
    display: flex;
`;

const NewsItem = ({article}) => {
    const {title, description, url, urlToImage} = article;
    return (
        <NewsItemBlock>
            {urlToImage && (
                <div className="thumnail">
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        <img src={urlToImage} alt="thumnail" />
                    </a>
                </div>
            )}
            <div className="contents">
                <h2>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        {title}
                    </a>
                </h2>
                <p>{description}</p>
            </div>
        </NewsItemBlock>
    )
}

export default NewsItem;