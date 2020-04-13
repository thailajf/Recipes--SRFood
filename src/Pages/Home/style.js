import styled from 'styled-components';
 
export const Container = styled.div`
background-image:url("https://images.unsplash.com/photo-1505935428862-770b6f24f629?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=747&q=80") ;
background-size: contain;
background-repeat: round;
height:625px;
max-height:800px;
display:flex;
@media (max-width: 600px) {
     background-size: auto;
    height: -webkit-fill-available;
}
`;


export const Content = styled.div`
    display:flex;
    width:100%;
    height:100%;
    flex-direction:column;
    justify-content: center;
    align-items: center;
          `;

export const Apresentation = styled.div`
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
font-family: 'Roboto', sans-serif;
margin-bottom:4rem;

div{

    h1{
        color:black;
        font-weight:300;
        font-size:3rem;
        margin-bottom:0;

         span{
            font-size:6rem;
            font-weight:bold;
        }
    }    

    h3{
        font-weight:300;
        font-size:1.2rem;
        margin-top:0;
        line-height:2px

    }
}

h2{
    margin-left:10%;
    width:200px;
    font-size:2rem;
    font-weight:300;
}
`;

export const Search = styled.form`
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
