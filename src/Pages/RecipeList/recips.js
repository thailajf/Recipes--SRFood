import React from "react";
import {Container,Image,RInfos,Info,ButtonSpace} from './styles';

const Recipes =({title,calories,image,dietLabels,totalTime}) =>{
    return(
        <Container>
            <Image src={image}/>
            <h1>{title}</h1>

            <RInfos>
                <Info>{totalTime} minutes</Info>
                <Info>{calories} cal</Info>
                <Info>{dietLabels}</Info>
            </RInfos>
            <ButtonSpace>
            <button>See the Recipe</button>
            </ButtonSpace>
        </Container>
    )
}

export default Recipes;