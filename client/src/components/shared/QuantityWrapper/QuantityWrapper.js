import React from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import AddIcon from 'material-ui-icons/Add';
import RemoveIcon from 'material-ui-icons/Remove';


const styleSheet = createStyleSheet('QuantityWrapper', {
  root: {
    display: 'flex',
    width: 144,
  },
  textField: {
    margin: 'auto',
  },
  input: {
    font: 'inherit',
    color: 'currentColor',
    width: '100%',
    border: 0,
    margin: 0,
    padding: '7px 0',
    display: 'block',
    boxSizing: 'content-box',
    background: 'none',
    verticalAlign: 'middle',
    textAlign: 'center',
    height: '1em',
    outline: 'none',
  },
});

function QuantityWrapper(props) {
  const classes = props.classes;
  const { handleRemove, handleAdd, handleOnchange, quantity, getInputRef } = props;
  return (
    <div className={classes.root}>
      <IconButton
        aria-label="Remove"
        onTouchTap={handleRemove}
        disabled={props.disableRemove}
      >
        <RemoveIcon />
      </IconButton>

      <TextField
        value={quantity}
        className={classes.textField}
        inputClassName={classes.input}
        onChange={handleOnchange}
        inputRef={input => getInputRef(input)}
      />

      <IconButton
        aria-label="Add"
        onTouchTap={handleAdd}
        disabled={props.disableAdd}
      >
        <AddIcon />
      </IconButton>
    </div>
  );
}

QuantityWrapper.propTypes = {
  classes: PropTypes.object.isRequired,
  handleRemove: PropTypes.func.isRequired,
  handleAdd: PropTypes.func.isRequired,
  handleOnchange: PropTypes.func.isRequired,
  quantity: PropTypes.number.isRequired,
  disableAdd: PropTypes.bool,
  disableRemove: PropTypes.bool,
  getInputRef: PropTypes.func,
};

QuantityWrapper.defaultProps = {
  disableAdd: false,
  disableRemove: false,
  getInputRef: () => {},
};

export default withStyles(styleSheet)(QuantityWrapper);
