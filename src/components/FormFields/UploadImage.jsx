import React from 'react';
import PropTypes from 'prop-types';
import { at } from 'lodash';
import { useField } from 'formik';
import {
  InputLabel,
  FormControl,
  Button,
  FormHelperText
} from '@material-ui/core';


function UploadImage(props) {
    const { label, data, ...rest } = props;
    const [field, meta, helper] = useField(props);
    const { setValue } = helper;
    const { value: uploadedImage } = field;
    const [touched, error] = at(meta, 'touched', 'error');
    const isError = touched && error && true;
    function _renderHelperText() {
        if (isError) {
        return <FormHelperText>{error}</FormHelperText>;
        }
    }

    return (
    <FormControl {...rest} error={isError}>
        <InputLabel>{label}</InputLabel>
        <Button
            variant="contained"
            component="label"
            >
            Upload File
            <input
                type="file"
                hidden
                {...field}
                {...props}
                onChange={(event) => {
                    const file = event.target.files[0];
                    console.log(file)
                    //setValue(file); //=> error: Failed to set the 'value' property on 'HTMLInputElement
                    //setFieldValue("uploadedImage", file);
                    // setFieldValue("image_type", file.type);
                    //handleFileUpload(event);
                }}
            />
        </Button>
      {_renderHelperText()}
    </FormControl>
  );
}

UploadImage.defaultProps = {
  data: []
};

UploadImage.propTypes = {
  data: PropTypes.array.isRequired
};

export default UploadImage;
