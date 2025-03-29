import { ProjectsItem } from '@/components/projects/ProjectsItem'
import AnimatedOnScroll from '@/components/ui/AnimatedOnScroll'
import { Heading } from '@/components/ui/Heading'

export function Projects() {
	return (
		<section
			id="selected-projects"
			className="pb-section"
		>
			<div className="container">
				<Heading text="Selected projects" />
				<AnimatedOnScroll
					delay={0.1}
					className="relative"
				>
					<div className="flex flex-col max-md:gap-10">
						<ProjectsItem />
					</div>
				</AnimatedOnScroll>
			</div>
		</section>
	)
}
