import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  margin-top: 3rem;
  border-radius: 14px;
  border: 0.04rem solid #4c6353bd;
  padding: 11px;
  h1 {
    text-align: center;
    font-weight: normal;
    font-size: 1.5rem;
    margin-top: 5px;
    margin-bottom: 8px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 300px;
  border-radius: 5px;
`;

export const RInfos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Info = styled.div``;

export const ButtonSpace = styled.div`

display:flex;
flex-direction:row; 
justify-content:center;
margin-top:15px;

button{
    width:200px;
    height:40px;
    justify-content:center;
    border-radius:10px;
    background-color:#b1adad;
    border-radius:#363636;
    color::#363636;

    :hover{
        background-color:#4C6353;
        color:white;
        cursor:pointer;
    }
     
}

`;
