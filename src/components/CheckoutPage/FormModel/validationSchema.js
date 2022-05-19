import * as Yup from 'yup';
import moment from 'moment';
import checkoutFormModel from './checkoutFormModel';

const SUPPORTED_FORMATS = [
  "image/jpg",
  "image/jpeg",
  "image/gif",
  "image/png"
];


const {
  formField: {
    nameOfNFT,
    description,
    blockchain,
    image
  }
} = checkoutFormModel;


export default [
  Yup.object().shape({
    [nameOfNFT.name]: Yup.string().required(`${nameOfNFT.requiredErrorMsg}`),
    [description.name]: Yup.string().required(`${description.requiredErrorMsg}`),
    [blockchain.name]: Yup.string()
      .nullable()
      .required(`${blockchain.requiredErrorMsg}`),
  }),
  Yup.object().shape({
    [image.name]: Yup.mixed()
        .required('You need an image.')
        .test(
          "fileFormat",
          "Unsupported Format",
          value => value && SUPPORTED_FORMATS.includes(value)
      )
  })
  
];
