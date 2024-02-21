import { useEffect, useState } from 'react'

type StatusType = 'idle' | 'loading' | 'success' | 'failure'

export const useAppInit = () => {
  const [status, setStatus] = useState<StatusType>('idle')

  const isLoading = status === 'loading'
  const hasError = status === 'failure'
  const isReady = status === 'success'

  useEffect(() => {
    const mainLoop: Promise<void>[] | void[] = []
    
    setStatus('loading')

    Promise.all(mainLoop)
      .then(() => {
        setStatus('success')
      })
      .catch(e => {
        console.error(e)
        setStatus('failure')
      })
  }, [])

  return {
    hasError,
    isLoading,
    isReady,
  }
}
