import { ArrowLeft, Bell, Menu, Mic, Search, Upload, User } from "lucide-react"
import logo from "../assets/logo.svg"
import { Button } from "../components/Button"
import { useState } from "react"

export const PageHeader = () => {
    const [showFullWidthSearch, setShowFullWidthSearch] = useState(false);  //click search button to show full-width search bar (smaller md only)

    return (
        <div className='flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4'>
            <div className={`gap-4 items-center flex-shrink-0 ${showFullWidthSearch ? "hidden" : "flex"}`}>
                <Button variant="ghost" size="icon">
                    <Menu />
                </Button>
                <a href='/'>
                    <img src={logo} className="h-6" />
                </a>
            </div>
            <form className={`gap-4 flex-grow justify-center ${showFullWidthSearch ? "flex" : "hidden md:flex"}`}>
                {showFullWidthSearch && (
                    <Button onClick={() => setShowFullWidthSearch(false)} type="button" variant="ghost" size="icon" className="flex-shrink-0">
                        <ArrowLeft />
                    </Button>
                )}
                <div className="flex flex-grow max-w-[600px]">
                    <input
                        type="search"
                        placeholder="Search"
                        className="rounded-l-full border border-secondary-border shadow-inner shadow-secondary py-1 px-4 text-lg w-full focus:border-blue-500 outline-none" />
                    <Button
                        variant="default"
                        className="py-2 px-4 rounded-r-full border-secondary-border border border-l-0 flex-shrink-0"
                    >
                        <Search />
                    </Button>
                </div>
                <Button type="button" variant="default" size="icon" className="flex-shrink-0"><Mic /></Button>
            </form>
            <div className={`flex-shrink-0 md:gap-2 ${showFullWidthSearch ? "hidden" : "flex"}`}>
                <Button onClick={() => setShowFullWidthSearch(true)} size="icon" variant="ghost" className="md:hidden">
                    <Search />
                </Button>
                <Button size="icon" variant="ghost" className="md:hidden">
                    <Mic />
                </Button>
                <Button size="icon" variant="ghost">
                    <Upload />
                </Button>
                <Button size="icon" variant="ghost">
                    <Bell />
                </Button>
                <Button size="icon" variant="ghost">
                    <User />
                </Button>
            </div>
        </div>
    )
}
