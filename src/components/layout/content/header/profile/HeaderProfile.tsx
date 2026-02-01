import Link from 'next/link'
import Image from 'next/image'
import { STUDIO_PAGE } from '@/config/studio-page.config'

export function HeaderProfile() {
	return (
		<Link href={STUDIO_PAGE.SETTINGS} className="shrink-0">
			<Image
				alt='Profile'
				src='/uploads/avatars/redgroup.jpg'
				width={40}
				height={40}
				className='rounded-lg'
			/>
		</Link>
	)
}
