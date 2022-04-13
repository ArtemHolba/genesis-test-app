import { ButtonHTMLAttributes, CSSProperties, ComponentType, SyntheticEvent } from 'react'

export interface IProps {
  onClick?: (event: SyntheticEvent) => void
  text: string
  className?: string
  textClassName?: string
  disabled?: boolean
  type?: 'contained' | 'outlined'
  buttonProps?: ButtonHTMLAttributes<HTMLButtonElement>
  style?: CSSProperties
  StartIcon?: ComponentType
  EndIcon?: ComponentType
  id?: string
  form?: string
}