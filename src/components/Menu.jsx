import { IconHome2, IconMenu2 } from "@tabler/icons-react"



const Menu = () => {

    return (
        <>
            <div className="flex justify-between max-sm:flex-wrap">
                <div className="">
                    <IconHome2 size={30} className="text-white hover:text-cyan-200 transition-colors"/>
                </div>
                <div className="flex transition-colors">
                    <nav className="">
                    <IconMenu2 className="md:hidden"/>
                        <ul className="flex gap-5 max-md:hidden">
                            <li className="hover:text-white/40"><a href="#components/Home">Home</a></li>
                            <li className="hover:text-white/40"><a href="#components/Projects">Projects</a></li>
                            <li className="hover:text-white/40">About me</li>
                            <li className="hover:text-white/40"><a href="#Projects">Contact me</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}
export {
    Menu
}