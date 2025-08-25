
import {cn} from "@/lib/utils"
import { useEffect, useState } from "react"

const navItems = [
  {name: "Home", href: "#hero"},
  {name: "Sobre mim", href: "#about"},
  {name: "Skills", href: "#skills"},
  {name: "Projetos", href: "#projects"},
  {name: "contato", href: "#contact"},
]


export const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.screenY > 10)
    }

    window.addEventListener("scroll", handleScroll)
  }, [])

  return(
    <nav className={cn("fixed w-full z-40 transition-all duration-300", )} ></nav>
  ) 
}