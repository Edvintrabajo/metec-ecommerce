import React, {useRef} from 'react'
import MainNavbar from './MainNavbar'
import MessageAlert from './MessageAlert'
import Footer from './Footer'
import CustomParticles from './CustomParticles'
import {
Card,
Input,
Button,
Typography,
Textarea
} from "@material-tailwind/react";
import emailjs from '@emailjs/browser';
import { resetForm } from '../controllers/products/products.functions';
import { showAlert } from '../controllers/general/general.functions';

function ContactUs() {
    const form = useRef();

    const sendEmail = () => {

        emailjs.sendForm('service_hlyvggs', 'template_p0q4z87', form.current, 'uBq-PHmGVHhewMT8f')
        .then((result) => {
            showAlert('Your message has been sent successfully!', 'success');
        }, (error) => {
            showAlert('An error has occurred, please try again later.','error');
        });
        
    }

  return (
    <div className="relative flex min-h-screen animate-slow-opacity-on flex-col items-center justify-start p-4">
        <CustomParticles size={0} />
        <MainNavbar />
        <MessageAlert />
        <div className="flex flex-col items-center justify-center w-full">
            <h1 className="text-4xl m-4 font-bold text-center text-white z-40">Contact Us</h1>
            <main className='flex flex-wrap w-full flex-col p-4'>
                
                <div className='flex justify-center'>

                    <Card color="white" shadow={false} className='p-4 shadow-low-box-shadow'>
                        <h1 className="text-3xl mt-2 font-bold text-center text-gray-800">Get in touch!</h1>
                        <form
                            id='contact-form'
                            className="mt-8 mb-2 w-full max-w-screen-lg sm:w-96"
                            ref={form}
                            onSubmit={(e) => {
                                e.preventDefault();
                                sendEmail();
                                resetForm('contact-form');
                            }}>
                            <Typography color="gray" className="mb-2 p-2 font-normal text-gray-800">
                                Enter your details to lets us know how we can help you. Our support team will contact you as soon as posible.
                            </Typography>
                            <div className="mb-4 flex flex-col gap-6">
                                <Input size="lg" label="Name" required type="text" name="user_name"/>
                                <Input size="lg" label="Email" required type="email" name="user_email"/>
                                <select id="ContactClass" required label="ContactClass" name='topic' className="w-full py-3 rounded-md border border-neutral-400 text-neutral-500 bg-white p-2 text-sm outline-blue-600">
                                    <option value="Information">Information</option>
                                    <option value="Isues">Isues</option>
                                    <option value="My account">My account</option>
                                    <option value="My orders">My orders</option>
                                    <option value="Payment methods">Payment methods</option>
                                    <option value="Returns">Returns</option>
                                </select>
                                <div className="w-full">
                                    <Textarea label="Message" required name='message'/>
                                </div>
                            </div>
                            <Button className="mt-6" fullWidth type='submit' color='blue'>
                                Send
                            </Button>
                        </form>
                    </Card>         
                </div>

            </main>        
        </div>
        <Footer />
    </div>
  )
}

export default ContactUs