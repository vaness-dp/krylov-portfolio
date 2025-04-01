'use client'

import { Github, LucideExternalLink } from 'lucide-react'
import Link from 'next/link'

import AnimatedOnScroll from '@/components/ui/AnimatedOnScroll'

interface IProjectsHeading {
	text: string
	githubHref: string
	linkHref: string
}

export function ProjectHeading({
	text,
	githubHref,
	linkHref
}: IProjectsHeading) {
	return (
		<AnimatedOnScroll className="mx-auto mb-10 flex max-w-[635px] items-start gap-6">
			<h1 className="fade-in-later font-secondary text-4xl leading-none md:text-[60px]">
				<span className="inline-block">{text}</span>
			</h1>
			<div className="fade-in-later flex gap-2">
				<Link
					href={githubHref}
					target="_blank"
					className="duration-300 hover:text-indigo-700"
				>
					<Github
						width={30}
						height={30}
					/>
				</Link>
				<Link
					href={linkHref}
					target="_blank"
					className="duration-300 hover:text-indigo-700"
				>
					<LucideExternalLink
						width={30}
						height={30}
					/>
				</Link>
			</div>
		</AnimatedOnScroll>
	)
}
