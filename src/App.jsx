import {useState} from "react";

function App() {

    const [todoList, setTodoList] = useState([]);

    // 사용자가 input에 입력한 값을, 버튼을 눌렀을 때 todoList에 기록하는 "기능" => 버튼에 onClick 만들어야 하네?
    // setTodoList를 통해 원래 있던 배열에 사용자가 입력한 값을 추가해서 덮어쓰기 해야함
    // 그렇다면, "사용자가 입력한 값"은 어떻게 구하지?

    // 사용자가 입력한 값을 꺼내오는건 불가능
    // 사용자가 키보드를 눌렀을 때, 발동시킬 수 있는 속성 => onChange

    function clickButton() {
        setTodoList([]);
    }

    return (
        <>
            <h1>My ToDo ({todoList.length})</h1>
            <form>
                <input type="text" placeholder="Write your to do ..." />
                <button type="submit">Add To Do</button>
            </form>
            <hr />
            <ul>
                <li>더미</li>
                <li>데이터</li>
                <li>투두 추가</li>
            </ul>
        </>
    )
}

export default App;