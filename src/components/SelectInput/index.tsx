import React, { FC, ReactElement } from "react"
import Select from "react-select"
import styles from './styles.module.scss'
import clsx from 'clsx'
import { Controller } from "react-hook-form"
import {IProps} from './types'

const SelectInput: FC<IProps> = ({name, options, label, required, validation: control  }): ReactElement => {
  return (
    <div className={styles.selectWrapper}>
      <label className={clsx(styles.selectLabel, {[styles.required]: required})}>{label}</label>
      <Controller control={control} name={name} render={({field}) => (
        <Select {...field} className={styles.select} options={options} placeholder='Choose payment method' />
      )}/>
    </div>
  )
}

export default SelectInput