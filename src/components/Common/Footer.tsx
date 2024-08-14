import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa"


const Footer = () => {
  return (
    <footer className="bg-[#000]">
      <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
        <div className="flex flex-col-reverse items-center justify-between space-y-12 gap-3 md:flex-col md:space-y-0 md:items-start">
          <div>
            <img src="https://t4.ftcdn.net/jpg/02/89/30/25/360_F_289302587_UrGkCdrmzoZdRqgK5JkFI9BitPrnDGjX.jpg" alt="" className="w-20 h-20 rounded-full object-cover"/>
          </div>
          <div className="flex justify-center space-x-4">
        <a href="">   <FaFacebook size={20} className="text-brightRedLight"/></a>
        <a href="https://www.linkedin.com/in/divineuwandu/">
           <FaLinkedin size={20} className="text-brightRedLight"/>

        </a>
        <a href="https://github.com/DevDivine-001">
           <FaGithub size={20} className="text-brightRedLight"/>

        </a>
          </div>
        </div>
        <div className="flex justify-around space-x-32">
            <div className="flex flex-col space-y-3 text-white">
                  <a href="" className="hover:text-darkGrayIsBlue ease-in-out duration-500">Pricing</a>
                <a href="" className="hover:text-darkGrayIsBlue ease-in-out duration-500">Product</a>
                <a href="" className="hover:text-darkGrayIsBlue ease-in-out duration-500">About Us</a>
                <a href="" className="hover:text-darkGrayIsBlue ease-in-out duration-500">Careers</a>
                <a href="" className="hover:text-darkGrayIsBlue ease-in-out duration-500">Community</a>
            </div>

            <div className="flex flex-col space-y-3 text-white">
                  <a href="" className="hover:text-darkGrayIsBlue ease-in-out duration-500">Careerrs</a>
                <a href="" className="hover:text-darkGrayIsBlue ease-in-out duration-500">Community</a>
                <a href="" className="hover:text-darkGrayIsBlue ease-in-out duration-500">Privacy & Policy</a>
                
            </div>
            
            </div>
            <div className="flex flex-col justify-between">
              <form action=""> bg-brightRedLight hover:bg-brightRedLight focus:outline-none
                <div className="flex space-x-3">
                  <input type="text" className="flex-1 px-4 rounded-full focus:outline-none "
                  placeholder="Updated in your inbox"/>
                  <button className="px-6 py-2 text-[#fff] rounded-full bg-brightRedLight hover:bg-brightRedLight focus:outline-none">Go</button>

                </div>
              </form>
              <div className="hidden text-[#fff] md:block">
                Copyright & Copy; 2024, All Right Reserved

              </div>
            </div>

      </div>
    </footer>
  )
}

export default Footer