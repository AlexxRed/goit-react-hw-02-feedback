import { Component } from 'react';
import styled from '@emotion/styled'
// import PropTypes from 'prop-types';

const GoodButton = styled.button`
    background-color: blue;
    font-size: 14px;
    padding: 5px;
    margin-right: 10px;
    color: darkblue;
`
const NeutralButton = styled.button`
    background-color: green;
    font-size: 14px;
    color: darkblue;
    padding: 5px;
    margin-right: 10px;

`
const BadButton = styled.button`
    background-color: yellow;
    font-size: 14px;
    padding: 5px;
    color: darkblue;
    
`

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

        console.log(this.state);
    }

    render() {
        return <div className=''>
        <GoodButton type='button' name='Good' onClick={this.handleIncrement}>Good</GoodButton>
        <NeutralButton type='button' name='Neutral' onClick={this.handleIncrement}>Neutral</NeutralButton>
        <BadButton type='button' name='Bad' onClick={this.handleIncrement}>Bad</BadButton>
            <div style={{
                display: 'flex',
                marginLeft: '60px'
            }}>
            <div>{this.state.goodValue}</div>
            <div>{this.state.neutralValue}</div>
            <div>{this.state.badValue}</div>
        </div>
    </div>
    }
}

export default FeedbackOptions















// export default function FeedbackOptions() {
// return (
//     <div className=''>
//         <button type='button'>Good</button>
//         <button type='button'>Neutral</button>
//         <button type='button'>Bad</button>
//     </div>
//   );
// }


// Statistics.propTypes = {
//   dataStatistics: PropTypes.arrayOf(PropTypes.object).isRequired,
// };
