import { useState, useEffect } from 'react';

function Hello() {
    // 두개 똑같은데 위에꺼가 짧으니깐 더 좋나???
    useEffect(() => {
        console.log('hi :)');
        return () => console.log('bye :(');
    }, []);

    useEffect(function () {
        console.log('hi :)');
        return function () {
            console.log('bye :(');
        };
    }, []);
    return <h1>Hello</h1>;
}

function App() {
    const [showing, setShowing] = useState(false);
    const onClick = () => setShowing((prev) => !prev);

    return (
        <div>
            {showing ? <Hello /> : null}
            <button onClick={onClick}>{showing ? 'Hide' : 'Show'}</button>
        </div>
    );
}
export default App;
