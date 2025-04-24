import { useDispatch, useSelector } from "react-redux"
import { RootState } from '../types.ts'
import { useState } from "react";
import { increment,decrement ,incrementByPay,resetCount} from "../features/counterSlice";

function Counter() {
  const [amount,setAmount] = useState<number>(0)
  const count = useSelector((state:RootState)=> state.counter.value)
  const dispatch = useDispatch();
  
  const incrementCounterHandler = ()=>{
    dispatch(increment());
  }

  const decrementCounterHandler = ()=>{
    dispatch(decrement());
  }

  const icrementByPayload = ()=>{
    dispatch(incrementByPay(amount));
    setAmount(0);
  }
  const resetHandler = ()=>{
    dispatch(resetCount());
  }
  return (
    <div style={{
      maxWidth: '600px',
      margin: '40px auto',
      padding: '20px',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ 
        color: '#333',
        marginBottom: '30px'
      }}>
        Redux Counter: <span style={{ color: '#007bff' }}>{count}</span>
      </h1>

      <div style={{ 
        display: 'flex',
        gap: '10px',
        justifyContent: 'center',
        marginBottom: '20px'
      }}>
        <button 
          onClick={incrementCounterHandler}
          style={{
            padding: '10px 20px',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Increment
        </button>
        <button 
          onClick={decrementCounterHandler}
          style={{
            padding: '10px 20px',
            backgroundColor: '#dc3545',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Decrement
        </button>
        <button 
          onClick={resetHandler}
          style={{
            padding: '10px 20px',
            backgroundColor: '#dc3545',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          reset
        </button>
      </div>

      <div style={{
        display: 'flex',
        gap: '10px',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <input 
          type="number" 
          value={amount} 
          onChange={(e)=>{setAmount(Number(e.target.value))}}
          style={{
            padding: '8px',
            borderRadius: '5px',
            border: '1px solid #ced4da',
            width: '100px'
          }}
        />
        <button 
          onClick={icrementByPayload}
          style={{
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Add Amount
        </button>
      </div>
    </div>
  )
}

export default Counter
