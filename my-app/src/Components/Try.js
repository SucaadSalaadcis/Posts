import React from 'react'

function Try() {
    const [count, setCount] = useState(0);

    useEffect(() => {
       console.log("welcome")
    });
  
    return (
        <>
        <h1>The value of count is :{count}</h1>
        <button onClick={() =>  setCount((count) => count + 1)}>Increment</button>
        </>
    )
}

export default Try