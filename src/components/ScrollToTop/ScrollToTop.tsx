import React, { useEffect, useState } from 'react'
import { withRouter, useLocation } from 'react-router-dom'

const ScrollToTop = (props: any) => {
  const location = useLocation()
  const { children} = props
  const [scrollRef, setScrollRef] = useState(null)

  useEffect(() => {
    (scrollRef || window).scrollTo(0, 0)
  }, [location, scrollRef])

  return (
    <div className="scroll-to-top" ref={(el: any) => setScrollRef(el)}>
      {children}
    </div>
  )
}

ScrollToTop.propTypes = {
}

export default withRouter(ScrollToTop)
