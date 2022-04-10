import styled from '@emotion/styled'
// import PropTypes from 'prop-types';

const StatisticsWrapper = styled.ul`
    background-color: grey;
    width: 200px;
    border-radius: 5px;
`

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
    margin-bottom: 10px;
`

const TotalFeedback = styled.li`
    background-color: purple;
    max-width: 70px;
    margin-bottom: 10px;
`
const PositivePercentage = styled.li`
    background-color: brown;
    max-width: 170px;
`

const Statistics = ({good, neutral, bad, total, percentage}) =>{
    return (
        <StatisticsWrapper>
            <GoodFeedback>Good:{good}</GoodFeedback>
            <NeutralFeedback>Neutral:{neutral}</NeutralFeedback>
            <BadFeedback>Bad:{bad}</BadFeedback>
            <TotalFeedback>Total:{total}</TotalFeedback>
            <PositivePercentage>Positive feedback:{percentage}%</PositivePercentage>
        </StatisticsWrapper>
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