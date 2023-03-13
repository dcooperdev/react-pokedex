import styled from 'styled-components';

export const NavBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  position: -webkit-sticky;
  position: sticky;
  bottom: 0;
  width: 100%;
  background: linear-gradient(135deg, #7b62a3 0%, #a040a0 100%);
`;

export const Button = styled.button`
    font-family: 'Roboto', sans-serif;
    font-weight: 100;
    background-color: #729f3f;
    color: #fff;
    border-radius: 5px;
    font-size: 80%;
    text-align: center;
    border: 0 solid transparent;
    font-size: 18px;
    font-weight: 400;
    padding: 12px;

    &:not(:last-child) {
        margin-right: 16px;
    }

    &:disabled,
    &[disabled]{
        border: 0px solid transparent;
        background-color: #cccccc;
        color: #666666;
    }
`;