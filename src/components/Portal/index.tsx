import { FC } from 'react'
import { createPortal } from 'react-dom'
import {IProps} from './types'

const Portal: FC<IProps> = ({ children }) => createPortal(children, document.body)

export default Portal