import { useCallback, useState } from 'react'

export const useModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const onToggle = useCallback(() => {
    setIsOpen(prev => !prev)
  }, [setIsOpen])

  const onClose = useCallback(() => {
    setIsOpen(false)
  }, [setIsOpen])

  return {isOpen, onToggle, onClose}
}