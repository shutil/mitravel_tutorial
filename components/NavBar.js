import { FaFacebookF,FaTwitter  } from "react-icons/fa";
import { GoThreeBars } from "react-icons/go";

// FaFacebookF
// FaTwitter
// GoThreeBars

export default function NavBar() {
    return(
        <div className="h-20">
            <div className="container mx-auto px-4 lg:px-5 flex items-center h-full">
                <FaFacebookF className="text-xl" />
                <FaTwitter className="text-xl ml-7" />
                <p className="text-3xl mx-auto font-extrabold">MITRAVEL</p>
                <span><GoThreeBars className="text-2xl" /></span>
            </div>
        </div>
    )
};
