'use client'

import { About } from '@/components/about/About'
import { Hero } from '@/components/hero/Hero'
import { Layout } from '@/components/layout/Layout'
import { Projects } from '@/components/projects/Projects'
import { Stack } from '@/components/stack/Stack'

export default function Home() {
	return (
		<Layout>
			<Hero />
			<About />
			<Stack />
			<Projects />
		</Layout>
	)
}
