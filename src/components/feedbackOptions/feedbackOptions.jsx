// import css from './data.module.css'
import PropTypes from 'prop-types'
import { Component } from "react";
import css from './feedbackOptions.module.css'


export class FeedbackOptions extends Component {
    
    render() {
        const { onLeaveFeedback } = this.props
        return (
            <div className={css.btnList}>
                <button className={css.btn} type='button' onClick={() => onLeaveFeedback('good')}>GOOD</button>
                <button className={css.btn} type='button' onClick={() => onLeaveFeedback('neutral')}>NEUTRAL</button>
                <button className={css.btn} type='button' onClick={() => onLeaveFeedback('bad')}>BAD</button>
            </div>
        )
    }
}

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired
}











   
    
    
 


    

 