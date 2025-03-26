export default function ChevronLeft({ color = "#000000" }: { color?: string }) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={color}>
			<path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/>
		</svg>
	)
}
