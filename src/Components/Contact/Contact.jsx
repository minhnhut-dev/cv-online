import React, { useRef, useEffect, useContext } from 'react'
import emailjs from '@emailjs/browser';
import './contact.css'
import { topContext } from '../../App'
import { SiGmail } from 'react-icons/si'
import { RiMessengerLine } from 'react-icons/ri'
import Swal from 'sweetalert2'

function Contact() {

  const contactRef = useRef()
  const value = useContext(topContext)
  const form = useRef()

  useEffect(() => {
    value[1](state => {
      state[0].contactTop = contactRef.current.offsetTop
      return state
    })
  }, [])

  function handleSubmit(e){
    e.preventDefault()
    emailjs.sendForm('service_adojqsj','template_5kebyx5', form.current,'GRNkmHJc2ql67_ksn').then((result) => {
     if(result.text === 'OK'){
      Swal.fire({
        title: "Good job!",
        text: "Thank you for responding to me!",
        icon: "success"
      });
     }
     e.target.reset();
    })
  }

  return (
    <section className='main_section' id='contact' ref={contactRef}>

      <div className='section_header'>
        <span>Get In Touch</span>
        <h3>Contact Me</h3>
      </div>

      <div className="contact_container">
        <div className="contact_container-left">

          <form className="main_drop" onSubmit={(e)=>handleSubmit(e)} ref={form}>
            <input name='name' type="text" placeholder='Your Full Name' required/>
            <input name='mail' type="email" placeholder='Your Email' required/>
            <textarea name='message' id="" rows='8' placeholder='Your Message'required />
            <button type='submit'>Send Message</button>
          </form>

        </div>

        <div className="contact_container-right">
          <div className="sub_drop">
            <SiGmail />
            <a href="mailto:nhutphamdev@gmail.com" target='_blank'>Send Email</a>
          </div>
          <div className="sub_drop">
            <RiMessengerLine />
            <a href='https://www.linkedin.com/in/minh-nh%E1%BB%B1t-ph%E1%BA%A1m-a35735229/' target='_blank'>Send Message</a>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Contact
