import { headerLogo } from "../assets/images"
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
    return (
        <header className="padding-x py-8 absolute z-10 w-full">
            <nav className="flex justify-between max-container items-center">
                <a href="/">
                    <img src={headerLogo} alt="Nike Logo" height={29} width={130} />
                </a>
                <ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden">
                    {navLinks.map((item, index) => (
                        <li key={item.label + index}>
                            <a href={item.href} className="font-montserrat leading-normal text-lg text-slate-gray">
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="hidden max-lg:block">
                    <img src={hamburger} alt="hamburger menu icon" width={25} height={25}/>
                </div>
            </nav>
        </header>
    )
}

export default Nav