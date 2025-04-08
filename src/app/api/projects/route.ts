import { NextResponse } from 'next/server'

import { imageData, projectsData } from '@/components/projects/projects.data'

export const dynamic = 'force-static'
export const revalidate = 0

export async function GET(request: Request) {
	const data = {
		projectsData,
		imageData
	}
	return NextResponse.json(data)
}
