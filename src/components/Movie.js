//노마드코더 rendering Movies 영상
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const MovieBlock = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem 3rem;
    background: #dddddd;
    margin-top: 1rem;

    .side__left {
        flex: 1;
        display: inherit;
        align-items: center;
        
        .movie__title {
            flex: 1;
            width: 2rem;
        }

        .rankBlock {
            display: flex;
            flex: 0.3;
            .movie__rank{
                border: 1px solid black;
                border-radius: 50%;
                padding: 0.5rem 1rem;
                font-size: 1.3rem;
            }

            .movie__rankOldAndNew{
                align-self: baseline;
            }
        }
    }

    .side__right {
        flex: 1;
        display: inherit;
        flex-flow: column wrap;
        justify-content: center;
        align-items: flex-end;
    }
`



const Movie = ({id,title,openDt, rank, rankOldAndNew, audiAcc}) => {
    return (
        <MovieBlock>
            <div className="side__left">
                <div className="rankBlock">
                    <h5 className="movie__rank">{rank}</h5>
                    <h6 className="movie__rankOldAndNew">{rankOldAndNew}
                    </h6>
                </div>
                <h2 className="movie__title">{title}</h2>
            </div>
            <div className="side__right">
                <h3 className="movie__openDate">개봉일 : {openDt}</h3>
                <h5 className="audiAcc">관객 수(누적) : {audiAcc}</h5>
            </div>
        </MovieBlock>
            

    )
};

Movie.propTypes = {
    id: PropTypes.string.isRequired,  // id = movieCd
    title : PropTypes.string.isRequired, //title = movieNm
    openDt : PropTypes.string.isRequired,
    rank: PropTypes.string.isRequired,
    rankOldAndNew: PropTypes.string.isRequired,
    audiAcc: PropTypes.string.isRequired,
}

export default Movie;