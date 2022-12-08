import styled from 'styled-components';

export const StyledDiv = styled.div`
    margin-bottom: 40px;
    @media (min-width: 768px) {
    margin-right: 20px;
    height: 340px;
    :hover {
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
  transition: transform 300ms
}
    }
`;
export const StyledImg = styled.img`
    width: 200px;
    display: flex;
    margin: 0 auto;
    margin-top: 15px;
    margin-bottom: 25px;
    height: 150px;
`;
export const StyledName = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Roboto Slab;
    font-weight: 600;
    font-size: 20px;
    line-height: 1.6;
    text-align: center;
`;
export const StyledTypeStats = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    font-family: Roboto Slab;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.6;
    text-align: center;
    background-color: ${(item) => {
    if (item.item === 'grass') {
        return '#85f785';
    } else if (item.item === 'water') {
        return '#9696e9';
    } else if (item.item === 'fire') {
        return '#fb8a8a';
    } else if (item.item === 'bug') {
        return '#dab8be';
    } else if (item.item === 'normal') {
        return '#ffffde';
    } else if (item.item === 'poison') {
        return '#fcfca4';
    } else if (item.item === 'flying') {
        return '#c0c0e6';
    } else if (item.item === 'ground') {
        return '#631e1185';
    } else if (item.item === 'electric') {
        return '#f9f91a';
    } else if (item.item === 'fairy') {
        return '#f40f0f';
        
    } return '#f3f3e0;';
}};
`;

// @media screen and (min-width: 768px) {
//     width: calc((100% - 2 * 30px) / 2);
//     margin-right: 30px;
//     :hover {
//   -webkit-transform: scale(1.1);
//   -ms-transform: scale(1.1);
//   transform: scale(1.1);
//   transition: transform 300ms
// }
//     :nth-child(2n) {
//     margin-right: 0;
// }};
//  @media screen and (min-width: 1200px) {
//     width: calc((100% - 100px) / 3);
//     :nth-child(2n) {
//   margin-right: 30px;}
//   :nth-child(3n) {
//   margin-right: 0;
// }}