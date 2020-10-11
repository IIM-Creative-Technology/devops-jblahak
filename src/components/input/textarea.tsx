import * as React from 'react';
import {IFieldProps} from '../form/form';

const TextAreaField = ({placeholder, className, name}: IFieldProps): JSX.Element => {
  return (
    <>
      <textarea className={className} placeholder={placeholder} name={name}/>
    </>
  )
}

export default TextAreaField