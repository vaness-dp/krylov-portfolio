import { Button } from '@/components/hero/content/Button'
import { Description } from '@/components/hero/content/Description'
import { Title } from '@/components/hero/content/Title'

export function Content() {
	return (
		<div className="max-w-[544px] flex-col items-start justify-center max-md:flex max-md:grow">
			<Title />
			<Description />
			<Button />
		</div>
	)
}
