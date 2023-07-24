 import css from './statistic.module.css'
import PropTypes from 'prop-types'
import React from "react";


export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
   return (
            <div className={css.statisticList}>
                <p>Good:  {good}</p>
                <p>Neutral:  { neutral}</p>
                <p>Bad:  { bad}</p>
                <p>Total:  { total}</p>
                <p>PositivePercentage:  { positivePercentage}%</p>
            </div>
        ) 
}

Statistics.propTypes = {
     good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired
}