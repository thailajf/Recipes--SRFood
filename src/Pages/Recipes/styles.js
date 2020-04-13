import styled from "styled-components";

export const Container = styled.div`
  margin-top: 10px;
`;

export const Header = styled.div`
     display:flex;
    width:100%;
    height:100%;
    flex-direction:column;
    align-items: center;

    form{
        @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
font-family: 'Roboto', sans-serif;

    input,button{
        background: rgba(116, 108, 108, 0.56);
        padding:10px;
        font-size:16px;
        font-family: 'Roboto', sans-serif;
        border-color:transparent;
        
        
    }
    input{
        width:16rem;
        border-radius: 10px 0 0 11px;
        border-right-color: #454C56;
        border-right-width: 3px;
        color:#e6e6e6;;
    }
    button{
        border-radius: 0 10px 10px 0;
        border-left-color: #454C56;
        border-left-width:3px;
        
        :hover{
            color:white;
            cursor:pointer;
        }
    }



`;

export const Logo = styled.h1`
  color: black;
  font-weight: 300;
  font-size: 2.5rem;
  margin-bottom: 0;

  span {
    font-size: 4.5rem;
    font-weight: bold;
  }
`;

export const RecipesList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 4rem;
`;
