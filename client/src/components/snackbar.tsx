import { useEffect, useRef, FC } from 'react'
import { IoMdClose } from 'react-icons/io'
import { motion } from 'framer-motion'

import {
  closeSnackbar,
  selectIsSnackbarOpen,
  selectSnackbarMessage,
  selectSnackbarStatus,
} from '@/features/snackbars/slice'
import { useAppSelector, useAppDispatch } from '@/hooks/store'
import { SNACKBAR_STATUS } from '@/features/snackbars/constants'
import { cn } from '@/helpers/cn'

const SNACKBAR_TITLE = Object.freeze({
  [SNACKBAR_STATUS.success]: 'Success!',
  [SNACKBAR_STATUS.error]: 'Error!',
  [SNACKBAR_STATUS.warning]: 'Warning!',
  [SNACKBAR_STATUS.info]: 'Info!',
})

export const Snackbar: FC<{ timeout?: number }> = ({ timeout = 3000 }) => {
  const dispatch = useAppDispatch()

  const isOpen = useAppSelector(selectIsSnackbarOpen)
  const message = useAppSelector(selectSnackbarMessage)
  const status = useAppSelector(selectSnackbarStatus)
  const snackbarHeading = status != null ? SNACKBAR_TITLE[status as keyof typeof SNACKBAR_TITLE] : ''

  const timer = useRef<ReturnType<typeof setInterval>>()

  const handleClose = () => {
    clearTimeout(timer.current)
    dispatch(closeSnackbar())
  }

  useEffect(() => {
    const handleTimeout = () => {
      timer.current = setTimeout(() => dispatch(closeSnackbar()), timeout)
    }
    
    if (isOpen) {
      handleTimeout()
    }

    return () => clearTimeout(timer.current)
  }, [dispatch, isOpen, timeout])

  const classes = cn(
    'absolute left-2.5 bottom-2.5 w-full max-w-xs px-4 py-3 rounded-sm shadow-md',
    status === SNACKBAR_STATUS.success && 'bg-green-400 text-green-800',
    status === SNACKBAR_STATUS.error && 'bg-red-400 text-red-800',
    status === SNACKBAR_STATUS.warning && 'bg-yellow-400 text-yellow-800',
    status === SNACKBAR_STATUS.info && 'bg-blue-400 text-blue-800',
  )

  return (
    <>
      {isOpen && (
        <motion.div
          className={classes}
          initial={{ opacity: 0, translateX: '-300px' }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div>
            <h2 className='snackbar-heading'>{snackbarHeading}</h2>
            <p className='snackbar-description'>{message}</p>
          </div>
          <button aria-label='Close snackbar' className='close-snackbar' onClick={handleClose}>
            <IoMdClose />
          </button>
        </motion.div>
      )}
    </>
  )
}

export default Snackbar