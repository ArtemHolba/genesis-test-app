export type CustomElementType = 'TextInput' | 'SelectInput'

export interface ITextInputProps {
  type: CustomElementType
  name: string
  value?: string
  className?: string
  label?: string
  placeholder?: string
  validation?: any
  error?: string
  required?: boolean
  textArea?: boolean
}