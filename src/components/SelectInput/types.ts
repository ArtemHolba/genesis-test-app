import { GroupBase, OptionsOrGroups } from 'react-select'
import { Control, FieldValues } from 'react-hook-form'
import { CustomElementType } from '../TextInput/types'

export interface IProps {
  type: CustomElementType
  options?: OptionsOrGroups<unknown, GroupBase<unknown>> | undefined
  label?: string
  name: string
  required?: boolean
  validation?: Control<FieldValues, any>
}