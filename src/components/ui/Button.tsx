'use client'

import { forwardRef } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface BaseButtonProps {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  className?: string
}

interface ButtonAsButton extends BaseButtonProps, Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className'> {
  href?: never
}

interface ButtonAsLink extends BaseButtonProps {
  href: string
  children: React.ReactNode
}

export type ButtonProps = ButtonAsButton | ButtonAsLink

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, children, ...props }, ref) => {
    const variants = {
      primary: 'bg-accent text-gray-900 hover:bg-accent-dark hover:shadow-lg hover:-translate-y-0.5',
      secondary: 'bg-primary text-white hover:bg-primary-700 hover:shadow-lg',
      outline: 'bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white',
    }

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    }

    const baseClasses = cn(
      'inline-flex items-center justify-center font-space font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2',
      variants[variant],
      sizes[size],
      className
    )

    if ('href' in props && props.href) {
      return (
        <Link
          href={props.href}
          className={baseClasses}
          ref={ref as React.Ref<HTMLAnchorElement>}
        >
          {children}
        </Link>
      )
    }

    const { disabled, ...buttonProps } = props as ButtonAsButton

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={cn(
          baseClasses,
          'disabled:opacity-50 disabled:cursor-not-allowed'
        )}
        disabled={disabled || isLoading}
        {...buttonProps}
      >
        {isLoading && (
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
        )}
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
