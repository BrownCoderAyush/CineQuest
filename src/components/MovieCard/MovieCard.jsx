import { useNavigate } from 'react-router-dom';
import './MovieCard.css';
export default function MovieCard({Title,Year,Type,Poster,id}){
    const navigator = useNavigate();
    function handleClick(){
        navigator(`/movie/${id}`)
    }
    return (
        <div className='movie-wrapper' onClick={handleClick}>
            <div className="movie-image">
                <img src={Poster}/>
            </div>
            <div className="movie-title">
                <span>{Title}</span>
            </div>
            <div className="movie-year">
                <span>Released In : {Year}</span>
            </div>
            <div className="movie-type">
                <span>Type : {Type}</span>
            </div>
        </div>
    )
}