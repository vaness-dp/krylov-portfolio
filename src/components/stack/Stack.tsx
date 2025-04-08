import { StackItem } from '@/components/stack/StackItem'
import { Heading } from '@/components/ui/Heading'

import { useStackData } from '@/hooks/useStackData'

import { getFallback } from '@/utils/get-fallback'

import { FallbackMessage } from '../ui/FallbackMessage'

export function Stack() {
	const { data, isLoading, error } = useStackData()

	const fallback = getFallback(isLoading, error, data)

	if (fallback)
		return (
			<FallbackMessage
				message={fallback.message}
				className={fallback.className}
			/>
		)

	return (
		<section
			id="my-stack"
			className="pb-section"
		>
			<div className="container">
				<Heading text="My Stack" />
				<div className="space-y-20">
					{data && (
						<>
							<StackItem
								title="Frontend"
								stackData={data.frontendData}
							/>
							<StackItem
								title="Backend"
								stackData={data.backendData}
							/>
							<StackItem
								title="Tools"
								stackData={data.toolsData}
							/>
						</>
					)}
				</div>
			</div>
		</section>
	)
}
