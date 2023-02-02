import { useState, useEffect } from 'react';

function App() {
    const [toDo, setToDo] = useState('');
    const [toDos, setToDos] = useState([]);
    const onChange = (event) => setToDo(event.target.value);
    const onSubmit = (event) => {
        event.preventDefault();
        if (toDo === '') {
            return;
        }
        /*
            수정하는 함수를 사용하는 방법 2가지
            1. 값을 보낼 때 이런식으로 보낼 수 있다
            => setToDo(''); : 이 값은 우리가 저장한 data를 가지고 있음
            2. 값을 보낼 때 함수로 보낼 수 있다
            => setToDos((currentArray) => [toDo, ...currentArray]);

        */
        setToDo('');
        setToDos((currentArray) => [toDo, ...currentArray]);
    };
    console.log(toDos);
    return (
        <div>
            <h1>My To Dos ({toDos.length})</h1>
            <form onSubmit={onSubmit}>
                <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do..."></input>
                <button>Add To Do</button>
            </form>
            <hr />
            <ul>
                {toDos.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}
export default App;
