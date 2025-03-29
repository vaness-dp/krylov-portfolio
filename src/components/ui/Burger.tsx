import { Menu } from 'lucide-react'

export function Burger() {
	return (
		<div className="sticky top-0 z-[4]">
			<button className="absolute top-5 right-5 z-[2] size-12 cursor-pointer md:right-10">
				<Menu
					width={48}
					height={48}
					strokeWidth={1}
				/>
			</button>
		</div>
	)
}
