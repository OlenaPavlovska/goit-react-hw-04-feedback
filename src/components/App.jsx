import { useState } from "react";
import { FeedbackOptions } from './feedbackOptions/feedbackOptions';
import { Statistics } from './statistic/statistic';
import { Section } from './sectionTitle/sectionTitle';


export const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const onLeaveFeedback = e => {
    switch (e) {
      case 'good':
        setGood(prevState => prevState + 1)
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1)
        break;
      case 'bad':
        setBad(prevState => prevState + 1)
        break;
      default:
        return;
      
    }
    }

   const countTotalFeedback = () => {
   return good + neutral + bad;
  }
  
const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100) || 0;
  }

   return (
      <div>
        <Section title="PLEASE LEAVE YOUR FEEDBACK">
         <FeedbackOptions onLeaveFeedback={onLeaveFeedback} />
        </Section>

        {countTotalFeedback > 0 ? (
          <Section title="STATISTIC">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Section title="STATISTIC">
            <p>There is no feedback yet</p>
          </Section>
        )}
      </div>
    )
}
 











