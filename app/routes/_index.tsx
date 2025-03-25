import type { MetaFunction } from "@remix-run/node";

import HeaderElements from "~/components/Header/HeaderElements";
import Layout from "~/components/Layout";

export const meta: MetaFunction = () => [{ title: "Amy Swan | Software Engineer" }];

export default function Index() {
  return (
    <div className="bg-gray h-full">
			<HeaderElements />
			<main>
				<section aria-label="Hero">
					<Layout>
						<div className="px-4 md:px-10 py-10">
							<h2 className="text-white text-2xl font-bold">Welcome to my website</h2>
						</div>
					</Layout>
				</section>
				<section aria-label="About">
					<Layout>
						<div className="px-4 md:px-10 py-10">
							<h2 className="text-white text-2xl font-bold">About</h2>
						</div>
					</Layout>
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
