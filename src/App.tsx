import React from 'react'
import Welcome from './Components/Welcome'
import { Counter } from './Components/Counter'
import './styles.css'
import img from './react.png'
import svg from './React-icon.svg'
export const App = () => {
  const name = "darab karim"
  return (
    <>
      <h1>
        Hello {name} - {process.env.NODE_ENV} {process.env.name}
      </h1>
      <img src={img} alt="logo" height={100} width={200} />
      <img src={svg} alt="logo" width={300} />
      <Welcome />
      <Counter />
    </>
  )
}
