import React, { FC, ReactElement } from 'react'
import Portal from 'src/components/Portal'
import styles from './styles.module.scss'
import {IProps} from './types'
import clsx from 'clsx'
import { ReactComponent as CloseIcon } from 'src/icons/сlose.svg'

const Modal: FC<IProps> = ({children, title, isOpen, onClose}):ReactElement => {

  return <Portal>
    {isOpen && (
      <div className={clsx(styles.overlay, {[styles.enterDone]: isOpen})}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.closeIconWrapper} onClick={onClose}>
              <CloseIcon />
            </div>
          </div>
          <div className={styles.modalContent}>
            {children}
          </div>
        </div>
      </div>
    )}
  </Portal>
}

export default Modal