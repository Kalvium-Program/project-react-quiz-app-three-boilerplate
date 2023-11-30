import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ResultPage = () => {
    // Quiz data (question, options, and correct answer)


    let localscore = JSON.parse(localStorage.getItem("score"));
    let localincorrect = JSON.parse(localStorage.getItem("incorrect"));

    return (
        <div>

            <div className='details-container'>
                <h3>Your Score is {localscore} </h3>
                <div className='tapes'>
                    <p>Total number of questions</p>
                    <p>15</p>
                </div>
                <div className='tapes'>
                    <p>Number of attempted questions</p>
                    <p>{+(localincorrect)+(+localscore/10)}</p>
                </div>
                <div className='tapes'>
                    <p>Number of correct answers</p>
                    <p>{(+localscore/10)}</p>
                </div>
                <div className='tapes'>
                    <p>Number of wrong answers</p>
                    <p>{+(localincorrect)}</p>
                </div>
            </div>
            <div className='button_container'>
                <Link to="/quiz">
                <button >
                    Play again
                </button>
                </Link>
                <Link to="/">
                <button >
                    Back to home
                </button>
                </Link>
            </div>
        </div>
    );
};

export default ResultPage;
