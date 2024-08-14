

const Header = () => {
  return (
    <header className="top-0 sticky bg-[#fff] shadow-md">
       <nav  className="container mx-auto p-6">
         <nav className="flex items-center justify-between">
            {/* Logo */}
            <div className="pt-2">
                <img src="https://t4.ftcdn.net/jpg/02/89/30/25/360_F_289302587_UrGkCdrmzoZdRqgK5JkFI9BitPrnDGjX.jpg" alt="" className="w-12 h-12 rounded-full object-cover"/>
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
       </nav>

    </header>
  )
}

export default Header