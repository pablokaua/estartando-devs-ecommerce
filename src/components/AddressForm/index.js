import React from 'react';
import { FormInput } from './styles';

export const AddressForm = props => {
  console.log(props.placeholder);
  return <FormInput type="text" placeholder={props.placeholder} />;
};
