export enum InputField {
  NAME = 'name',
  EIM = 'eim',
  NOTES = 'notes',
  METHOD = 'method'
}

export interface IProps {
  defaultValues?: any
  onClose?: () => void
  formData?: Record<InputField, any>
}

export interface IRequestCreateNewCustomer {
  [InputField.NAME]: string
  [InputField.EIM]?: string
  [InputField.NOTES]?: string
  [InputField.METHOD]?: string
}