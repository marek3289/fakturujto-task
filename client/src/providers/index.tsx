import { Suspense } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ErrorBoundary } from 'react-error-boundary'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter as Router } from 'react-router-dom'

import { persistor, store } from '@/stores'

const ErrorFallback = () => {
  return (
    <div
      className="text-red-500 w-screen h-screen flex flex-col justify-center items-center"
      role="alert"
    >
      <h2 className="text-lg font-semibold">Ooops, something went wrong</h2>
      <button className="btn-primary mt-4" onClick={() => window.location.assign(window.location.origin)}>
        Refresh
      </button>
    </div>
  );
};

type AppProviderProps = { children: React.ReactNode }

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center w-screen h-screen">
          <span>Loading...</span>
        </div>
      }
    >
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <HelmetProvider>
              <Router>{children}</Router>
            </HelmetProvider>
          </PersistGate>
        </Provider>
      </ErrorBoundary>
    </Suspense>
  );
};