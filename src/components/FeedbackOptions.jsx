import { OptionButton } from './App.styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({
  good,
  setGood,
  neutral,
  setNeutral,
  bad,
  setBad,
}) => {
  return (
    <>
      <OptionButton onClick={() => setGood(good + 1)}>Good</OptionButton>
      <OptionButton onClick={() => setNeutral(neutral + 1)}>
        Neutral
      </OptionButton>
      <OptionButton onClick={() => setBad(bad + 1)}>Bad</OptionButton>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
