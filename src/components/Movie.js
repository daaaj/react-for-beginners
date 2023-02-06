// Movie 컴포넌트는 부모컴포넌트(App_movies)한테 프로퍼티 받아옴
import PropTypes from 'prop-types';
function Movie({ coverImg, title, summary, genres }) {
    return (
        <div>
            <img src={coverImg} alt={title}></img>
            <h2>{title}</h2>
            <p>{summary}</p>
            <ul>
                {genres.map((g) => (
                    <li key={g}>{g}</li>
                ))}
            </ul>
        </div>
    );
}

Movie.propType = {
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;
