import Link from 'next/link'

export function Button() {
	return (
		<Link
			className="font-secondary bg-primary text-foreground relative mt-9 inline-flex h-12 items-center justify-center gap-2 overflow-hidden px-8 text-lg tracking-widest uppercase transition-colors outline-none hover:bg-white"
			target="_blank"
			href="https://mail.google.com/mail/?view=cm&fs=1&to=vaness.engineer@gmail.com&su=Let's collaborate on a project&body=Hi Ivan, I am reaching out to you because..."
		>
			Hire me
		</Link>
	)
}
