import styled from 'styled-components';
import { Progress} from 'antd';

export const StyledDivHome = styled.div`
  background-color: #c5cae9;
  @media screen and (min-width: 768px) {
    display: flex;
  }
    padding: 20px 20px;
    justify-content: center;
`;
export const StyledH2 = styled.h2`
font-family: 'Libre Baskerville';
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    margin-bottom: 25px;
    font-weight: 700;
    font-size: 24px;
    line-height: 1.6;
    text-align: center;
    letter-spacing: 0.06em;
    text-transform: uppercase;
`;
export const StyledDiv = styled.div`
    background-color: #e6e6f0;
    padding: 20px;
      @media screen and (min-width: 768px) {
    width: 45%;
    margin-right: 25px;
    flex-direction: column;
    display: flex;
    justify-content: space-between;}
`;
export const StyledDivWraper = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #f3f0ff;
    padding: 10px;
   
`;
export const StyledP = styled.p`
    display: flex;
    display: block;
    justify-content: space-between;
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 18px;
    line-height: 1.6;
    text-align: center;
    letter-spacing: 0.06em;
`;
export const StyledSpan = styled.span`
    font-weight: 800;
`;
export const StyledHText = styled.h3`
    font-family: Permanent Marker;
    font-weight: 800;
    font-size: 18px;
    line-height: 1.6;
    text-align: center;
    letter-spacing: 0.06em;
    text-transform: uppercase
`;
export const StyledPText = styled.p`
     font-family: Permanent Marker;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.6;
    text-align: center;
    letter-spacing: 0.06em;
    text-transform: uppercase
`;
export const StyledImg = styled.img`
    display: flex;
    margin: auto;
    margin-bottom: 25px;
      @media screen and (min-width: 768px) {

    }
`;
export const StyledUl = styled.ul`
  background-color: #e6e6f0;
  list-style: none;
  padding: 20px;
`;
export const StyledPLi = styled.li`
    display: flex;
    margin-bottom: 10px;
    margin-right: 10px;
    justify-content: center;
    align-items: center;
`;
export const StyledProgress = styled(Progress)`
    margin-left: 10px;
`;
export const StyledDivEggs = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;
export const StyledPEggs = styled.p`
    font-family: Permanent Marker;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.6;
    text-align: center;
    letter-spacing: 0.06em;
    justify-content: center;
    align-items: center;
    display: flex;
`;
export const StyledButton = styled.button`
    background-color: #757ed3;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin-bottom: 25px;
`;
export const StyledTitleProgress = styled.p`
    width: 50px;
    margin-right: 25px;
`;