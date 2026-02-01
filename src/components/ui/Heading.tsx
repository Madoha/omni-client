import type { LucideIcon } from 'lucide-react'
import type { ElementType, ReactNode } from 'react'

interface Props<T extends ElementType = 'h2'> {
  as?: T
	children: ReactNode
	Icon?: LucideIcon
}

export function Heading<T extends ElementType = 'h2'>({ as, children, Icon }: Props<T>) {
  const Component = as || 'h2';
  
	return (
		<div className='flex items-center gap-1.5 opacity-90 mb-4'>
      {Icon && <Icon className='text-primary' />}
			<Component className='font-semibold text-lg'>{children}</Component>
		</div>
	)
}
