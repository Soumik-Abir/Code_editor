import React from 'react'
import Editor from './Editor'
import { useContext } from 'react'
import { DataContext } from '../context/DataProvider'
import { Box, styled } from '@mui/material'

const Contanier =styled(Box)`
    display: flex;
    background-color: #060606;
    ${'' /* height: 50vh; */}
`


const Code = () => {

    const {html,setHtml,css,setCss,js,setJs} = useContext(DataContext);


  return (
    <Contanier>
      <Editor
        heading="HTML"
        icon='/'
        color='#FF3C41'
        value={html} 
        onChange={setHtml}
      />
      <Editor
        heading="CSS"
        icon='*'
        color='#0EBEFF'
        value={css}
        onChange={setCss}
      />
      <Editor
        heading="JS"
        icon='{}'
        color='#FCD000'
        value={js}
        onChange={setJs}
      />
    </Contanier>
  )
}

export default Code
