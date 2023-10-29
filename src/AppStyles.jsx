import styled from 'styled-components';

export const AppComponent = styled.div`
  height : 100vh;
  display : flex;
  align-items : center;
  justify-content : center;
  background-color : #53565A;
`;

export const Button = styled.button`
  appearance : none;
  background : none;
  border : none;
  outline : none;
  display : inline-block;
  padding : 10px 15px;
  border-radius : 8px;
  background-image : linear-gradient(to right, #FFCE00 50%, #FFCE00 50%, #FE4880);
  background-size : 200%;
  background-position : 0%;
  transition : 0.4s;
  color : #FFF;
  font-weight : 700;
  cursor : pointer;
  &::hover  {
    background-position : 100% 0%;
  }
`;

export const Welcome = styled.div`
  width : 100%;
  max-width : 480px;
  background-color : #fff;
  padding : 15px 30px;
`;

export const WelcomeMsg = styled.h2`
  color : #888;
  font-size : 20px;
  font-weight : 500;
  margin-bottom : 30px;
`;

export const NameText = styled.span`
  color : #FE4880;
  font-weight : 700;
`;