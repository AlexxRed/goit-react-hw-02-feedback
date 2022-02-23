import Section from './Section/Section'
import Statistics from './Statistics/Statistics'
import FeedbackOptions from './FeedbackOptions/FeedbackOptions'

export const App = () => {
  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions/>
      </Section>
      <Section title="Statistics">
        <Statistics/>
      </Section>
    </div>
  );
};
