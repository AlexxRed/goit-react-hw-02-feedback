import { Component } from 'react';
import PropTypes from 'prop-types';



class FeedbackOptions extends Component {

    
    render() {
        return <div className=''>
        <button type='button'>Good</button>
        <button type='button'>Neutral</button>
        <button type='button'>Bad</button>
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
