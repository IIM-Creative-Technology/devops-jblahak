import {FC} from 'react';
import * as React from 'react';

import InputField from '../input/input'
import TextAreaField from '../input/textarea'

export enum IFieldEnum {
  text = "text",
  textarea = "textarea",
  email = "email",
  default = "text"
}

export interface IFieldProps {
  id?: number,
  name?: string,
  className: string,
  placeholder: string
}

export interface IField {
  type: IFieldEnum,
  inputProps: IFieldProps
}

interface FormProps {
  components: Array<IField>
}

const compMap: any = {
  text: InputField,
  textarea: TextAreaField,
  email: InputField,
}

interface SubmitValue {
  name: string;
  value: string;
}

// const NumberFieldOrigin: React.FC<IFieldProps> = ({name, value}: IFieldProps): JSX.Element => {
//   return (<></>);
// };
//
// const NumberField: any = forwardRef(
//   ({name, value}: IFieldProps, ref: any): JSX.Element => {
//
//     useImperativeHandle(ref,
//       (): any => ({
//         value: 'text',
//         func():any {
//           return 'tt';
//         },
//       }));
//
//     return (<></>);
//   });


const Form: FC<FormProps> = ({components}: FormProps): JSX.Element => {
  return (
    <form>
      {components.map((component: IField): JSX.Element => {
        const Component: FC<IFieldProps> = compMap[component.type]
        return(
          <>
            <Component className={component.inputProps.className} placeholder={component.inputProps.placeholder} name={component.inputProps.name}/>
          </>
        )
      })}
      {/*<button onClick={onclick} value="save">*/}
    </form>
  )
}

export default Form

