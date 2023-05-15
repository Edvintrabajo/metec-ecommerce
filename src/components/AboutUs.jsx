import React from 'react'
import MainNavbar from './MainNavbar'
import Footer from './Footer'
import CustomParticles from './CustomParticles'
import MessageAlert from './MessageAlert'

function AboutUs() {
  return (
    <div className="relative flex min-h-screen animate-slow-opacity-on flex-col items-center justify-start p-4">
        <CustomParticles size={0} />
        <MainNavbar />
        <MessageAlert />
        <div className="flex flex-col items-center justify-center w-full z-40">
            <h1 id='AboutUs' className="text-4xl m-4 font-bold text-center text-white z-40">About Us</h1>
            <main className='flex flex-wrap w-full flex-col p-4'>
                
                <div className='flex items-center justify-center p-4 mb-10 gap-y-4 flex-wrap lg:justify-evenly'>
                    <div className='flex justify-center flex-wrap gap-y-4 bg-white text-black p-4 rounded-lg overflow-y-auto w-full tablet:w-[350px] tablet:h-[400px] laptop:w-[600px] laptop:h-[320px] desktop:w-[700px] desktop:h-[400px]'>
                        <p>
                        Hi, I'm Miguel, a Spanish Web Developer and one of the co-founders of METEC Ecommerce. Our team has been inspired by the rising global demand for online shopping, as an increasing number of individuals now prefer the convenience of shopping from the comfort of their own homes rather than visiting physical stores.                        </p>
                        <p>
                        Our main objective is to create a user-friendly online platform that offers customers a seamless browsing and purchasing experience. We want to ensure that our customers can navigate our website effortlessly, find the products they desire, and complete their purchases quickly and easily.
                        </p>
                        <p>
                        We are excited to welcome you to our website and hope that you have a pleasant visit. Thank you for choosing METEC Ecommerce, and we look forward to serving you soon!
                        </p>
                    </div>
                    <div className='laptop:h-[320px] laptop:w-[220px] bg-info rounded-lg m-4'>
                        <img src="avatars/Miguel-Avatar-Greeting.png" alt="Miguel-Avatar" className='h-[400px] laptop:h-[320px] m-auto'/>
                    </div>
                </div>

                <div className='flex items-center justify-center p-4 mb-10 gap-y-4 flex-wrap lg:justify-evenly tablet:flex-row-reverse'>
                    <div className='flex justify-center flex-wrap gap-y-4 w-full bg-white text-black p-4 rounded-lg overflow-y-auto tablet:w-[350px] tablet:h-[400px] laptop:w-[600px] laptop:h-[320px] desktop:w-[700px] desktop:h-[400px]'>
                        <p>
                        Hey there! I'm Edvin, a Spanish Web Developer and another proud co-founder of METEC Ecommerce. We embarked on this exciting journey because we wanted to connect with customers worldwide and deliver our top-notch products to their doorsteps.                        </p>
                        <p>
                        At METEC, our primary focus is to provide an extensive range of high-quality technology and hardware products. We aim to meet the needs of our customers swiftly and efficiently, ensuring they have access to the best options available.                        </p>
                        <p>
                        We invite you to indulge in a delightful online shopping experience with us. Cheers to finding exactly what you're looking for and enjoying the convenience of METEC Ecommerce. Happy shopping!
                        </p>
                    </div>
                    <div className='laptop:h-[320px] laptop:w-[220px] bg-info rounded-lg m-4'>
                        <img src="avatars/Edvin-Avatar-Greeting.png" alt="Edvin-Avatar" className='h-[400px] laptop:h-[320px] m-auto'/>
                    </div>
                </div>

                <div className='flex items-center justify-center p-4 mb-10 gap-y-4 flex-wrap lg:justify-evenly'>
                    <div className='flex justify-center flex-wrap gap-y-4 w-full bg-white text-black p-4 rounded-lg overflow-y-auto tablet:w-[350px] tablet:h-[400px] laptop:w-[600px] laptop:h-[320px] desktop:w-[700px] desktop:h-[400px]'>
                        <p> 
                        Hello! I'm Blitz, your energetic robotic companion for online shopping. I'm here to make your shopping experience quick, exciting, and hassle-free. 
                        </p>
                        <p>
                        With my cutting-edge design and technological skills, I can help you find what you need and answer any questions you may have. My speed and efficiency are unmatched, processing your orders and ensuring they reach your door in record time. In addition, I add fun to your shopping experience with my friendly personality and optimistic attitude. 
                        </p>                    
                        <p>
                        Join me on this online shopping adventure and enjoy Blitz, your loyal robotic companion in the world of eCommerce.
                        </p>
                    </div>
                    <div className='h-[400px] w-[270px] laptop:h-[320px] laptop:w-[220px] bg-info rounded-lg m-4 flex justify-center items-center'>
                        <img src="img/robot.png" alt="Robot-img" className='w-[200px] laptop:h-[200px]'/>
                    </div>
                </div>

            </main>        
        </div>
        <Footer />
    </div>
  )
}

export default AboutUs