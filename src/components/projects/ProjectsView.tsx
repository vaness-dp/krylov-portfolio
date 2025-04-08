'use client'

import { notFound } from 'next/navigation'

import { useProjectsData } from '@/hooks/useProjectsData'

import { Back } from '../layout/Back'
import AnimatedOnScroll from '../ui/AnimatedOnScroll'
import { ProjectHeading } from '../ui/ProjectHeading'

export function ProjectsView({ id }: { id: string }) {
	const { data, isLoading, error } = useProjectsData()

	if (isLoading) return <div>Loading project…</div>
	if (error) return <div>Error: {error.message}</div>

	// Фильтруем данные, чтобы найти нужный проект по id
	const project = data?.projectsData.find(p => p.id === id)
	if (!project) {
		notFound()
	}

	return (
		<section className="pt-5 pb-14">
			<div className="container">
				<Back />
				<div className="relative w-full">
					<ProjectHeading
						text={project.title}
						githubHref={project.githubHref}
						linkHref={project.linkHref}
					/>
					<div className="mx-auto max-w-[635px] space-y-7 pb-20">
						<AnimatedOnScroll duration={0.6}>
							<p className="text-muted-foreground font-secondary mb-3">Year</p>
							<div className="text-lg">{project.year}</div>
						</AnimatedOnScroll>
						<AnimatedOnScroll duration={0.6}>
							<p className="text-muted-foreground font-secondary mb-3">
								Tech & Technique
							</p>
							<div className="text-lg">{project.tech}</div>
						</AnimatedOnScroll>
						<AnimatedOnScroll duration={0.6}>
							<p className="text-muted-foreground font-secondary mb-3">
								Description
							</p>
							<div className="text-lg">
								<p>{project.description}</p>
							</div>
						</AnimatedOnScroll>
					</div>
				</div>
			</div>
		</section>
	)
}
