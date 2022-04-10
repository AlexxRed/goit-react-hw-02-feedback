import styled from '@emotion/styled'
// import PropTypes from 'prop-types';

const GoodFeedback = styled.li`
    background-color: blue;
    max-width: 70px;
    margin-bottom: 10px;
`
const NeutralFeedback = styled.li`
    background-color: green;
    max-width: 70px;
    margin-bottom: 10px;
`
const BadFeedback = styled.li`
    background-color: yellow;
    max-width: 70px;
`

const Statistics = ({good, neutral, bad}) =>{
    return (
        <ul>
            <GoodFeedback>Good:{good}</GoodFeedback>
            <NeutralFeedback>Neutral:{neutral}</NeutralFeedback>
            <BadFeedback>Bad:{bad}</BadFeedback>
        </ul>
      );
}
export default Statistics

// class Statistics extends Component {

//     render() {
//         return (
//     <ul>
//         <GoodFeedback>Good:0</GoodFeedback>
//         <NeutralFeedback>Neutral:0</NeutralFeedback>
//         <BadFeedback>Bad:0</BadFeedback>
//     </ul>
//   );
//     }
// }

// export default function Statistics() {
// return (
//     <ul>
//         <li>Good:0</li>
//         <li>Neutral:0</li>
//         <li>Bad:0</li>
//     </ul>
//   );
// }


// Statistics.propTypes = {
//   dataStatistics: PropTypes.arrayOf(PropTypes.object).isRequired,
// };