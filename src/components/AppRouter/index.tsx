import React, { FC, ReactElement } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Main from 'src/pages/Main'

const AppRouter: FC = (): ReactElement => {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  )
}

export default AppRouter