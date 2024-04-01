import aboutImg from '../../assets/images/about.png';
import aboutcardImg from '../../assets/images/about-card.png';
import { Link } from 'react-router-dom';
function About() {
  return <section>
    <div className='container'>
    <div className='flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row'>
           <div className='relative w-3/4 lg:w-1/2 xl:w-[700px] z-10 order-2 lg:order-1'>
            <img src={aboutImg} alt=""  />
            <div className='absolute z-20 bottom-4 w-[200px] md:w-[300px]  right-[-30%] md:right-[-7%]
            lg:right-[22%]'>
                <img src={aboutcardImg} alt="" />
            </div>
           </div>
           <div className='w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2'>
           <h2 className='heading'>Plataforma de Assistência Médica: HealthCare Platform</h2>
           <p className='text_para'>Saúde em suas mãos - Tenha acesso à plataforma líder em
            assistência médica. Com a HealthCare Platform, você pode agendar consultas
            médicas, receber orientações de saúde e muito mais, tudo em um só lugar.</p>

          <p className='text_para mt-[30px]' >Planos Personalizados - Escolha entre uma variedade de 
          planos de saúde para atender às suas necessidades individuais. De check-ups regulares a cobertura abrangente, 
          estamos aqui para cuidar de você e sua família.</p>
          <Link to='/'>
              <button className='btn'>Saiba Mais sobre a Plataforma de Assistência Médica</button>
          </Link>
           </div>
        </div>
    </div>
  </section>

}

export default About

