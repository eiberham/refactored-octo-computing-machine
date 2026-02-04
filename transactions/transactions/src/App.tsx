import { useState } from 'react'
import './App.css'

function App() {
  const [amount, setAmount] = useState(0)
  const [description, setDescription] = useState(0)

  const onAmountChange = (e) => {
    setAmount(e.value)
  }

  const onDescriptionChange = (e) => {
    setDescription(e.description)
  }

  const postTransaction = () => {
    fetch('http://localhost:3000/transaction', {
      body: JSON.stringify({ description, amount })
    })
  }

  return (
    <>
      <form onSubmit={postTransaction}>
        <input type="number" name="amount" value={amount} onChange={onAmountChange} />
        <input type="text" name="description" value={description} onChange={onDescriptionChange}/>
      </form>
    </>
  )
}

export default App
