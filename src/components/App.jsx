import { Component } from 'react';
import Section from './Section/Section'
import Statistics from './Statistics/Statistics'
import FeedbackOptions from './FeedbackOptions/FeedbackOptions'
import Notification from './Notification/Notification';

class App extends Component{

  static defaultProps = {
    initialGoodValue: 0,
    initialNeutralValue:0,
    initialBadValue: 0,
    initialTotal: 0,
    initialPositiveFeedback: 0,
};

state = {
  goodValue: this.props.initialGoodValue,
  neutralValue:this.props.initialNeutralValue,
  badValue: this.props.initialBadValue,
  total: this.props.initialTotal,
  positiveFeedback: this.props.initialPositiveFeedback,
};

handleIncrement = (e) => {
  const buttonName = e.target.name
  // console.log(buttonName);
  if (buttonName === 'Good') {
      this.setState(({goodValue}) => {
          return {
              goodValue: goodValue +1
          }
      })
  }if (buttonName === 'Neutral') {
      this.setState(prevState => {
          return {
              neutralValue: prevState.neutralValue +1
          }
      })
  }if (buttonName === 'Bad') {
      this.setState(({badValue}) => {
          return {
              badValue: badValue +1
          }
      })
  }

}

countTotalFeedback = () => {
  const feedbackSum = this.state.goodValue + this.state.neutralValue + this.state.badValue
    return feedbackSum 
}

countPositiveFeedbackPercentage = () => {
  let positiveFeedbackPercentage = 0
  this.state.goodValue > 0 ?
  positiveFeedbackPercentage = Math.round(100 / ((this.state.goodValue + this.state.neutralValue + this.state.badValue) / this.state.goodValue)) 
  : positiveFeedbackPercentage = 0 
  return positiveFeedbackPercentage
}

  render(){
    const totalFeedback = this.countTotalFeedback()
    const positivePercentage = this.countPositiveFeedbackPercentage()
    const {goodValue, neutralValue, badValue} = this.state
    // console.log(totalFeedback)
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions 
          initialGoodValue={0}
          initialNeutralValue={0}
          initialBadValue={0}
          initialTotal={0}
          initialPositiveFeedback={0}
          onHandleIncrement={this.handleIncrement} 
          />
        </Section>
        <Section title="Statistics">
        {totalFeedback > 0 ? (
         <Statistics
         good={goodValue}
         neutral={neutralValue}
         bad={badValue}
         total={totalFeedback}
         percentage={positivePercentage}
         />
      ) : (
        <Notification/>
      )}
        </Section>
      </>
    );
  }
}
export default App
