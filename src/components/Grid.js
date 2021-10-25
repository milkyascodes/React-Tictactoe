import React, {useState} from 'react'
import  {Button} from '@mui/material'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import { RestartAltRounded } from '@mui/icons-material';


function Grid() {
    // states

    const [turn, setTurn] = useState('x')
    const [cells, setCells] = useState(Array(9).fill(''))
    const [winner, setWinner] =  useState()  
    const [draw, setDraw] = useState(false)



    // check for the winner
    function checkWinner(squares){
        let combos = {
            across:[
                [0,1,2],
                [3,4,5],
                [6,7,8],
            ],
            down:[
                [0,3,6],
                [1,4,7],
                [2,5,8],
            ],
            diagonal:[
                [0,4,8],
                [2,4,6],
            ]
        }

        for(let combo in combos){

            combos[combo].forEach((pattern) =>{
                
                if(
                  

                    squares[pattern[0]] === '' ||
                    squares[pattern[1]] === '' ||
                    squares[pattern[2]] === '' 
                ){
                    
                    
                }
                else if(
                    squares[pattern[0]] === squares[pattern[1]] &&
                    squares[pattern[1]] === squares[pattern[2]]
                ){
                    
                    setWinner(squares[pattern[0]])
             
                }
                if(
                    squares[pattern[0]] !== squares[pattern[1]] &&
                    squares[pattern[1]] !== squares[pattern[2]] &&
                    !squares.includes('')
                )
                setDraw(true)
                
            })
        }

    }
    
    // when you click the cell
    function handleClick(num){
        if(winner){
            return
        }
        if(cells[num] !== '' ){
            return
        }
        // check for turn
        let squares = [...cells]
        if(turn === "x" ){
            squares[num] = 'X'
            setTurn('o')
        }
        else{
            squares[num] = 'O'
            setTurn('x')
        }
        setCells(squares)
        checkWinner(squares)
    }

    // reset
    const reset = () => {
		setWinner(null);
		setCells(Array(9).fill(''));
        setDraw(false)
	};

    // clicking cells
    function Cell({num}){
        return (
            <td  onClick={()=> handleClick(num)}> {cells[num]} </td>
        )
    }

    return (
        <>

            <table>
                <tbody>
                    <tr>
                        <Cell num={0}/>
                        <Cell num={1}/>
                        <Cell num={2}/>
                    </tr>    
                    <tr>
                        <Cell num={3}/>
                        <Cell num={4}/>
                        <Cell num={5}/>
                    </tr>    
                    <tr>
                        <Cell num={6}/>
                        <Cell num={7}/>
                        <Cell num={8}/>
                    </tr>    
                </tbody>    
            </table>    

<br />

            {!winner ?
            (
                
                < div className="flex">
                
                    <Button 
                        startIcon={<SportsEsportsIcon/> }
                        color="success"
                        variant="contained"  
                        size="lg" 
                        // fullWidth
                        >
                        {!draw ? (`turn : ${turn}`):(`It's a draw` )}
                    </Button>

                    <Button 
                        startIcon={<RestartAltRounded/> }
                        color="warning"
                        variant="text"  onClick={() => reset()}
                        size="sm" 
                        >
                    </Button>
                </div>

            ):
            (
                <div className="flex">
                    <Button 
                        
                        startIcon={<SportsEsportsIcon/> }
                        color="primary"
                        variant="contained"
                        size="lg" 
                        >
                        winner : {winner}
                            
                    </Button>
                    <Button 
                        startIcon={<RestartAltRounded/> }
                        color="error"
                        variant="contained"  onClick={() => reset()}
                        size="sm" 
                        >
                    </Button>

                </div>
            )} 
          

           
        </>
    )
}

export default Grid
