import { NextResponse } from 'next/server'

import {
	backendData,
	frontendData,
	toolsData
} from '@/components/stack/stack-data'

export async function GET(request: Request) {
	const data = {
		frontendData,
		backendData,
		toolsData
	}
	return NextResponse.json(data)
}
