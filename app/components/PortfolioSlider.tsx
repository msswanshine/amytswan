import { useEffect, useState, useRef } from "react";
import type Flickity from "flickity";

import ChevronLeft from "~/components/Icons/ChevronLeft";
import ChevronRight from "~/components/Icons/ChevronRight";

import FHImage from "../../public/images/projects/fh.png";
import HSUSImage from "../../public/images/projects/hsus.png";
import LATWImage from "../../public/images/projects/latw.png";
import McKinseyImage from "../../public/images/projects/mfom.png";
import SPLCImage from "../../public/images/projects/splc.png";
import TRORImage from "../../public/images/projects/tror.png";
import TRPOImage from "../../public/images/projects/trpo.png";
import TTOLmage from "../../public/images/projects/ttol.png";
import WFWImage from "../../public/images/projects/wfw.png";

const slides = [{
	title: "McKinsey & Company: Future of Mobility",
	img: McKinseyImage,
}, {
	title: "Travel Portland: Near Me Now Map",
	img: TRPOImage,
}, {
	title: "Human Society of the United States",
	img: HSUSImage,
}, {
	title: "Southern Poverty Law Center",
	img: SPLCImage,	
}, {
	title: "Women for Women International",
	img: WFWImage,
}, {
	title: "Travel Oregon",
	img: TRORImage,
}, {
	title: "Teaching Tolerance",
	img: TTOLmage,
}, {
	title: "LA Theatre Works",
	img: LATWImage,
}, {
	title: "Facing History and Ourselves",
	img: FHImage,
}]

interface Slide {
	title: string;
	img: string;
}

export default function PortfolioSlider() {
	const [activeIndex, setActiveIndex] = useState<number>(0);
	const carouselRef = useRef<HTMLDivElement>(null);
	const flickityRef = useRef<Flickity | null>(null);

	useEffect(() => {
		const element = carouselRef.current;
		if (element && !flickityRef.current) {
			// Only import Flickity on the client side
			import('flickity').then((FlickityModule) => {
				const Flickity = FlickityModule.default;
				flickityRef.current = new Flickity(element, {
					wrapAround: true,
					pageDots: false,
					initialIndex: 1,
					draggable: true,
					prevNextButtons: false
				});

				flickityRef.current.on('select', () => {
					setActiveIndex(flickityRef.current?.selectedIndex ?? 0);
				});
			});
		}

		return () => {
			if (flickityRef.current) {
				flickityRef.current.destroy();
				flickityRef.current = null;
			}
		};
	}, []);

	const nextSlide = () => {
		flickityRef.current?.next();
	}

	const prevSlide = () => {
		flickityRef.current?.previous();
	}

	return (
		<div className="bg-black py-5 lg:py-10">
			<div className="flex flex-row justify-center align-center py-5 lg:py-10">
				<div className="flex items-center mx-3">
					<button 
						className="bg-neutral-950 border border-neutral-800 cursor-pointer p-3 md:p-4 lg:p-5 rounded-full flex items-center justify-center" 
						onClick={prevSlide}
						aria-label="Previous slide"
					>
						<ChevronLeft color="white" />   
					</button>
					<div className="text-neutral-200 md:mx-5 lg:mx-20 text-3xl  mt-5 flex flex-col items-center gap-2">
						<div className="text-xl font-bold font-optima-std">View a Project</div>
						<div className="text-base text-neutral-400 font-inter-std max-w-[350px] text-center mt-2">
							{`Here are some examples of work I've done.`}
						</div>
					</div>
					<button 
						className="bg-neutral-950 border border-neutral-800 cursor-pointer p-3 md:p-4 lg:p-5 rounded-full flex items-center justify-center" 
						onClick={nextSlide}
						aria-label="Next slide"
					>
						<ChevronRight color="white" />
					</button>
				</div>
			</div>
			<div ref={carouselRef} className="carousel items-center py-8">
				{slides.map((slide, i) => (
					<Slide key={i} slide={slide} isActive={i === activeIndex} />
				))}
			</div>
		</div>
	)
}

function Slide({slide, isActive}: {slide: Slide, isActive: boolean}) {
	return (
		<div className="carousel-cell">
			<div className="relative overflow-hidden p-4 lg:p-8 mx-3 flex flex-col min-w-[350px] md:min-w-[450px] lg:min-w-[700px]">
				<div aria-hidden="true" className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
					isActive ? 'opacity-100' : 'opacity-0'
				} bg-radial-gradient`}></div>
				<div aria-hidden="true" className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
					isActive ? 'opacity-0' : 'opacity-100'
				} bg-neutral-950`}></div>
				<div className="relative w-full pb-[70.25%]"> {/* 56.25% = 9/16 */}
					<div className="sr-only text-white">{slide.title}</div>

					{/* TODO: Add the video back in. Accessibility Lighthouse score will be at 100% when it's in. */}
					{/* <iframe
							className="absolute top-0 left-0 w-full h-full"
							src="https://www.youtube.com/embed/BEuksJHgmRQ"
							title="LMNT Case Study Video"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
							allowFullScreen>
					</iframe> */}
					<img src={slide.img} alt={slide.title} className="object-cover absolute top-0 left-0 w-full h-full" />
				</div>
			</div>
		</div>
	)
}

