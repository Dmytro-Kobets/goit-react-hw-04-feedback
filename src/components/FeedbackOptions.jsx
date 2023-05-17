import { Component } from 'react';
import { OptionButton } from './App.styled';
import PropTypes from 'prop-types';

export class FeedbackOptions extends Component {
  render() {
    const { good, setGood, neutral, setNeutral, bad, setBad } = this.props;
    return (
      <>
        <OptionButton onClick={() => setGood(good + 1)}>Good</OptionButton>
        <OptionButton onClick={() => setNeutral(neutral + 1)}>
          Neutral
        </OptionButton>
        <OptionButton onClick={() => setBad(bad + 1)}>Bad</OptionButton>
      </>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
