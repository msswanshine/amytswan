import type { MetaFunction } from "@remix-run/node";

import About from "~/components/About";
import HeaderElements from "~/components/Header/HeaderElements";
import Hero from "~/components/Hero";
import PortfolioSlider from "~/components/PortfolioSlider";

export const meta: MetaFunction = () => [{ title: "Amy Swan | Software Engineer" }];

export default function Index() {
  return (
    <div className="bg-gray h-full">
			<HeaderElements />
			<main id="content">
				<Hero />
				<About />
				<PortfolioSlider />
			</main>
    </div>
  );
}
