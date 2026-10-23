import {useState} from "react";

function App() {

    const [todoList, setTodoList] = useState([]);
    const [todoValue, setTodoValue] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (todoValue === "" || todoValue === " ") {return;}
        setTodoList([...todoList, todoValue]);
        setTodoValue("");

    const handleDeleteTodo = (event) => {
        // todoList에서 지워야되는 대상을 지우는 것
        // 지워야 되는 대상을 특정하려면?
        // 클릭을 한 대상, event가 일어난 대상은 button임. "밥먹기"라는 글자도 아니고 li도 아님

        // button을 통해서는 우리가 삭제해야 하는 "밥먹기" 라는 그 대상 그 자체, 인덱스 번호를 가져올 수 있는 방법이 없음
        //
    };

    };

    return (
        <>
            <h1>My ToDo ({todoList.length})</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type={"text"}
                    placeholder={"Write your to do ..."}
                    onChange={(event) => { setTodoValue(event.target.value) }}
                    value={todoValue}
                />
                <button type="submit">Add To Do</button>
            </form>
            <hr />
            <ul>
                {todoList.map((item, index) => <li key={index}>
                            {item}
                        <button onClick={() => {
                            return handleDeleteTodo(index);

                            // onClick이든 onSubmit, onChange 에 제공되어야 되는 함수 설계도엔 event만 제공함
                            //
                            // event 뿐만 아니라 다른 데이터도 필요하다면 그 함수 설계도만으로는 불가능
                            //      => 함수 안의 함수르 새로 만들어서 내가 원하는 데이터를 집어넣어서 함수를 실행

                            // onClick이 실행되면 () => {} 가 실행되는데
                            // 그 안에 handleDeleteTodo(index) 가 실행됨
                        }}>❌</button>
                    </li>)}
            </ul>
        </>
    )
}

export default App;