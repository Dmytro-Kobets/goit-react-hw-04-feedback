import { Component } from 'react';
import { OptionButton } from './App.styled';
import PropTypes from 'prop-types';

export class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return options.map(option => (
      <OptionButton
        onClick={e => {
          onLeaveFeedback(option.toLowerCase());
        }}
        key={option}
      >
        {option}
      </OptionButton>
    ));
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
