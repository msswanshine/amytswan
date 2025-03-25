import { useEffect, useState } from "react";

import HamburgerToggle from "./HamburgerToggle";
import Header from "./Header";
import HeaderMenu from "./HeaderMenu";

export default function HeaderElements() {
	const [isOpen, setIsOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 80);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<>
			<Header />
			<HeaderMenu isOpen={isOpen} />
			<div className={`absolute top-0 left-0 right-0 max-w-6xl mx-auto w-full`}>
				<div className={`
					${isScrolled ? 'fixed' : 'absolute'}
					right-4 sm:right-10 top-4 sm:top-[28px] z-30
				`}>
					<HamburgerToggle 
						className="flex justify-end" 
						isOpen={isOpen} 
						setIsOpen={setIsOpen} 
					/>
				</div>
			</div>
		</>
	)
}