import Layout from "./Layout";

export default function About() {
	return (
		<section id="about" aria-label="About" className="relative">
			<div className="absolute bottom-0 left-0 right-0 top-0 flex flex-col sm:flex-row">
				<div className="bg-darkGray basis-full sm:basis-3/5"></div>
				<div className="bg-gradient-to-br from-gold to-blue basis-full sm:basis-2/5"></div>
			</div>
			<div className="relative z-10">
				<Layout className="h-full">
					<div className="px-4 md:px-10 py-10 sm:py-20 h-full">
						<div className="flex flex-col sm:flex-row gap-4 sm:gap-10 h-full items-center justify-between">
							<div className="basis-full sm:basis-3/5">
								<iframe 
									width="640" 
									height="360" 
									src="https://www.youtube.com/embed/CYgj5LVvrTg" 
									title="What You May Be Missing: A Life Coach" 
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
									referrerPolicy="strict-origin-when-cross-origin" 
									allowFullScreen
									className="rounded-2xl"
									></iframe>
							</div>
							<div className="basis-full sm:basis-2/5 content-center sm:items-end max-w-[340px]">
								<h2 className="text-white text-4xl font-bold mb-6">About</h2>
								<p className="text-white text-2xl">
									{`With 10+ years of experience, I specialize in reusable components, interactive modules, and web accessibility. I've built solutions for mission-driven organizations, e-commerce shops, and industry giants. A musician-turned-coder, I bring strong soft skills, a growth mindset, and a Mindvalley Certified Life Coach approach to managing teams, mentoring, and cross-functional collaboration in tech.`}
								</p>
							</div>
						</div>
					</div>
				</Layout>
			</div>
		</section>
	)
}