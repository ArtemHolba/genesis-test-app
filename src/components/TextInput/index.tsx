import React, { FC, ReactElement } from 'react'
import styles from './styles.module.scss'
import { ITextInputProps } from './types'
import clsx from 'clsx'

const TextInput: FC<ITextInputProps> = ({name, textArea, label, placeholder, className, error, required, value, validation: register, ...rest}): ReactElement => {
  return (
    <div className={clsx(styles.inputWrapper, className)}>
      <label htmlFor={name} className={clsx(styles.label, {[styles.required]: required})}>{label}</label>
      {textArea ? (
        <div className={styles.textAreaContainer}>
          <textarea id={name} name={name} placeholder={placeholder} className={styles.textArea} {...register(name)} {...rest} />
        </div>
      ) : (
        <input id={name} name={name} value={value} placeholder={placeholder} className={styles.input} {...register(name)} {...rest} />
      )}
      {error && <span className={styles.error}>{error}</span>}
    </div>
  )
}

export default TextInput