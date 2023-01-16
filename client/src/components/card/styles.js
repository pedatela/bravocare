import styled from 'styled-components';


export const CardWrapper = styled.div`
    cursor: pointer;
    overflow: hidden;
    margin: 20px;
    width: 100%;
    height: 100%;
    font-family: Quicksand, arial, sans-serif;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
    border-radius: 5px;
    display: flex;
    flex: 1 0 30%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${props => props.active ? "#a8d1ff" : "white"};
`;

export const Infos = styled.span`
    font-size: medium;
    padding: 10px;
`;