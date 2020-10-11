import {FC} from 'react';
import * as React from 'react';
import Form, {IFieldEnum, IField} from './form/form';

export interface AppProps {
  title: string,
  body: string
}

const arrayComponents: Array<IField> = [
  {type: IFieldEnum.text, inputProps: {className: "form-input", placeholder: "Votre prénom"}},
  {type: IFieldEnum.text, inputProps: {className: "form-input", placeholder: "Votre nom"}},
  {type: IFieldEnum.email, inputProps: {className: "form-input", placeholder: "Votre email"}},
  {type: IFieldEnum.textarea, inputProps: {name: "message", className: "form-input", placeholder: "Votre message"}}
]

const App: FC<AppProps> = ({title, body}: AppProps): JSX.Element => {
  return (
    <>
      <main>
        <header>
          <h1>{title}</h1>
          <h2>{body}</h2>
        </header>
        <section>
          <Form components={arrayComponents}/>
        </section>
      </main>
    </>
  )
}

export default App

