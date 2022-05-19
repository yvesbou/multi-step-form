import checkoutFormModel from './checkoutFormModel';
const {
  formField: {
    nameOfNFT,
    description,
    blockchain,
    image
  }
} = checkoutFormModel;

export default {
  [nameOfNFT.name]: '',
  [description.name]: '',
  [blockchain.name]: '',
  [image.name]: '',
};
