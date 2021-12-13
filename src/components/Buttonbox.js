import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

class Buttonbox extends React.Component {
    render() {
        return(
            <PopupState variant="popover" popupId="demo-popup-menu">
                {(popupState) => (
                <React.Fragment>
                    <Button variant="contained" color="primary" {...bindTrigger(popupState)}>
                    Open Menu
                    </Button>
                    <Menu {...bindMenu(popupState)}>
                    <MenuItem onClick={popupState.close}>Fisrt</MenuItem>
                    <MenuItem onClick={popupState.close}>Second</MenuItem>
                    </Menu>
                </React.Fragment>
                )}
            </PopupState>
        )
    }
}

export default Buttonbox;

