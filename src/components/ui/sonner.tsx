"use client"

import { Toaster as Sonner, ToasterProps } from "sonner"

/**
 * Toast notification component with Caracal dark theme styling
 * 
 * Supports success, error, warning, and info variants with
 * consistent dark theme colors (#0a0a0a background, #cdff3e accent)
 */
const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="dark"
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-[#111111] group-[.toaster]:text-white group-[.toaster]:border-[#333333] group-[.toaster]:shadow-lg group-[.toaster]:rounded-sm",
          description: "group-[.toast]:text-[#999999]",
          actionButton:
            "group-[.toast]:bg-[#cdff3e] group-[.toast]:text-[#0a0a0a] group-[.toast]:font-mono group-[.toast]:uppercase group-[.toast]:text-xs group-[.toast]:font-bold",
          cancelButton:
            "group-[.toast]:bg-[#1f1f1f] group-[.toast]:text-white group-[.toast]:border group-[.toast]:border-[#333333]",
          closeButton:
            "group-[.toast]:bg-[#1f1f1f] group-[.toast]:text-white group-[.toast]:border group-[.toast]:border-[#333333] group-[.toast]:hover:bg-[#333333]",
          success:
            "group-[.toast]:bg-[#111111] group-[.toast]:text-white group-[.toast]:border-[#cdff3e]",
          error:
            "group-[.toast]:bg-[#111111] group-[.toast]:text-white group-[.toast]:border-[#ff4f03]",
          warning:
            "group-[.toast]:bg-[#111111] group-[.toast]:text-white group-[.toast]:border-[#ff4f03]",
          info:
            "group-[.toast]:bg-[#111111] group-[.toast]:text-white group-[.toast]:border-[#cdff3e]",
        },
      }}
      style={
        {
          "--normal-bg": "#111111",
          "--normal-text": "#ffffff",
          "--normal-border": "#333333",
          "--success-bg": "#111111",
          "--success-text": "#ffffff",
          "--success-border": "#cdff3e",
          "--error-bg": "#111111",
          "--error-text": "#ffffff",
          "--error-border": "#ff4f03",
          "--warning-bg": "#111111",
          "--warning-text": "#ffffff",
          "--warning-border": "#ff4f03",
          "--info-bg": "#111111",
          "--info-text": "#ffffff",
          "--info-border": "#cdff3e",
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster }
