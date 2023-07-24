import PropTypes from 'prop-types'
import css from './feedbackOptions.module.css'

export const FeedbackOptions = ({ onLeaveFeedback }) => {
    return (
        <div className={css.btnList}>
            
            <button className={css.btn} type='button' name="good" onClick={onLeaveFeedback}>GOOD</button>
            
            <button className={css.btn} type='button' name="neutral" onClick={onLeaveFeedback}>NEUTRAL</button>
            
                <button className={css.btn} type='button' name="bad" onClick={onLeaveFeedback}>BAD</button>
            </div>
        )
}

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired
}











   
    
    
 


    

 