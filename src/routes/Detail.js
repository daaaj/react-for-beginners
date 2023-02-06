import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
function Detail() {
    // const x = useParams();
    // console.log(x);
    // id: 48486 이란 객체로 출력됨
    // id => App.js에서 router에 /movie/:id 의 id이다
    // 다른걸로 변경 가능

    const { id } = useParams();
    const getMoive = async () => {
        // id값으로 movie api에서 정보를 fetch해옴
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        console.log(json);
    };

    useEffect(() => {
        getMoive();
    }, []);
    return <h1>Detail</h1>;
}
export default Detail;
