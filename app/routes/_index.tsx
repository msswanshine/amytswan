import type { MetaFunction } from "@remix-run/node";

import HeaderElements from "~/components/Header/HeaderElements";
import Hero from "~/components/Hero";
import Layout from "~/components/Layout";

export const meta: MetaFunction = () => [{ title: "Amy Swan | Software Engineer" }];

export default function Index() {
  return (
    <div className="bg-gray h-full">
			<HeaderElements />
			<main id="content">
				<Hero />
				<section aria-label="About" className="relative">
					<div className="flex flex-col sm:flex-row h-screen">
						<div className="bg-darkGray basis-full sm:basis-3/5"></div>
						<div className="bg-gradient-to-bl from-gold to-blue basis-full sm:basis-2/5"></div>
					</div>
					<div className="absolute bottom-0 left-0 right-0 top-0">
						<Layout className="h-full">
							<div className="px-4 md:px-10 py-10 h-full">
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
										<h2 className="text-white text-4xl font-bold mb-10">About</h2>
										<p className="text-white text-2xl">
											{`With 10+ years of experience, I specialize in reusable components, interactive modules, and web accessibility. I've built solutions for mission-driven organizations, e-commerce shops, and industry giants. A musician-turned-coder, I bring strong soft skills, a growth mindset, and a Mindvalley-certified life coach approach to mentoring and team collaboration in tech.`}
										</p>
									</div>
								</div>
							</div>
						</Layout>
					</div>
				</section>
				<section aria-label="Projects">
					<Layout>
						<div className="px-4 md:px-10 py-10">
							<h2 className="text-white text-2xl font-bold">Projects</h2>
						</div>
					</Layout>	
				</section>
			</main>
    </div>
  );
}
