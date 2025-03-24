import Link from 'next/link'

export function Footer() {
	return (
		<footer
			id="contact"
			className="pb-5 text-center"
		>
			<div className="container">
				<p className="text-lg">Have a project in mind?</p>
				<Link
					href="mailto:vaness.engineer@gmail.com"
					className="font-secondary mt-5 mb-10 inline-block text-3xl hover:underline sm:text-4xl"
				>
					vaness.engineer@gmail.com
				</Link>
				<p className="text-muted-foreground">Copyright © 2025 Krylov</p>
			</div>
		</footer>
	)
}
