import Button from './Button';
import styles from './App.module.css';
import { useState, useEffect } from 'react';

function App() {
    const [counter, setValue] = useState(0);
    const [keyword, setKeyword] = useState('');
    const onClick = () => setValue((prev) => prev + 1);
    const onChange = (event) => setKeyword(event.target.value);

    /*
        useEffect(a, b)
        : 어떤 부분을 처음 렌더링 될때만 바뀔수 있게 하기
        재랜더링 하더라도 처음 값이 안바뀌게...
    */
    useEffect(() => {
        // 랜더링 되더라도 call the API는 **한번만** 출력됨
        console.log('I run only once');
    }, []);
    useEffect(() => {
        console.log('I run when keyword changes.');
    }, [keyword]);
    useEffect(() => {
        console.log('I run when counter changes.');
    }, [counter]);
    useEffect(() => {
        // 합쳐줄수도 있음
        console.log('I run when keyword & counter changes.');
    }, [keyword, counter]);
    /*
        useEffect( () => { 
            여기 작성하면 한번만 랜더링됨
            근데 위에처럼 keyword가 변화할때만 랜더링 해줘~~는 [] 여기다 작성
            counter가 바뀔때는 랜더링 안됨
        } , [keyword] );
    */
    return (
        /*
        <div>
            <h1 className={styles.title}>Welcome back!</h1>
            <Button text={'Continue'} />
        </div>
        */
        <div>
            <input value={keyword} onChange={onChange} type="text" placeholder="Search here..."></input>
            <h1>{counter}</h1>
            <button onClick={onClick}>Click me!</button>
        </div>
    );
}

export default App;
