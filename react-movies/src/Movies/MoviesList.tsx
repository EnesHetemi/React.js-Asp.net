import css from './MoviesList.module.css';
import GenericList from './../utils/GenericList';
import IndividualMovie from './IndividualMovie';
import { movieDTO } from './movies.model';

export default function MoviesList(props: moviesListProps) {
    return <GenericList 
    list={props.movies}>
        <div className={css.div}>
            {props.movies?.map(movie =>
                <IndividualMovie {...movie} key={movie.id} />)}
        </div>
    </GenericList>
}

interface moviesListProps {
    movies?: movieDTO[];
}