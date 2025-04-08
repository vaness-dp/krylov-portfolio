export interface IStackItem {
	name: string
	hasDot: boolean
}

export interface IProjectsData {
	id: string
	href: string
	githubHref: string
	linkHref: string
	numberProject: string
	title: string
	year: string
	tech: string
	description: string
	stack: IStackItem[]
}

export interface IImageData {
	src: string
	alt: string
}

export interface IStackData {
	text: string
	srcImage: string
	altImage: string
}
