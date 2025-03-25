import { Link } from "@remix-run/react";

import Layout from "../Layout";

export default function Header() {
  return (
		<>
			<a href="#content" 
			className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:w-auto focus:h-auto focus:px-4 focus:py-2 focus:overflow-visible focus:whitespace-normal focus:bg-black focus:text-white focus:z-50 focus:m-4">
					Skip to content
			</a>
			<header className="bg-transparent fixed top-0 left-0 right-0 z-10">
				<Layout>
					<div className="px-4 md:px-10 py-[18px] md:py-8">
						<Link to="/" className="text-white text-2xl font-bold">
							Amy Swan
							<span className="sr-only">Home page</span>
						</Link>
					</div>
				</Layout>
			</header>
		</>
	)
}
