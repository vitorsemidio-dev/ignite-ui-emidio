import * as ToastPrimitive from '@radix-ui/react-toast'
import { useState } from 'react'

export function Toast() {
  const [open, setOpen] = useState(false)
  return (
    <ToastPrimitive.Provider>
      <button
        onClick={() => {
          console.log('clicou')
          setOpen(true)
        }}
      >
        Add to calendar
      </button>
      <ToastPrimitive.Root type="foreground" open={open} onOpenChange={setOpen}>
        <ToastPrimitive.Title>Título</ToastPrimitive.Title>
        {/* <ToastPrimitive.Description>Saved!</ToastPrimitive.Description>
        <ToastPrimitive.Close aria-label="Close">
          <span aria-hidden>×</span>
        </ToastPrimitive.Close> */}
      </ToastPrimitive.Root>
    </ToastPrimitive.Provider>
  )
}
