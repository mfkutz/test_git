import { useCounter } from "../hooks/useCounter"

const Counter = () => {

    const {counter,suma,rest} = useCounter(0)

  return (
    <>
    <div>Actualizacion desde el componente rama 2</div>
    <button onClick={() =>{suma()}}>+</button>
    <button onClick={() => {rest()}}>-</button>
    <p>Contador: {counter}</p>
    </>
  )
}

export default Counter