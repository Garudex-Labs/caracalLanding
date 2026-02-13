import { Loader2Icon } from "lucide-react"

import { cn } from "@/lib/utils"

/**
 * Loading spinner component with dark theme styling
 * 
 * Provides visual feedback during long-running operations
 */
function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <Loader2Icon
      role="status"
      aria-label="Loading"
      className={cn("size-4 animate-spin text-[#cdff3e]", className)}
      {...props}
    />
  )
}

/**
 * Full-page loading overlay
 */
function LoadingOverlay({ message }: { message?: string }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0a0a]/80 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        <Spinner className="size-8" />
        {message && (
          <p className="font-mono text-sm uppercase text-[#999999]">{message}</p>
        )}
      </div>
    </div>
  )
}

/**
 * Inline loading state for buttons
 */
function ButtonSpinner({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <Loader2Icon
      role="status"
      aria-label="Loading"
      className={cn("size-4 animate-spin", className)}
      {...props}
    />
  )
}

/**
 * Loading skeleton for content placeholders
 */
function LoadingSkeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-sm bg-[#1f1f1f]", className)}
      {...props}
    />
  )
}

/**
 * Loading state for tables
 */
function TableLoading({ rows = 5, columns = 4 }: { rows?: number; columns?: number }) {
  return (
    <div className="space-y-3">
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="flex gap-4">
          {Array.from({ length: columns }).map((_, j) => (
            <LoadingSkeleton key={j} className="h-10 flex-1" />
          ))}
        </div>
      ))}
    </div>
  )
}

/**
 * Loading state for cards
 */
function CardLoading() {
  return (
    <div className="space-y-4 rounded-sm border-2 border-[#333333] bg-[#111111] p-6">
      <LoadingSkeleton className="h-6 w-1/3" />
      <LoadingSkeleton className="h-4 w-full" />
      <LoadingSkeleton className="h-4 w-2/3" />
    </div>
  )
}

export { 
  Spinner, 
  LoadingOverlay, 
  ButtonSpinner, 
  LoadingSkeleton, 
  TableLoading, 
  CardLoading 
}
