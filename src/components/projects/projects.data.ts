interface IStackItem {
	name: string
	hasDot: boolean
}

interface IProjectsData {
	id: string
	href: string
	githubHref: string
	linkHref: string
	numberProject: string
	title: string
	year: string
	tech: string
	description: string
	stack: IStackItem[] // Массив технологий стека
}

interface IImageData {
	src: string
	alt: string
}

export const projectsData: IProjectsData[] = [
	{
		id: 'hangman',
		href: '/projects/hangman',
		githubHref: 'https://github.com/vaness-dp/hangman-game',
		linkHref: 'https://vaness-dp.github.io/hangman-game/',
		numberProject: '_01.',
		title: 'Hangman',
		year: '2024',
		tech: 'HTML, Tailwind CSS, Javascript',
		description:
			'I developed Hangman, an engaging web-based game that allows users to enjoy the classic word-guessing experience. Built using HTML, Tailwind CSS, and JavaScript, the design emphasizes a sleek and responsive user interface, ensuring a seamless gaming experience across various devices. The project showcases interactive gameplay, where players can guess letters to reveal a hidden word while keeping track of their attempts. With its visually appealing design and intuitive controls, Hangman provides an entertaining way to challenge vocabulary and spelling skills.',
		stack: [
			{ name: 'HTML', hasDot: true },
			{ name: 'Tailwind CSS', hasDot: true },
			{ name: 'Javascript', hasDot: false }
		]
	},
	{
		id: 'wwave-radio',
		href: '/projects/wwave-radio',
		githubHref: 'https://github.com/vaness-dp/W-Wave-Radio',
		linkHref: 'https://vaness-dp.github.io/W-Wave-Radio/',
		numberProject: '_02.',
		title: 'W-Wave Radio',
		year: '2023',
		tech: 'HTML, Tailwind CSS, Javascript',
		description:
			'I developed Wwave-radio, a captivating landing page designed to promote an online radio station. Utilizing a stack of HTML, SCSS, and JavaScript, the project features straightforward layout and design principles. A slider, implemented using libraries, enhances user engagement by showcasing featured content dynamically. Visual animations created with CSS add a modern touch, while the responsive design ensures optimal viewing experiences across various devices. Wwave-radio effectively captures the essence of the radio station, inviting visitors to explore and enjoy its offerings.',
		stack: [
			{ name: 'HTML', hasDot: true },
			{ name: 'CSS', hasDot: true },
			{ name: 'Javascript', hasDot: false }
		]
	},
	{
		id: 'crm-system',
		href: '/projects/crm-system',
		githubHref: 'https://github.com/vaness-dp/CRM-system',
		linkHref: 'https://vaness-dp.github.io/CRM-system/',
		numberProject: '_03.',
		title: 'CRM System',
		year: '2024',
		tech: 'HTML, CSS, Javascript',
		description:
			'I developed CRM-system, a comprehensive landing page designed to manage client relationships effectively. Built using HTML, CSS, and JavaScript, this project incorporates essential features such as sorting and searching for clients, enhancing user experience and efficiency. A modal window with a form allows users to create or edit client data seamlessly. The system includes functionalities for managing client actions, such as saving and deleting client information, as well as modifying existing data. With its intuitive interface and responsive design, the CRM-system provides a streamlined approach to client management, making it easy for users to maintain and organize their contacts.',
		stack: [
			{ name: 'HTML', hasDot: true },
			{ name: 'CSS', hasDot: true },
			{ name: 'Javascript', hasDot: false }
		]
	},
	{
		id: 'workout-app',
		href: '/projects/workout-app',
		githubHref: 'https://github.com/vaness-dp/workout-app',
		linkHref: 'https://vaness-dp.github.io/workout-app/',
		numberProject: '_04.',
		title: 'Workout App',
		year: '2025',
		tech: 'React.js, SCSS, Axios, React-query',
		description:
			'I developed the Workout App, a dynamic landing page designed to help users track and manage their fitness routines. Utilizing a tech stack that includes React, react-hook-form, Axios, tanstack/react-query, react-router-dom, and SCSS, this project offers a modern and responsive user experience. Users can easily create new workouts and exercises, manage their profiles, and authenticate their accounts. The app features an exercise log to keep track of progress and achievements. Additionally, a loader enhances the user experience during data fetching. With its intuitive design and robust functionality, the Workout App empowers users to take control of their fitness journey.',
		stack: [
			{ name: 'React.js', hasDot: true },
			{ name: 'SCSS', hasDot: true },
			{ name: 'Axios', hasDot: false }
		]
	}
]

export const imageData: IImageData[] = [
	{ src: '/images/projects/hangman-game.png', alt: 'Hangman game App' },
	{ src: '/images/projects/w-wave.png', alt: 'W-wave Landing Page' },
	{ src: '/images/projects/crm-system.png', alt: 'CRM System' },
	{ src: '/images/projects/workout-app.png', alt: 'Workout App' }
]
