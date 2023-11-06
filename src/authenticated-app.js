/** @jsx jsx */
import {jsx} from '@emotion/core'

import {Routes, Route} from 'react-router-dom'
import {ErrorBoundary} from 'react-error-boundary'
import {Button} from './components/lib'
import {useAuth} from './context/auth-context'
import {ReadingListScreen} from './screens/reading-list'
import {FinishedScreen} from './screens/finished'
import {CalendarScreen} from './screens/calendar'
import {BookScreen} from './screens/book'
import {NotFoundScreen} from './screens/not-found'
import {Nav} from './components/nav'
import {
  ErrorFallback,
  FullPageErrorFallback,
} from './components/error'

function AuthenticatedApp() {
  const {user, logout} = useAuth()

  return (
    <ErrorBoundary FallbackComponent={FullPageErrorFallback}>
      <div
        css={{
          display: 'flex',
          alignItems: 'center',
          position: 'absolute',
          top: '10px',
          right: '10px',
        }}
      >
        {user.username}
        <Button variant="secondary" css={{marginLeft: '10px'}} onClick={logout}>
          Logout
        </Button>
      </div>
      <div>
        <Nav>
          <main css={{width: '100%'}}>
            <div className="lg:pl-72">
              <div className="xl:pr-96">
                <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-6">
                  <ErrorBoundary FallbackComponent={ErrorFallback}>
                    <AppRoutes />
                  </ErrorBoundary>
                </div>
              </div>
            </div>
          </main>
        </Nav>
      </div>
    </ErrorBoundary>
  )
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/list" element={<ReadingListScreen />} />
      <Route path="/finished" element={<FinishedScreen />} />
      <Route path="/calendar" element={<CalendarScreen />} />
      <Route path="/book/:bookId" element={<BookScreen />} />
      <Route path="*" element={<NotFoundScreen />} />
    </Routes>
  )
}

export default AuthenticatedApp
