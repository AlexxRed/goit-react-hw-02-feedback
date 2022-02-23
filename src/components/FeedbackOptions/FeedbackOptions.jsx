import { Component } from 'react';
// import PropTypes from 'prop-types';



class FeedbackOptions extends Component {


    handleIncrement = (e) => {
        console.log("click")
        console.log(e);
    }

    render() {
        return <div className=''>
            <button type='button' onClick={this.handleIncrement}>Good</button>
        <button type='button'  onClick={this.handleIncrement}>Neutral</button>
        <button type='button'  onClick={this.handleIncrement}>Bad</button>
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
