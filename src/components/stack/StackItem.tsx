import Image from 'next/image'

import { StackTitle } from '@/components/stack/StackTitle'
import AnimatedOnScroll from '@/components/ui/AnimatedOnScroll'

interface IStackItem {
	title: string
	stackData: { srcImage: string; altImage: string; text: string }[]
}

export function StackItem({ title, stackData }: IStackItem) {
	return (
		<div className="grid sm:grid-cols-12">
			<StackTitle title={title} />
			<div className="flex flex-wrap gap-x-11 gap-y-9 sm:col-span-7">
				{stackData.map((item, index) => (
					<AnimatedOnScroll
						key={index}
						delay={index * 0.3}
					>
						<div
							className="flex items-center gap-3.5 leading-none"
							key={index}
						>
							<div>
								<Image
									src={item.srcImage}
									alt={item.altImage}
									width={40}
									height={40}
								/>
							</div>
							<span className="text-2xl capitalize">{item.text}</span>
						</div>
					</AnimatedOnScroll>
				))}
			</div>
		</div>
	)
}
