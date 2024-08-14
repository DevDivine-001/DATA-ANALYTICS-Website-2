import img from "../../assets/react.svg"

const Header = () => {
  return (
    <header className="container mx-auto p-6 top-0 sticky">
        <nav className="flex items-center justify-between">
            {/* Logo */}
            <div className="pt-2">
                <img src={img} alt="" />
            </div>
            <div className="md:flex space-x-6 hidden">
                <a href="" className="hover:text-darkGrayIsBlue ease-in-out duration-500">Pricing</a>
                <a href="" className="hover:text-darkGrayIsBlue ease-in-out duration-500">Product</a>
                <a href="" className="hover:text-darkGrayIsBlue ease-in-out duration-500">About Us</a>
                <a href="" className="hover:text-darkGrayIsBlue ease-in-out duration-500">Careers</a>
                <a href="" className="hover:text-darkGrayIsBlue ease-in-out duration-500">Community</a>
                {/* <a href=""></a> */}
            </div>
            <a href="" className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight hidden md:block  justify-center items-center">Get Started</a>

        </nav>

    </header>
  )
}

export default Header