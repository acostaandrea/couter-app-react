import {useState} from 'react'
import PropTypes from 'prop-types'


export const CounterApp = ({value}) => {
  const [counter, setCounter] = useState(value);
  const HandleAdd = () =>{
    // console.log(counter);
    // setCounter(counter + 1);
    setCounter((c) => c + 1);
  }
  return (
    <>
      <h1>CounterApp</h1>
      <h2> {counter} </h2>
      <button onClick={HandleAdd}>
        +1
        </button>
    </>
    
  )
}

CounterApp.PropTypes = {
    value: PropTypes.number.isRequired
}