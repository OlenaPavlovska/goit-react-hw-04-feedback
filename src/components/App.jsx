import { Component } from "react";
import { FeedbackOptions } from "./feedbackOptions/feedbackOptions.jsx";
import { Statistics } from './statistic/statistic.jsx';
import { Section } from './sectionTitle/sectionTitle.jsx';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = (type) => {
    this.setState((prevState) => ({
      [type]: prevState[type] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const { good } = this.state;
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  render() {
    const totalFeedback = this.countTotalFeedback();

    return (
      <div>
        <Section title="PLEASE LEAVE YOUR FEEDBACK">
          <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={this.onLeaveFeedback} />
        </Section>

        {totalFeedback > 0 ? (
          <Section title="STATISTIC">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={totalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Section title="STATISTIC">
            <p>There is no feedback yet.</p>
          </Section>
        )}
      </div>
    );
  }
}
