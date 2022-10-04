import React from 'react';
import { FormInput } from './styles';

export const AddressForm = props => {
  return (
    <FormInput type="text" name={props.name} placeholder={props.placeholder} />
  );
};
