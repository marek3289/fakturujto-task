import { AppProvider } from '@/providers'
import { AppRoutes } from '@/routes'
import { useAppInit } from '@/hooks'

const App = () => {
  const { hasError, isLoading, isReady } = useAppInit()

  return (
    <AppProvider>
      <main className='h-screen w-screen bg-white text-black'>
        {hasError && <h1 className='text-red-500'>An error occurred, please try again later</h1>}
        {isLoading && <div>Loading...</div>}
        {isReady && <AppRoutes />}
      </main>
    </AppProvider>
  )
}

export default App