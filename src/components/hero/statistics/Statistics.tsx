import { statisticsData } from '@/components/hero/statistics/statistics.data'

export function Statistics() {
	return (
		<div className="right-[4%] bottom-[10%] flex gap-4 text-center md:absolute md:flex-col md:gap-8 md:text-right">
			{statisticsData.map((item, index) => (
				<div key={index}>
					<h5 className="text-primary mb-1.5 text-3xl font-bold sm:text-4xl">
						{item.heading}
					</h5>
					<p className="text-muted-foreground">{item.description}</p>
				</div>
			))}
		</div>
	)
}
