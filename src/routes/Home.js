import { useState, useEffect } from 'react';
import Movie from '../components/Movie';

// App.js 파일안에꺼 그대로 가져온거야!!
function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        /*
            좀더 줄이자면 이 둘을 합칠 수도 있다!!
            const response = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`);
            const json = await response.json();
        */
        const json = await (await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`)).json();
        setMovies(json.data.movies);
        setLoading(false);
    };
    useEffect(() => {
        // .then 쓰는것보다 async, await를 사용한다!! 바꿔주기
        /*
        fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`)
            .then((response) => response.json())
            .then((json) => {
                setMovies(json.data.movies);
                setLoading(false);
            });
        */
        getMovies();
    }, []);
    console.log(movies);
    return (
        <div>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <div>
                    {movies.map((movie) => (
                        <Movie key={movie.id} id={movie.id} coverImg={movie.medium_cover_image} title={movie.title} summary={movie.summary} genres={movie.genres} />
                    ))}
                </div>
            )}
        </div>
    );
}
export default Home;
