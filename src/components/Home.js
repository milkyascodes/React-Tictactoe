import React from 'react'
import { Button, Container, Typography } from '@mui/material'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import { Box } from '@mui/system'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import GitHubIcon from '@mui/icons-material/GitHub';
import bg from '../img/bg.png'
import "tachyons";



function Home() {
    return (
        <Container >
            <div className="grid">

                <Box>
                    <Typography id="title" variant="h2">Tic Tac Toe</Typography>
                    <Typography id="subtitle" variant="subtitle1" color="text.secondary">The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row is the winner.</Typography>
                    <a href="https://github.com/milkyascodes" target="_blank">
                        <Button startIcon={<GitHubIcon/> } variant="text" size="small" sx={{ color: 'warning.main' }}>
                            Follow me
                        </Button>
                    </a>
                    <br />

                    <Link to="/game">
                        <Button startIcon={<SportsEsportsIcon/> } variant="contained" className="grow" size="lg">
                            Start Game
                        </Button>
                    
                    </Link>
                </Box>
                <Box id="img">
                    <img src={bg} alt="" />
                </Box>
                
            </div>
        </Container>
    )
}

export default Home
