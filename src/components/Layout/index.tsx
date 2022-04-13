import React, { FC, ReactElement } from 'react'
import { IProps } from './types'
import styles from './styles.module.scss'

const Layout: FC<IProps> = ({children}): ReactElement => {
  return (
    <div className={styles.layout}>
      <main className={styles.main}>
        {children}
      </main>
    </div>
  )
}

export default Layout