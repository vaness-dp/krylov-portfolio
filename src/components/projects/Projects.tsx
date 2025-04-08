'use client'

import { useMemo, useState } from 'react'

import { ProjectsImage } from '@/components/projects/ProjectsImage'
import { ProjectsItem } from '@/components/projects/ProjectsItem'
import AnimatedOnScroll from '@/components/ui/AnimatedOnScroll'
import { Heading } from '@/components/ui/Heading'

import { useProjectsData } from '@/hooks/useProjectsData'

import { FallbackMessage } from '../ui/FallbackMessage'

export function Projects() {
	const { data, isLoading, error } = useProjectsData()

	const [hoveredProjectIndex, setHoveredProjectIndex] = useState<number | null>(
		null
	)

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
				{isLoading || error || !data ? (
					<div>
						{isLoading && (
							<FallbackMessage
								message="Loading projects…"
								className="text-gray-600"
							/>
						)}
						{error && (
							<FallbackMessage
								message={`Error: ${error.message}`}
								className="text-red-500"
							/>
						)}
						{!data && (
							<FallbackMessage
								message="Data not found"
								className="text-gray-600"
							/>
						)}
					</div>
				) : (
					<AnimatedOnScroll
						delay={0.1}
						className="relative"
					>
						<ProjectsImage
							imagesData={data.imageData}
							offsetY={offsetY}
							isVisible={hoveredProjectIndex !== null}
							index={hoveredProjectIndex ?? 0}
						/>
						<div className="flex flex-col max-md:gap-10">
							<ProjectsItem
								projectsData={data.projectsData}
								hoveredIndex={hoveredProjectIndex}
								onItemHover={setHoveredProjectIndex}
								onItemLeave={() => setHoveredProjectIndex(null)}
							/>
						</div>
					</AnimatedOnScroll>
				)}
			</div>
		</section>
	)
}
