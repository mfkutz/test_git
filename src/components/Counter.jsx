import { useState } from "react"

const Counter = () => {

    const [count, setCount] = useState(0)

  return (
    <>
    <div>Actualizacion desde el componente rama 2</div>
    <button onClick={() => setCount(count + 1)}>Incrementar</button>
    <button onClick={() => setCount(count - 1)}>Decrementar</button>
    <p>Contador: {count}</p>
    </>
  )
}

export default Counter