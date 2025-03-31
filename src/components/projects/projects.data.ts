interface IStackItem {
	name: string
	hasDot: boolean
}

interface IProjectsData {
	href: string
	numberProject: string
	title: string
	stack: IStackItem[] // Массив технологий стека
}

interface IImageData {
	src: string
	alt: string
}

export const projectsData: IProjectsData[] = [
	{
		href: '/',
		numberProject: '_01.',
		title: 'Hangman',
		stack: [
			{ name: 'HTML', hasDot: true },
			{ name: 'Tailwind CSS', hasDot: true },
			{ name: 'Javascript', hasDot: false }
		]
	},
	{
		href: '/',
		numberProject: '_02.',
		title: 'W-Wave Radio',
		stack: [
			{ name: 'HTML', hasDot: true },
			{ name: 'CSS', hasDot: true },
			{ name: 'Javascript', hasDot: false }
		]
	},
	{
		href: '/',
		numberProject: '_03.',
		title: 'CRM System',
		stack: [
			{ name: 'HTML', hasDot: true },
			{ name: 'CSS', hasDot: true },
			{ name: 'Javascript', hasDot: false }
		]
	},
	{
		href: '/',
		numberProject: '_04.',
		title: 'Product App',
		stack: [
			{ name: 'Next.js', hasDot: true },
			{ name: 'Tailwind CSS', hasDot: true },
			{ name: 'Zustand', hasDot: false }
		]
	}
]

export const imageData: IImageData[] = [
	{ src: 'images/projects/hangman-game.png', alt: 'Hangman game App' },
	{ src: 'images/projects/w-wave.png', alt: 'W-wave Landing Page' },
	{ src: 'images/projects/crm-system.png', alt: 'CRM System' },
	{ src: 'images/projects/product-app.png', alt: 'Product App' }
]
