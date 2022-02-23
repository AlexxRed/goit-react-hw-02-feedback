import { Component } from 'react';
// import PropTypes from 'prop-types';



class FeedbackOptions extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         value: 0,
    //     }
    // };
    state = {
        goodValue: 0,
        neutralValue:0,
        badValue: 0,
    };


    handleIncrement = (e) => {
        const buttonName = e.target.name
        console.log(buttonName);
        if (buttonName === 'Good') {
            this.setState({
                goodValue: 2,
            })
        }if (buttonName === 'Neutral') {
            this.setState({
                neutralValue: 2,
            })
        }if (buttonName === 'Bad') {
            this.setState({
                badValue: 2,
            })
        }

        console.log(this.state);
    }

    render() {
        return <div className=''>
        <button type='button' name='Good' onClick={this.handleIncrement}>Good</button>
        <button type='button' name='Neutral' onClick={this.handleIncrement}>Neutral</button>
        <button type='button' name='Bad' onClick={this.handleIncrement}>Bad</button>
            <div style={{
                display: 'flex',
                marginLeft: '30px'
            }}>
            <div>{this.state.goodValue}</div>
            <div>{this.state.neutralValue}</div>
            <div>{this.state.badValue}</div>
        </div>
    </div>
    }
}

// export default function FeedbackOptions() {
// return (
//     <div className=''>
//         <button type='button'>Good</button>
//         <button type='button'>Neutral</button>
//         <button type='button'>Bad</button>
//     </div>
//   );
// }

export default FeedbackOptions
// Statistics.propTypes = {
//   dataStatistics: PropTypes.arrayOf(PropTypes.object).isRequired,
// };
