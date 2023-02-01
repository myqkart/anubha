import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';
import Modal from 'react-modal';
// components
import { Footer } from "../shared/components/Footer";
// images
import contactImg from '../assets/images/contact1.png';
// variables
import { CONSTAINT } from "../shared/services/CONSTAINT.service";
import { ENV } from "../environment/enviromentt";
import { checkMsg, checkNumber, emailValidator, onlyChars } from "../shared/services/validators.service";
import loader from '../assets/images/preloader.gif';

const initFormData = {name: '', email: '', num: '', msg: ''};

export const Contact = () => {
  const form = useRef();
  const navigate = useNavigate();

  const [formData, setFormData] = useState(initFormData);
  const [errData, setErrData] = useState(initFormData);
  const [showLoader, setShowLoader] = useState(false);

  const handleChange = ({target : { name, value}}) => setFormData((pre) => ({...pre, [name]: value}));

  const checkError = (form) => {
    const errors = {
      name: onlyChars(form), email: emailValidator(form),
      num: checkNumber(form), msg: checkMsg(form),
    }
    setErrData((pre) => ({...pre, ...errors}));

    let errCount = 0;
    Object.keys(errors).map((e) => errCount += (errors[e] ? 1 : 0) );
    if(errCount) setShowLoader(false);
    return errCount ? true : false;
  }

  const sendEmail = (e) => {
    e.preventDefault();
    setShowLoader(true)
    const status = checkError(formData)
    if(status) return false;

    emailjs.sendForm(ENV.SERVICE_ID, ENV.TEMPLATE_ID, form.current, ENV.PUBLIC_KEY)
      .then(() => {
        setShowLoader(false);
        navigate(CONSTAINT.navigateToHome)
      }, (error) => {
        console.log(error.text);
        setShowLoader(false);
      });
  };

    return (
      <div>
        <Modal isOpen={showLoader} onRequestClose={() => setIsOpen(false)} contentLabel="Example Modal" className="model">
          <img className="model-img" draggable="false" src={loader} alt=""/>
        </Modal>
        <section className="contact" id="contact">
          <h2 className="heading"><i className="fas fa-headset"></i> Get in <span>Touch</span></h2>
          <div className="container">
            <div className="content">
              <div className="image-box">
                <img draggable="false" src={contactImg} alt="" />
              </div>
            <form id="contact-form" ref={form} onSubmit={sendEmail}>
              <div className="form-group">
                <div className="field">
                  <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
                  <i className='fas fa-user'></i>
                </div>
                  { errData.name && <p className="form-error">{errData.name}</p> }

                <div className="field">
                  <input type="text" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                  <i className='fas fa-envelope'></i>
                </div>
                  { errData.email && <p className="form-error">{errData.email}</p> }

                <div className="field">
                  <input type="text" name="num" placeholder="Phone" value={formData.num} onChange={handleChange} />
                  <i className='fas fa-phone-alt'></i>
                </div>
                  { errData.num && <p className="form-error">{errData.num}</p> }

                <div className="message">
                <textarea placeholder="Message" name="msg" value={formData.msg} onChange={handleChange} ></textarea>
                <i className="fas fa-comment-dots"></i>
                </div>
                  { errData.msg && <p className="form-error">{errData.msg}</p> }
                </div>

              <div className="button-area">
                <button type="submit">
                  Submit <i className="fa fa-paper-plane"></i></button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};