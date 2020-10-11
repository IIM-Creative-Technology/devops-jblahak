import * as React from 'react';
import {IFieldProps} from '../form/form';

const InputField = ({placeholder, className}: IFieldProps): JSX.Element => {
  return (
    <>
      <input type="text" placeholder={placeholder} className={className}/>
    </>
  )
}

export default InputField