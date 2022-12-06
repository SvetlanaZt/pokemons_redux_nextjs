import styled from 'styled-components';
import { Pagination } from 'antd';
import  Link  from "next/link";

export const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StyledHeader = styled.header`
    background-color: #9696e5;
    padding: 10px 20px;
    height: 300px;
`;

export const StyledDivPokemons = styled.div`
    list-style: none;
    padding: 10px 15px;
    margin: 0;
    @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 0;
    margin-top: 20px;
`;

export const StyledPagination = styled(Pagination)`
    display: flex;
    justify-content: center;
`;

export const StyledLink = styled(Link)`
        text-decoration: none;
`;