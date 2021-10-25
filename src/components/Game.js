import React from 'react'
import {Button, Container, Typography} from '@mui/material'
import {Link} from 'react-router-dom';
import { bgcolor, Box } from '@mui/system'
import { ArrowBack} from '@mui/icons-material';
import TicTacToe from "./Grid"

function Game() {
    return (
        <Container >
            <div className="grid">
                <Box>
                    <Box id="gif">
                        <iframe src="https://giphy.com/embed/AsmtNrrJwzCxsVh7fx" frameBorder="0" allowFullScreen>
                        </iframe>
                    </Box>
                    <br />
                    <br />
                    <Typography id="title" variant="h4">Challenge Your Self</Typography>
                    <Typography id="subtitle" variant="subtitle1">To the ultimate game, its you VS you</Typography>
                        <Link to="/">
                            <Button 
                                startIcon={<ArrowBack/> }
                                color="error"
                                variant="outlined"  
                                size="lg" 
                                id="btn"
                                // fullWidth
                                >     
                                Quit  
                            </Button>
                        </Link>
                </Box>
                
                <Box id="game">
                    <TicTacToe style={{color:"primary"}}/>
                </Box>
            </div>
        </Container>
    )
}

export default Game
