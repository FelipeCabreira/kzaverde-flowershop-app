declare module 'dangerous-html/react' {
  import { FC, ReactNode } from 'react'
  
  interface ScriptProps {
    html?: string
  }
  
  const Script: FC<ScriptProps>
  export default Script
}
