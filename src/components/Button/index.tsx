import React, { FC } from 'react'

import styles from './styles.module.scss'
import { IProps } from './types'
import clsx from 'clsx'

const Button: FC<IProps> = ({
                              text,
                              onClick = () => {},
                              type = 'contained',
                              disabled = false,
                              buttonProps = {},
                              className = '',
                              textClassName = '',
                              style = {},
                              StartIcon,
                              EndIcon,
                              id = 'btn',
  form
                            }) => {
  return (
    <button
      form={form}
      id={id}
      style={style}
      className={clsx(styles.button, className, {
        [styles.outlined]: type === 'outlined',
        [styles.contained]: type === 'contained',
      })}
      disabled={disabled}
      onClick={onClick}
      {...buttonProps}
    >
      {StartIcon && (
        <div className={styles.iconWrapper}>
          <StartIcon />
        </div>
      )}
      <span
        id={id}
        className={clsx(styles.buttonText, textClassName, {
          [styles.startIcon]: !!StartIcon,
          [styles.endIcon]: !!EndIcon,
        })}
      >
        {text}
      </span>
      {EndIcon && (
        <div className={styles.iconWrapper}>
          <EndIcon />
        </div>
      )}
    </button>
  )
}

export default Button