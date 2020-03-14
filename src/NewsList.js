import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import NewsItem from './NewsItem'

const NewsListBlock = styled.div `
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

const NewsList = ({category}) => {
    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const query = category === 'all' ? '' : `&category=${category}`;
                const respon = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=e3dc0c5106804f69a4876a24bb702893`)
                setArticles(respon.data.articles);
            } catch (e) {
                console.log(e);
            }
            setLoading(false);
        };
        fetchData();
    },[category]); //[category] 사용해서 category가 바뀔 때마다 뉴스를 새로 불러옴

    if(loading) {
        return <NewsListBlock>대기중..</NewsListBlock>
    }
    if(!articles) return null;

    return (
        <NewsListBlock>
            {articles.map(art => (
                <NewsItem key = {art.url} articles={art} />
            ))}
        </NewsListBlock>
    )
}

export default NewsList;