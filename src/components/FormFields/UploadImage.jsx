import React, { useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { at } from 'lodash';
import { Field, useField } from 'formik';
import {
  InputLabel,
  FormControl,
  Button,
  FormHelperText
} from '@material-ui/core';


function UploadImage(props) {
  //const { ...rest } = props; // maybe leave that out

  const { image } = props;
  const [field, meta, helper] = useField(image.name);
  const { touched, error } = meta;
  const { setValue } = helper;
  const isError = touched && error && true;
  const { value } = field;
  

  const [fileName, setFileName] = useState(value.name);
  const [file, setFile] = useState(value.file);
  const [src, setSrc] = useState(value.src);

  const _onChange = (e) => {
    let reader = new FileReader();
    let file = e.target.files[0];
    if (file) {
      reader.onloadend = () => setFileName(file.name);
      if (file.name !== fileName) {
        reader.readAsDataURL(file);
        setSrc(reader);
        setFile(file);
      }
    }
  };

  function _renderHelperText() {
    if (isError) {
    return <FormHelperText>{error}</FormHelperText>;
    }
  }

  
    useEffect(() => {
      if (file && fileName && src) {
        setValue({ file: file, src: src, fileName: fileName });
        console.log(fileName);
        console.log(src)
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [src, fileName, file]);

    return (
    <FormControl error={isError}> 
        <InputLabel>{image.label}</InputLabel>
        <input
              variant="outlined"
              field={field}
              type="file"
              //component={UploadField}
              onChange={_onChange}
              
            />
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
