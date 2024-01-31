import React from 'react'
import { Route } from 'react-router-dom/cjs/react-router-dom.min'
import Home from './Pages/Home'
import Chat from './Pages/Chat'
import './App.css'
import { ChakraProvider } from '@chakra-ui/react'



//this routing is from react-router-dom version five dont get confuse with with the syntax 

const App = () => {
  return (
    <ChakraProvider>
    <div className='App'>
        <Route path = "/" component = {Home}  exact/> 
        <Route path="/chat" component ={Chat}/>
    </div>
    </ChakraProvider>
  )
}

export default App