import React from 'react'
import styled from 'styled-components'
import { Button } from '../styled/Button';
import diceImage from '../assets/dice/dices.png';


const StartGame = ({toggle}) => {
  return (
    <div>
        <Container>
            <div>
            <img src={diceImage} alt="Dice"/>
            </div>
            <div className='content'>
                <h1>Dice Game</h1>
                <Button onClick={()=>{
                    toggle();
                }}>Play Now</Button>
            </div>
        </Container>
    </div>
  )
}

export default StartGame

const Container = styled.div`
    max-width:1080px;
    height:100vh;
    display: flex;
    margin:0 auto;
    align-items:center;

    .content{
        h1{
            font-size:96px;
            white-space:nowrap;
        }
    }
`;