import AnimatedOnScroll from '../ui/AnimatedOnScroll'

export function About() {
	return (
		<section
			id="about-me"
			className="pb-section"
		>
			<div className="container">
				<AnimatedOnScroll
					delay={0.1}
					className="mb-20 text-4xl font-thin md:text-6xl"
				>
					I believe in a user centered design approach, ensuring that every
					project I work on is tailored to meet the specific needs of its users.
				</AnimatedOnScroll>

				<AnimatedOnScroll
					delay={0.3}
					className="text-muted-foreground border-b pb-3"
				>
					This is me.
				</AnimatedOnScroll>
				<div className="mt-9 grid md:grid-cols-12">
					<div className="md:col-span-5">
						<AnimatedOnScroll
							delay={0.5}
							className="font-secondary text-5xl tracking-wider"
						>
							Hi, I'm Ivan.
						</AnimatedOnScroll>
					</div>
					<div className="md:col-span-7">
						<div className="text-muted-foreground max-w-[450px] text-lg">
							<AnimatedOnScroll delay={0.6}>
								I'm a frontend web developer dedicated to turning ideas into
								creative solutions. I specialize in creating seamless and
								intuitive user experiences.
							</AnimatedOnScroll>
							<AnimatedOnScroll
								delay={0.7}
								className="mt-3"
							>
								My approach focuses on creating scalable, high-performing
								solutions tailored to both user needs and business objectives.
								By prioritizing performance, accessibility, and responsiveness,
								I strive to deliver experiences that not only engage users but
								also drive tangible results.
							</AnimatedOnScroll>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
