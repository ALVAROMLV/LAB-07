import { useState } from 'react'
import { Button } from './components/Button'
import { WrapperList } from './components/WrapperList';
import './App.css'
import { List } from './components/List';

function App() {
  const buttonText = "Count : ";

  return (
    <>
      <WrapperList>
        <List></List>
      </WrapperList>
    </>
  )
}

export default App
