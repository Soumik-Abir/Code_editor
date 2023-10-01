import React from 'react'
import {AppBar, Toolbar, styled} from '@mui/material'
import logo from '../assets/codepen_logo.png'


const Contanier = styled(AppBar)`
    background: #060606;
    height: 9vh;
`

const Header = () => {
  return (
    <Contanier position='static'>
        <Toolbar>
            <img src={logo} alt='logo' style={{width: 40, paddingBottom: 6}}/>
        </Toolbar>
    </Contanier>
  )
}

export default Header
