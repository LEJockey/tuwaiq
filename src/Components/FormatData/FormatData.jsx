import React from 'react'
import useLangContext from '../../Hooks/useLangContext';


const FormatData = ({dateString}) => {

    const {lang, langs} = useLangContext()
    
    const calculateTimeDifference = (dateString) => {
    const currentDate = new Date();
    const givenDate = new Date(dateString);

    let timeDifferenceInMs = currentDate - givenDate;

    const millisecondsPerMonth = 30 * 24 * 60 * 60 * 1000;
    const months = Math.floor(timeDifferenceInMs / millisecondsPerMonth);

    timeDifferenceInMs = timeDifferenceInMs - (months* millisecondsPerMonth)

    const millisecondsPerWeek = 7 * 24 * 60 * 60 * 1000;
    const weeks = Math.floor(timeDifferenceInMs / millisecondsPerWeek);

    return { months, weeks };
    };

    const timeDifference = calculateTimeDifference(dateString);
    
        return (
            <span>{timeDifference.months} {langs[lang].Date.month}, {timeDifference.weeks} {langs[lang].Date.week} </span>
        );
}

export default FormatData