// ProjectsItem.tsx
import Link from 'next/link'
import React from 'react'

import { ProjectsDot } from '@/components/projects/ProjectsDot'
import { ProjectsSvg } from '@/components/projects/ProjectsSvg'
import { projectsData } from '@/components/projects/projects.data'

interface ProjectsItemProps {
	onItemHover: (index: number) => void
	onItemLeave: () => void
	hoveredIndex: number | null
}

export function ProjectsItem({
	onItemHover,
	onItemLeave,
	hoveredIndex
}: ProjectsItemProps) {
	return (
		<>
			{projectsData.map((item, index) => (
				<Link
					key={item.numberProject}
					href={item.href}
					className="project-item group py-5 leading-none transition-all first:!pt-0 last:border-none last:pb-0 md:border-b md:group-hover/projects:opacity-30 md:hover:!opacity-100"
					onMouseEnter={(_e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) =>
						onItemHover(index)
					}
					onMouseLeave={(_e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) =>
						onItemLeave()
					}
				>
					<div className="flex gap-2 md:gap-5">
						<div className="font-secondary text-muted-foreground">
							{item.numberProject}
						</div>
						<div>
							<h4 className="xs:text-6xl font-secondary to-foreground flex gap-4 bg-gradient-to-r from-indigo-700 from-[50%] to-[50%] bg-[length:200%] bg-clip-text bg-right p-1 text-4xl text-transparent transition-all duration-700 group-hover:bg-left">
								{item.title}
								<span
									className="text-foreground transition-all duration-150"
									style={{
										transitionProperty: 'all',
										transitionTimingFunction: 'cubic-bezier(.4,0,.2,1)',
										transitionDuration: '.15s'
									}}
								>
									{hoveredIndex === index && <ProjectsSvg />}
								</span>
							</h4>
							<div className="text-muted-foreground mt-2 flex flex-wrap gap-3 text-xs">
								{item.stack.map((stack, idx) => (
									<div
										className="flex items-center gap-3"
										key={idx}
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
