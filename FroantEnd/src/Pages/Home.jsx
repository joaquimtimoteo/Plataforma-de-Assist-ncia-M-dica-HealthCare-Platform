import heroImg04 from '../assets/images/icon01.png';
import heroImg01 from '../assets/images/hero-img01.png';
import heroImg02 from '../assets/images/hero-img02.png';
import heroImg03 from '../assets/images/hero-img03.png';
import icon02 from '../assets/images/icon02.png';
import icon03 from '../assets/images/icon03.png';

import videoIcon  from '../assets/images/video-icon.png';
import avatarIcon from '../assets/images/avatar-icon.png';
import faqImg from '../assets/images/faq-img.png';
import { Link } from 'react-router-dom';
import featureImg from '../assets/images/feature-img.png'
import { BsArrowRight } from 'react-icons/bs';
import About from '../Componentes/About/About';
import ServicesList from '../Componentes/Services/ServicesList';
import DoctorList from '../Componentes/Doctors/DoctorList';
import FaqList from '../Componentes/Faq/FaqList';
import Testemonies from '../Componentes/Testemonies/Testemonies';



function Home() {
  return (
    <>
      <section className='hero_section pt-[60px] xl:h-[800px]'>
        <div className='container'>
          <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>
            <div>
              <div className='lg:w-[570px]'>
                <h1 className='text-4xl leading-10 text-headingColor font-bold md:text-5xl md:leading-14'>
                Plataforma de Assistência Médica: <br />
                HealthCare Platform<br />
                </h1>
                <p className='text-base leading-8'>
                Saúde em suas mãos - Tenha acesso à plataforma líder em assistência:<br />
                médica. Com a HealthCare Platform, você pode agendar consultas médicas,,<br />
                receber orientações de saúde e muito mais, tudo em um só lugar.,<br />
                De check-ups regulares a cobertura abrangente,<br />
                estamos aqui para cuidar de você e sua família.
                </p>
                <button className='btn'>Solicitar um Agendamento</button>
              </div>
              <div className='mt-8 lg:mt-14 flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-8'>
                <div>
                  <h2 className='text-3xl leading-14 font-bold'>30+</h2>
                  <span className='w-24 h-2 bg-yellowColor rounded-full block mt-1'></span>
                  <p className='text-base leading-7'>Anos de Experiência</p>
                </div>
                <div>
                  <h2 className='text-3xl leading-14 font-bold'>15+</h2>
                  <span className='w-24 h-2 bg-purpleColor rounded-full block mt-1'></span>
                  <p className='text-base leading-7'>Hospitais</p>
                </div>
                <div>
                  <h2 className='text-3xl leading-14 font-bold'>100%</h2>
                  <span className='w-24 h-2 bg-irisBlueColor rounded-full block mt-1'></span>
                  <p className='text-base leading-7'>Satisfação dos Doentes</p>
                </div>
              </div>
            </div>

            <div className='flex gap-8 justify-end'>
              <div>
                <img className='w-full' src={heroImg01} alt="" />
              </div>
            </div>
            <div className='mt-8'>
              <img src={heroImg02} alt="" className='w-full mb-8' />
              <img src={heroImg03} alt="" className='w-full' />
            </div>
          </div>
        </div>
      </section>

      <section className='py-8 lg:py-14'>
        <div className="container mx-auto">
          <div className='lg:w-[470px] mx-auto'>
            <h2 className='text-3xl leading-10 font-bold text-center'>Monitoramento Remoto de Saúde</h2>
            <p className='text-base leading-7 text-center'>Monitoramento dos sinais vitais e sintomas em casa, usando dispositivos conectados à plataforma.</p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8 mt-8 lg:mt-14'>
            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
               <img src={ heroImg04 } alt="" className="w-60 h-auto"/>
              </div>
              <div className='mt-2'>
                <h2 className='text-2xl leading-9 font-bold text-headingColor text-center'>Suporte  em Tempo Real</h2>
                <p className='text-base leading-7 text-center mt-4'>
                Canais de suporte para pacientes e médicos, incluindo chat ao vivo, e-mail e telefone.</p>
                <Link to='/doctors' className='w-[44px]   h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                  <BsArrowRight className='group-hover:text-white w-6 h-5' />
                </Link>
              </div>
            </div>
            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center ' >
                <img src={icon02} alt="" />
              </div>
              <div className='mt-8'>
                <h2 className='text-2xl leading-9 font-bold text-headingColor text-center'>Encontre um Medico</h2>
                <p className='text-base leading-7 text-center mt-4'>
                Verificação de credenciais para médicos e profissionais de saúde.</p>
                <Link to='/doctors' className='w-[44px]   h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                  <BsArrowRight className='group-hover:text-white w-6 h-5' />
                </Link>
              </div>
            </div>
            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img src={icon03} alt="" />
              </div>
              <div className='mt-8'>
                <h2 className='text-2xl leading-9 font-bold text-headingColor text-center'>Histórico Médico Digita</h2>
                <p className='text-base leading-7 text-center mt-4'>
                Verificação de credenciais para médicos e profissionais de saúde.</p>
                <Link to='/doctors' className='w-[44px]   h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                  <BsArrowRight className='group-hover:text-white w-6 h-5' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <About/>

      <section>
        <div className='container'>
       <div className='xl:w-[470px] mt-auto'>
       </div>
       <h2 className='heading text-center' >HealthCare Platform Serviços </h2>
       <p className='text_para text-center'>Consultas Médicas Online</p>
        </div>
      <ServicesList/>
      </section>

<section>
  <div className="container" >
  <div className='flex flex-col lg:flex-row items-center lg:items-start justify-between'>
  <div className='w-full lg:w-[670px]'>
    <h2 className='heading'>Oferecemos consultas médicas virtuais com profissionais de saúde</h2>
    <ul className='pl-4'>
      <li className='text_para'> 1.Prescrições Eletrônicas:</li>
      <li className='text_para'>2. Monitoramento Remoto da Saúde</li>
      <li className='text_para'>3.Segunda Opinião Médica</li>
    </ul>
    <Link to="/">
      <button className='btn'>Mais Informações</button>
    </Link>
    </div>
    <div className='relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0'>
      <img src={featureImg} alt="" className='w-3/4' />
      <div className='w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] 
      md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]'>

        <div className='flex items-center justify-between'>
          <div className="flex items-center gap-[6px] lg:gap-3">
            <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor
            font-[600]'>100+ Médicos Certificados</p>
            <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor
            font-[400]'>10:00AM</p>
          </div>
          <span className='w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center
          bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]'>
          <img src={videoIcon} alt="" />
          </span>
        </div>

        <div className='w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px]
        text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4
        rounded-full'>
          Aconselhamento e Saúde Mental
        </div>
        <div className='flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]'>
          <img src={avatarIcon} alt="" />
          <h4 className='text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] 
          text-headingColor'>Programas de Saúde Preventiva</h4>
        </div>
      </div>
    </div>
    </div>
  </div>
</section>
<section>
  <div className="container">
  <div className='xl:w-[470px] mt-auto'>
       </div>
       <h2 className='heading text-center' >HealthCare Platform Serviços</h2>
       <p className='text_para text-center'>Educação em Saúde: Fornecemos recursos educacionais em saúde para capacitar os pacientes
       </p>
  </div>
  <DoctorList/>
<div>
</div>
</section>
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-0">
        <div className='w-1/2 hidden md:block'>
         <img src={faqImg} alt="" />
         </div>
        <div className='w-full md: md:w-1/2'>
            <h2 className='heading'>Atendimento Multidisciplinar</h2>
            <FaqList/>
        </div>
        </div>
      </div>
    </section>
    <section>
      <div className="container">
      <div className='xl:w-[470px] mt-auto'>
       </div>
       <h2 className='heading text-center' > Triagem Médica Virtual:</h2>
       <p className='text_para text-center'>Oferecemos serviços de triagem médica online para ajudar os pacientes a determinar a 
       </p>
  </div>
      <Testemonies/>
 
    </section>
    </>
  );
}

export default Home;
