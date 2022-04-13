import React, { FC, ReactElement, useState } from 'react'
import Layout from 'src/components/Layout'
import styles from './styles.module.scss'
import Button from 'src/components/Button'
import {useModal} from 'src/hooks/useModal'
import Modal from 'src/components/Modal'
import CreateNewCustomer from 'src/components/CreateNewCustomer'
import { InputField } from '../components/CreateNewCustomer/types'

export type DefaultData = Record<string, unknown> | undefined

const defaultValuesData = {
  [InputField.NAME]: 'Artur Goncharov',
  [InputField.EIM]: '3200567-84',
  [InputField.NOTES]: 'Notes by Artur Goncharov',
  [InputField.METHOD]: { value: "ET", label: "Electronic bank transfer" },
}

const Main: FC = (): ReactElement => {
  const {isOpen, onToggle, onClose} = useModal()
  const [defaultValues, setDefaultValues] = useState<DefaultData>()

  const handleOpen = (actionType: 'edit' | 'open'): void => {
    if (actionType === 'open') {
      setDefaultValues(undefined)
      onToggle()
      return
    }

    setDefaultValues(defaultValuesData)
    onToggle()
  }

  return (
    <Layout>
      <div className={styles.mainPageWrapper}>
        <section className={styles.buttonsSection}>
          <Button text='Edit' type='outlined' className={styles.button} onClick={() => handleOpen('edit')} />
          <Button text='Open' className={styles.button} onClick={() => handleOpen('open')} />
        </section>
        <Modal isOpen={isOpen} onClose={onClose} title='Create new customer'>
          <CreateNewCustomer onClose={onClose} defaultValues={defaultValues} />
        </Modal>
      </div>
    </Layout>
  )
}

export default Main