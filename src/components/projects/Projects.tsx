import { ProjectsItem } from '@/components/projects/ProjectsItem'
import { AnimatedText } from '@/components/ui/AnimatedText'
import { Heading } from '@/components/ui/Heading'

export function Projects() {
	return (
		<section
			id="selected-projects"
			className="pb-section"
		>
			<div className="container">
				<Heading text="Selected projects" />
				<AnimatedText
					as="div"
					direction="up"
					delay={0.1}
					className="relative"
				>
					<div className="flex flex-col max-md:gap-10">
						<ProjectsItem />
					</div>
				</AnimatedText>
			</div>
		</section>
	)
}
