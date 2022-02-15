import { useEffect } from "react";
import { useLocation } from "react-router-dom"

const ScrollToTop = ({ closeSidebar }) => {
    const pathname = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0)
        closeSidebar()
    }, [pathname])

    return null
}

export default ScrollToTop