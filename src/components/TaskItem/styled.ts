import styled from "styled-components";
import { MenuContainer, MenuItem } from "../Filter/styled";
import { screenSize } from "../../utils/service";

interface ItemProps {
    isRed?: boolean
}

interface TitleProps {
    isDone: boolean
}

export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 46px;
    background-color: #ffffff;
    border-radius: 1000px;
    padding: 5px 20px;
    padding-right: 0;
    margin-top: 15px;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: flex-start;

    & svg {
        font-size: 30px;
        color: #9796A8;
        cursor: pointer;
        margin-left: auto;
        margin-right: 20px;
    }

    & p {
        width: 70%;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }

    @media screen and (max-width: ${screenSize.mobile}){
        flex-direction: column;
        justify-content: space-between;
        height: auto;
        padding: 0;

        & svg {
            margin: 0;
        }

        & p {
            text-align: center;
        }
    }
`

export const Checkbox = styled.input.attrs({type: 'checkbox'})`
    position: relative;
    width: 22px;
    height: 22px;
    cursor: pointer;
    -webkit-appearance: none;
    appearance: none;
    border: 2px solid #585292;
    border-radius: 6px;
    margin-right: 16px;
    
    &:checked {
        background-color: #585292;

        &::after {
            position: absolute;
            content: '';
            left: 50%;
            top: 50%;
            transform: translate(-45%, -65%) rotate(45deg);
            width: 3px;
            height: 8px;
            border: solid white;
            border-width: 0 2px 2px 0;
        }
    }

    @media screen and (max-width: ${screenSize.mobile}){
        margin: 0;
        margin-top: 10px;
    }
`

export const EditContainer = styled(MenuContainer)`
    width: 110px;
    margin: 0;
    top: 40px;
    left: 100%;
    transform: translate(-110%);
    z-index: 2;

    @media screen and (max-width: ${screenSize.mobile}){
        top: 85px;
        left: 50%;
        transform: translate(-50%)
    }
`

export const EditItem = styled(MenuItem)<ItemProps>`
    color: ${props => props.isRed && '#E07C7C'};

    &:hover {
        background-color: ${props => props.isRed && '#E07C7C'};
    }
`

export const Input = styled.input`
    font-family: 'Roboto';
    width: 80%;
    height: 100%;
    border: none;
    font-size: 16px;

    &:focus {
        outline: none;
    }

    @media screen and (max-width: ${screenSize.mobile}){
        height: 50px;
        text-align: center;
    }
`

export const Button = styled.button`
    font-family: 'Roboto';
    width: 64px;
    height: 100%;
    padding: 0;
    border-radius: 1000px;
    margin-left: auto;
    margin-right: 6px;
    cursor: pointer;
    color: #ffffff;
    border: none;
    background-color: #585292;
    transition: transform 0.25s ease-out;
    
    &:hover {
        transform: scale(1.1)
    }

    @media screen and (max-width: ${screenSize.mobile}){
        margin: 0;
        height: 36px;
        margin-bottom: 10px;
    }
`

export const Title = styled.p<TitleProps>`
    color: ${props => props.isDone ? '#A9A9A9' : '#2E2E2E'};
    text-decoration: ${props => props.isDone && 'line-through solid 1px'};
`