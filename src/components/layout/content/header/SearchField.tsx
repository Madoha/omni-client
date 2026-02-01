import { PAGE } from "@/config/public-page.config";
import { useRouter } from "next/navigation"
import { useState } from "react"

interface Props {
	p?: string
}

export function SearchField({}: Props) {
  const [searchTerm, setSearchTerm] = useState('')
  const router = useRouter();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') return;

    e.preventDefault();

    if (searchTerm.trim().length === 0) return;

    router.push(PAGE.SEARCH(searchTerm.trim()));
  }

	return (
		<div className="w-3/12">
			<input
				type='search'
				placeholder='Type to search'
        className="py-2 px-4 bg-transparent w-full outline-none border-none shadow-none"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown}
			/>
		</div>
	)
}
