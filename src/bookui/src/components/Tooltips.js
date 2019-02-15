import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

const styles = {
  button: {
    fontSize:'15px',
  },
  customWidth: {
    fontSize:'25px',
    maxWidth: 500,
  },
};

const longText = `
Aliquam eget finibus ante, non facilisis lectus.`;

function VariableWidthTooltip(props) {
  return (
    <div>
      <Tooltip title={longText} className={styles.customWidth} >
        <Button className={styles.button} >{props.ButtonText}</Button>
      </Tooltip>
    </div>
  );
}


export default withStyles(styles)(VariableWidthTooltip);
