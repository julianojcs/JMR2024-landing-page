'use client'

import { useEffect } from 'react'

export default function ClientOnly({ children }) {
  useEffect(() => {
    document.body.removeAttribute('cz-shortcut-listen')
  }, [])

  return children
}