import { Link } from "@remix-run/react";
import { useEffect } from "react";

export default function HeaderMenu({ 
	isOpen
}: { 
	isOpen: boolean
}) {
	useEffect(() => {
		if (isOpen) {
			const firstLink = document.querySelector('nav a') as HTMLElement;
			firstLink?.focus();
		}
	}, [isOpen]);

	return (
		<div 
			className={`fixed inset-0 overflow-hidden transition-all duration-700 ease-in-out z-20
				${isOpen ? 'opacity-95 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} 
			style={{ 
				background: 'radial-gradient(74.32% 100% at 50% 100%, #4A90E2  0%, #9013FE 100%)',
				position: 'fixed',
				top: 0,
				left: 0,
				right: 0,
				bottom: 0
			}}
		>
			<nav 
				aria-label="Main menu" 
				className={`pt-5 md:pt-10 transition-all duration-500 max-w-6xl mx-auto px-4 md:px-10
					${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}
			>
				<ul className="flex flex-col gap-1 md:gap-4">
					{menuItems.map((item, index) => (
						<li 
							key={`main-menu-item-${index}`}
							className={`transition-all duration-500
								${isOpen ? 'opacity-100' : 'opacity-0'}`}
						>
							<Link 
								to={item.href} 
								className="text-white text-2xl md:text-5xl py-2 md:py-4 hover:text-gold transition-colors font-optima-std w-full h-full"
								tabIndex={isOpen ? 0 : -1}
							>
								<span className="w-full block">
									{item.label}
								</span>
							</Link>
						</li>
					))}

				</ul>
			</nav>
		</div>
	)
}

const menuItems = [
	{
		label: "About",
		href: "/about",
	},
	{
		label: "What I Do",
		href: "/what-i-do",
	},
	{
		label: "Contact Me",
		href: "/contact",
	},
];
