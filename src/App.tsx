import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import 'framework7-icons/css/framework7-icons.css'
import authRoutes from './routes/auth'
import guestRoutes from './routes/guest'
import './scss/app.scss'
import { AnimatedSwitch, spring } from 'react-router-transition'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getLoading, getProfile } from './store/profile/reducer'
import Spinner from './components/Spinner'


function App(props: any) {
  const { user, loading } = props

  const pageTransitions = {
    atEnter: {
      offset: 100,
      opacity: 0,
    },
    atLeave: {
      offset: glide(-100),
      opacity: 0,
    },
    atActive: {
      offset: glide(0),
      opacity: 1,
    },
  }

  const routes = user ? authRoutes : authRoutes

  function glide(val: any) {
    return spring(val, {
      stiffness: 174,
      damping: 24,
    })
  }

  return loading ? (
    <Spinner color={"#f00"} loading={loading} size={100} />
  ) : (
    <Router>
      <Route
        render={({ location }) => (
          <div>
            <AnimatedSwitch
              className='switch-wrapper'
              {...pageTransitions}
              runOnMount={location.pathname === '/'}
              mapStyles={(styles) => ({
                transform: `translateX(${styles.offset}%)`,
                opacity: styles.opacity,
              })}
            >
              {routes.map((e: any) => (
                <Route
                  exact
                  path={e.path}
                  component={e.component}
                  key={e.path}
                />
              ))}
              <Redirect to={ user ? '/' : '/login' } />
            </AnimatedSwitch>
          </div>
        )}
      />
    </Router>
  )
}

App.propTypes = {
  user: PropTypes.any,
  loading: PropTypes.bool
}

const mapStateToProps = (state: any) => ({
  auth: getProfile(state),
  loading: getLoading(state),
})

export default connect(mapStateToProps)(App)
