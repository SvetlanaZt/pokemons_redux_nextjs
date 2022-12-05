import styled from 'styled-components';
import { Select } from 'antd';

export const StyledDiv = styled.div`
    margin-right: 40px;
    display: block;
    justify-content: center;
    animation: c;
    margin: 0 auto;
    width: 100px;
    @media screen and (min-width: 768px) {
    width: 150px;
    }
    @media screen and (min-width: 1200px) {
   margin: 0;
   margin-right: 30px;
   margin-left: 30px;
    }
`;
export const StyledSelect = styled(Select)`
    width: 150px;
    display: flex;
    margin: 0 auto;
    border-radius: 5px;
    width: 150px;
    height: 30px;
    @media screen and (min-width: 768px) {
    width: 150px;
    font-size: 20px;}
`;
export const StyledP = styled.p`
    justify-content: center;
    align-items: center;
    display: flex;
    font-family: Roboto Slab;
    font-weight: 400;
    @media screen and (min-width: 768px) {
    font-size: 20px;
    }
`;
