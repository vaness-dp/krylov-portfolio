import { StackItem } from '@/components/stack/StackItem'
import {
	backendData,
	frontendData,
	toolsData
} from '@/components/stack/stack-data'
import { Heading } from '@/components/ui/Heading'

export function Stack() {
	return (
		<section
			id="my-stack"
			className="pb-section"
		>
			<div className="container">
				<Heading text="My Stack" />
				<div className="space-y-20">
					<StackItem
						title="Frontend"
						stackData={frontendData}
					/>
					<StackItem
						title="Backend"
						stackData={backendData}
					/>
					<StackItem
						title="Tools"
						stackData={toolsData}
					/>
				</div>
			</div>
		</section>
	)
}
