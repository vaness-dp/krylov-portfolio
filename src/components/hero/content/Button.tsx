import Link from 'next/link'

export function Button() {
	return (
		<Link
			className="group font-secondary bg-primary hover:bg-primary-hover banner-button slide-up-and-fade relative mt-9 inline-flex h-12 items-center justify-center gap-2 overflow-hidden px-8 text-lg tracking-widest text-gray-900 uppercase transition-colors outline-none"
			target="_blank"
			href="https://mail.google.com/mail/?view=cm&fs=1&to=vaness.engineer@gmail.com&su=Let's collaborate on a project&body=Hi Ivan, I am reaching out to you because..."
		>
			<span className="absolute top-[200%] right-0 left-0 h-full scale-150 rounded-[50%] bg-white transition-all duration-500 group-hover:top-0" />
			<span className="z-[1]">Hire me</span>
		</Link>
	)
}
