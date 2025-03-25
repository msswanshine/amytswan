export default function HamburgerIcon({
  className,
  isOpen,
  setIsOpen
}: {
  className?: string
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}){
  const lineClasses = 'menu-line h-[2px] bg-white group-hover:bg-gold group-focus:bg-gold transition-all duration-300 origin-center'
  
  return (
    <div className={className}>
      <button 
        className={`menu-toggle relative z-10 p-2 pr-0`} 
        aria-label={isOpen ? "Close menu" : "Open menu"} 
        title="Menu Toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={`group menu-toggle-lines h-5 sm:h-6 w-7 sm:w-8 flex flex-col justify-between ${isOpen ? 'active' : ''}`}>
          <span className={`${lineClasses} ${isOpen ? 'rotate-45 translate-y-[9px] sm:translate-y-[11px]' : ''}`}></span>
          <span className={`${lineClasses} ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`${lineClasses} ${isOpen ? '-rotate-45 -translate-y-[9px] sm:-translate-y-[11px]' : ''}`}></span>
        </div>
      </button>
    </div>
  )
}
