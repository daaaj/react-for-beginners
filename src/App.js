import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Detail from './routes/Detail';
import Home from './routes/Home';

function App() {
    /*
        BrowserRouter 와 HashRouter의 차이
        : url의 생김새에 다르다
        Browser는 url주소가 /1234 이렇게 생김
        Hash는 url 주소가 /# 이렇게 생김
        # 붙이기 싫어~~
    */
    return (
        <Router>
            <Switch>
                <Route path="/movie/:id">
                    {/* 변수사용할꺼다는 :poo 이렇게 작성하기_router가 넘거줌
                그럼 Detail에서 useParams()로 받아올 수 있다 */}
                    <Detail />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
