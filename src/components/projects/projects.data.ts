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
	}
]
