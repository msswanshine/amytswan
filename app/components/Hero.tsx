import Layout from "./Layout";

export default function Hero() {
	return (
		<section aria-label="Hero" className="relative">
			<div className="flex flex-col sm:flex-row h-screen">
				<div className="bg-gradient-to-br from-blue to-gold basis-full sm:basis-3/5"></div>
				<div className="bg-darkGray basis-full sm:basis-2/5"></div>
			</div>
			<div className="absolute bottom-0 left-0 right-0 top-0">
				<Layout className="h-full">
					<div className="px-4 md:px-10 h-full">
						<div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4 sm:gap-10 h-full">
							<div className="basis-full sm:basis-1/2 content-center sm:items-start">
								<h1 className="text-white text-3xl sm:text-5xl font-bold mb-10">
									{`Hi, I'm Amy.`}
								</h1>
								<h2 className="text-white text-xl sm:text-3xl font-bold">
									{`I'm a Technical Lead & Front-End Web Developer based in Ashland, Oregon. My experience spans from startups to industry giants like Apple and McKinsey.`}
								</h2>
							</div>
							<div className="basis-full sm:basis-1/2">	
								<img 
									src="/images/thailand_headshot.webp" 
									alt="Amy Swan, wearing a sunhat and a big smile, at an ornate temple in Thailand." 
									className="w-full h-full object-cover max-h-[450px] sm:max-h-[720px] rounded-2xl -mt-20 sm:mt-0" 
									/>
							</div>
						</div>
					</div>
				</Layout>
			</div>
		</section>
	)
}
