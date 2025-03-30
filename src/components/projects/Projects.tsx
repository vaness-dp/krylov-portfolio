// Projects.tsx
import { useMemo, useState } from 'react'

import { ProjectsImage } from '@/components/projects/ProjectsImage'
import { ProjectsItem } from '@/components/projects/ProjectsItem'
import AnimatedOnScroll from '@/components/ui/AnimatedOnScroll'
import { Heading } from '@/components/ui/Heading'

export function Projects() {
	// hoveredProjectIndex — индекс проекта, на котором сейчас курсор, либо null, если ни один не активен
	const [hoveredProjectIndex, setHoveredProjectIndex] = useState<number | null>(
		null
	)

	// Вычисляем offsetY, например: для первого элемента -200px, для второго -150, для третьего -100 и т.д.
	const offsetY = useMemo(() => {
		return hoveredProjectIndex !== null ? -180 + hoveredProjectIndex * 100 : 0
	}, [hoveredProjectIndex])

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
					<ProjectsImage
						offsetY={offsetY}
						isVisible={hoveredProjectIndex !== null}
						index={hoveredProjectIndex ?? 0}
					/>
					<div className="flex flex-col max-md:gap-10">
						<ProjectsItem
							hoveredIndex={hoveredProjectIndex}
							onItemHover={setHoveredProjectIndex}
							onItemLeave={() => setHoveredProjectIndex(null)}
						/>
					</div>
				</AnimatedOnScroll>
			</div>
		</section>
	)
}
