import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

const CategoriesBlock = styled.div`
    display: flex;
    padding: 1rem;
    width: 768px;
    margin: 0 auto;
    @media screen and (max-width: 768px) {
        width: 100%;
        overflow-x: auto
    }
`;

// NavLink로 만들어진 Category 컴포넌트. NavLink의 기능들을 사용할 수 있다
const Category = styled(NavLink)`
    font-size: 1.125rem;
    cursor: pointer;
    white-space: pre;
    text-decoration: none;
    color: inherit;
    padding-bottom: 0.25rem;

    &:hover {
        color: #495057;
    }

    &.acti {
        font-weight: 600;
        border-bottom: 2px solid #22b8cf;
        color: #22b8cf;
        &:hover {
            color: #3bc9db;
        }
    }

    &+& {
        margin-left:1rem;
    }
`;

const categories = [
    {
        name: 'all',
        text: '전체보기'
    },
    {
        name: 'business',
        text: '비지니스'
    },
    {
        name: 'entertainment',
        text: '엔터',
    },
    {
        name: 'science',
        text: '과학',
    },
    {
        name: 'sports',
        text: '스포츠'
    },
    {
        name: 'technology',
        text: '기술'
    }
];

const Categories = ({onSelect, category}) => {
    return (
        <CategoriesBlock>
            {categories.map(item => (
                <Category
                    key={item.name}
                    activeClassName="acti"
                    exact={item.name === 'all'}
                    to={item.name === 'all' ? '/' : `/${item.name}`}
                >
                    {item.text}
                </Category>
            ))}
        </CategoriesBlock>
    )
}

export default Categories;