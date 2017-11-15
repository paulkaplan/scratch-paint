import React from 'react';
import PropTypes from 'prop-types';
import Popover from 'react-popover';

import {defineMessages, injectIntl, intlShape} from 'react-intl';
import ColorPicker from './color-picker/color-picker.jsx';
import ColorButton from './color-button/color-button.jsx';
import InputGroup from './input-group/input-group.jsx';
import Label from './forms/label.jsx';

const messages = defineMessages({
    stroke: {
        id: 'paint.paintEditor.stroke',
        description: 'Label for the color picker for the outline color',
        defaultMessage: 'Outline'
    }
});

const StrokeColorIndicatorComponent = props => (
    <InputGroup disabled={props.disabled}>
        <Popover
            body={
                <ColorPicker
                    color={props.strokeColor}
                    colors={props.colors}
                    onChangeColor={props.onChangeStrokeColor}
                />
            }
            isOpen={props.strokeColorModalVisible}
            preferPlace="below"
            onOuterAction={props.onCloseStrokeColor}
        >
            <Label text={props.intl.formatMessage(messages.stroke)}>
                <ColorButton
                    outline
                    color={props.strokeColor}
                    onClick={props.onOpenStrokeColor}
                />
            </Label>
        </Popover>
    </InputGroup>
);

StrokeColorIndicatorComponent.propTypes = {
    disabled: PropTypes.bool.isRequired,
    intl: intlShape,
    onChangeStrokeColor: PropTypes.func.isRequired,
    onCloseStrokeColor: PropTypes.func.isRequired,
    onOpenStrokeColor: PropTypes.func.isRequired,
    strokeColor: PropTypes.string,
    strokeColorModalVisible: PropTypes.bool.isRequired
};

export default injectIntl(StrokeColorIndicatorComponent);
