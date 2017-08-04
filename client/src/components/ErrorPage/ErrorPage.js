import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';

function ErrorPage(props) {
  const errorText = props.errorText;

  return (
    <div>
      {errorText}
      <Button raised>
        重试
      </Button>
    </div>
  );
}

ErrorPage.propTypes = {
  errorText: PropTypes.node;
};

ErrorPage.defaultProps = {
  errorText: '不好意思，出了点差错。'
}

export default ErrorPage;