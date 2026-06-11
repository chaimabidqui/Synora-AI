import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      // only scroll to top if there's no #section in the URL
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])
}