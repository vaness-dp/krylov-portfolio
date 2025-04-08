import { DelayedPage } from '@/components/delayed-page/DelayedPage'
import { Layout } from '@/components/layout/Layout'
import { ProjectsView } from '@/components/projects/ProjectsView'

export async function generateStaticParams() {
	return [
		{ id: 'hangman' },
		{ id: 'wwave-radio' },
		{ id: 'crm-system' },
		{ id: 'workout-app' }
	]
}

export default async function ProjectPage({
	params
}: {
	params: Promise<{ id: string }>
}) {
	const { id } = await params
	return (
		<DelayedPage>
			<Layout>
				<ProjectsView id={id} />
			</Layout>
		</DelayedPage>
	)
}
