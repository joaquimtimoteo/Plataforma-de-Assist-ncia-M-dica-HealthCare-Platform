import { Link } from 'react-router-dom';
import { RiLinkedinFill } from 'react-icons/ri';
import { AiFillYoutube, AiFillGithub, AiOutlineInstagram } from 'react-icons/ai';

const socialLinks = [ 
  {
    path: "https://www.youtube.com/watch?v=NzH9Fw5e0h4",
    icon: <AiFillYoutube className="group-hover:text-white w-4 h-5"/>,
  },
  {
    path: "https://www.youtube.com/watch?v=NzH9Fw5e0h4",
    icon: <AiFillGithub className="group-hover:text-white w-4 h-5"/>
  }, 
  {
    path: "https://www.youtube.com/watch?v=NzH9Fw5e0h4",
    icon: <AiOutlineInstagram className="group-hover:text-white w-4 h-5"/>
  },
  {
    path: "https://www.youtube.com/watch?v=NzH9Fw5e0h4",
    icon: <RiLinkedinFill className="group-hover:text-white w-4 h-5"/>
  },
];

const quickLinks01 = [
  {
    path: "/home", 
    display: "Home",
  },
  {
    path: "/",
    display: "About Us",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/",
    display: "Blog"
  }
];

const quickLinks02 = [
  {
    path: "/find-a-doctor",
    display: "Find a Doctor",
  },
  {
    path: "/",
    display: "Request an Appointment",
  },
  {
    path: "/",
    display: "Find a Location", // Corrigido o texto
  },
  {
    path: "/",
    display: "Get an Opinion" // Alterado "Opinion" para "Get an Opinion"
  }
];

const quickLinks03 = [
  {
    path: "/",
    display: "Donate",
  },
  {
    path: "/contact",
    display: "Contact Us",
  },
];

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className='pb-16 pt-10'>
      <div className="container">
        <div className='flex justify-between flex-col md:flex-row flex-wrap gap-[30px]'>
          <div>
            
            <p className='text-[16px] leading-7 font-[400] text-textColor mt-4'>Copyright@ {year} develop by joaquim timoteo all  right reserved</p>
          
          <div className='flex items-center gap-3 mt-4'>
            {socialLinks.map(
              (link,index)=>
              <Link to={link.path} key={index} className='w-9 h-9 border-solid border-[#181A1E]
              rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                {link.icon}
              </Link>)}
          </div>
          </div>
          <div>
            
          </div>
          <div>
          <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>Quick links</h2>
          <ul>

            {quickLinks01.map((item, index)=>(
              <li key={index} className='mb-4'>
                <Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor'>{item.display}

                </Link>
              </li>
            ))}
           </ul>
          </div>
          <div>
          <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>Support</h2>
          <ul>

            {quickLinks03.map((item, index)=>(
              <li key={index} className='mb-4'>
                <Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor'>{item.display}

                </Link>
              </li>
            ))}
           </ul>
          </div>
          <div>
          <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>I Want to:</h2>
          <ul>

            {quickLinks02.map((item, index)=>(
              <li key={index} className='mb-4'>
                <Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor'>{item.display}

                </Link>
              </li>
            ))}
           </ul>
          </div>
        </div>
      
        
      </div>
    </footer>
  );
}

export default Footer;
