import type { PropsWithChildren } from 'react'
import { Shapka } from './header/Shapka'

export function Content({ children }: PropsWithChildren<unknown>) {
	return (
		<div style={{
      flex: '1 1 0%'
    }}>
			<Shapka />
			<section className='p-layout'>{children}</section>
		</div>
	)
}
