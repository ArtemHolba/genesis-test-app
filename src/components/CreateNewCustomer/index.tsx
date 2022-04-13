import React, { FC } from 'react'
import styles from './styles.module.scss'
import SelectInput from 'src/components/SelectInput'
import { selectData } from '../../store'
import Form from 'src/components/Form'
import Button from 'src/components/Button'
import TextInput from 'src/components/TextInput'
import { InputField, IProps, IRequestCreateNewCustomer } from './types'
import { ITextInputProps } from '../TextInput/types'
import * as yup from 'yup'
import { SchemaOf } from 'yup'
import { SubmitHandler } from 'react-hook-form'

type SchemaType = Record<InputField, any>

export const schema: SchemaOf<SchemaType> = yup.object().shape({
  [InputField.NAME]: yup.string().max(255, 'The provided value is too long. Maximum length is 255 symbols.').required('Customer name is a required field'),
  [InputField.EIM]: yup.string().max(10, 'The provided value is too long. Maximum length is 10 symbols.'),
  [InputField.NOTES]: yup.string().max(255, 'The provided value is too long. Maximum length is 255 symbols.'),
  [InputField.METHOD]: yup.string(),
})

const CreateNewCustomer: FC<IProps> = ({onClose, formData, defaultValues}) => {
  const onSubmit: SubmitHandler<IRequestCreateNewCustomer> = (data, event): void => {
    event?.preventDefault()
    console.log('form data: ', data)
  }

  const textInputs: ITextInputProps[] = [
    {name: InputField.NAME, type: 'TextInput', label: 'Customer name', placeholder: 'Enter customer name', required: true },
    {name: InputField.EIM, type: 'TextInput', label: 'Customer EIN', placeholder: 'Enter customer EIN' },
    {name: InputField.NOTES, type: 'TextInput', label: 'Notes', placeholder: 'Notes visible only to you and your team', textArea: true }
  ]

  return (
    <div className={styles.createCustomerWrapper}>
      <Form id='createCustomer' onSubmit={onSubmit} defaultValues={defaultValues} className={styles.createCustomerForm} schema={schema}>
        {textInputs.map(input => (
          <TextInput key={input.name} {...input} />
        ))}
        <h3 className={styles.subTitle}>Payment and billing:</h3>
        <SelectInput type='SelectInput' name={InputField.METHOD} options={selectData} label='Primary payment method' />
      </Form>
      <div className={styles.createCustomerFooter}>
        <Button id='cancel-btn' text='Cancel' type='outlined' onClick={onClose} buttonProps={{type: 'button'}} />
        <Button form='createCustomer' id='create-btn' text='Create' type='contained' buttonProps={{type: 'submit'}} />
      </div>
    </div>
  )
}

export default CreateNewCustomer