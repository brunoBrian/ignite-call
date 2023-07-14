'use client'

import { globalStyles } from '@/styles/global'
import { PropsWithChildren } from 'react'

globalStyles()

export function Providers({ children }: PropsWithChildren) {
  return <>{children}</>
}
