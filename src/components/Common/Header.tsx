import { useState } from "react"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"


const Header = () => {
  const [DropDownMenu, setDropDownMenu] = useState(false)
  const handleNav = () =>{
    setDropDownMenu(!DropDownMenu)
  }
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

        {/* <button className=" block hamburger md:hidden focus:outline-none" onClick={handleNav}>
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button> */}
         <div onClick={handleNav} className="cursor-pointer block md:hidden text-[#000]">
       {!DropDownMenu ?  <AiOutlineMenu size={20}/> : <AiOutlineClose size={20}/>}</div>

        <div       className={!DropDownMenu ? "fixed left-[-100%] ease-in-out duration-700 bg-[#fff]" : "fixed left-0 top-[70px] w-[100%] h-full border-r-none ease-in-out duration-700 border-none cursor-pointer block md:hidden bg-[#fff]"}onClick={handleNav}>
          <div className="absolute flex flex-col items-center  self-end  py-8 mt-10 space-y-6 font-bold  sm:w-auto sm:self-center left-6 right-6 drop-shadow-md">
              <a href="" className="hover:text-darkGrayIsBlue ease-in-out duration-500">Pricing</a>
                <a href="" className="hover:text-darkGrayIsBlue ease-in-out duration-500">Product</a>
                <a href="" className="hover:text-darkGrayIsBlue ease-in-out duration-500">About Us</a>
                <a href="" className="hover:text-darkGrayIsBlue ease-in-out duration-500">Careers</a>
                <a href="" className="hover:text-darkGrayIsBlue ease-in-out duration-500">Community</a>


          </div>

        </div>

        </nav>
       </nav>

    </header>
  )
}

export default Header