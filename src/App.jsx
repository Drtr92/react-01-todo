import {useState} from "react";

function App() {
    const [count, setCount] = useState(0);

    function addCount() {
        setCount(count + 1);

    }
    return <button onClick={addCount}>지금 현재 count state의 값은 {count}입니다.</button>;
}

export default App;