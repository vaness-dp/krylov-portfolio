import { notFound } from 'next/navigation'

import { Back } from '@/components/layout/Back'
import { Layout } from '@/components/layout/Layout'
import { projectsData } from '@/components/projects/projects.data'
import AnimatedOnScroll from '@/components/ui/AnimatedOnScroll'
import { ProjectHeading } from '@/components/ui/ProjectHeading'

export async function generateStaticParams() {
	return projectsData.map(project => ({
		id: project.id
	}))
}

export default async function ProjectPage({
	params
}: {
	params: { id: string }
}) {
	const { id } = await params

	const project = projectsData.find(p => p.id === id)

	if (!project) {
		notFound()
	}

	await new Promise(resolve => setTimeout(resolve, 900))

	return (
		<Layout>
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
								<p className="text-muted-foreground font-secondary mb-3">
									Year
								</p>
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
		</Layout>
	)
}
