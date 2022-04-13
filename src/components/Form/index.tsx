import React, { FC, ReactElement, useEffect } from 'react'
import styles from './styles.module.scss'
import {IProps} from './types'
import { useForm } from 'react-hook-form'
import clsx from 'clsx'

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'

const Form: FC<IProps> = ({children, onSubmit, className = '', id, schema, defaultValues}): ReactElement => {
  const formOptions = { resolver: yupResolver<yup.AnyObjectSchema>(schema) }
  const methods = useForm(formOptions);
  const {handleSubmit, formState: { errors }, setValue} = methods

  const getProps = (child: any): Record<any, any> => {
    const isController = !(child.props.type === 'TextInput')

    return {
      ...{
        ...child.props,
        validation: isController ? methods.control : methods.register,
        error: errors?.[child.props.name]?.message,
        key: child.props.name
      }
    }
  }

  useEffect(() => {
    if (!defaultValues) return

    for (const key in defaultValues) {
      setValue(key, defaultValues[key])
    }
  }, [defaultValues, setValue])

  return (
    <form id={id} onSubmit={handleSubmit(onSubmit)} className={clsx(styles.formWrapper, className)}>
      {React.Children.map(children, child => {
        return child.props.name
          ? React.createElement(child.type, getProps(child)) : child
      })}
    </form>
  )
}

export default Form