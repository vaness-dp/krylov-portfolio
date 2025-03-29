import Link from 'next/link'

import { ProjectsDot } from '@/components/projects/ProjectsDot'
import { ProjectsSvg } from '@/components/projects/ProjectsSvg'
import { projectsData } from '@/components/projects/projects.data'

export function ProjectsItem() {
	return (
		<>
			{projectsData.map((item, index) => (
				<Link
					key={index}
					href={item.href}
					className="py-5 leading-none transition-all first:!pt-0 last:border-none last:pb-0 md:border-b md:group-hover/projects:opacity-30 md:hover:!opacity-100"
				>
					<div className="flex gap-2 md:gap-5">
						<div className="font-secondary text-muted-foreground">
							{item.numberProject}
						</div>
						<div>
							<h4 className="xs:text-6xl font-secondary flex gap-4 text-4xl">
								{item.title}
								<span className="text-foreground opacity-0 transition-all group-hover:opacity-100">
									<ProjectsSvg />
								</span>
							</h4>
							<div className="text-muted-foreground mt-2 flex flex-wrap gap-3 text-xs">
								{item.stack.map((stack, index) => (
									<div
										className="flex items-center gap-3"
										key={index}
									>
										<span>{stack.name}</span>
										{stack.hasDot && <ProjectsDot />}
									</div>
								))}
							</div>
						</div>
					</div>
				</Link>
			))}
		</>
	)
}
