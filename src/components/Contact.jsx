import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

// template_0xrizvi
// service_8ucd9a6
// bi1A0_unpp97gqx1w

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        // import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        // import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        'service_8ucd9a6',
        'template_0xrizvi',
        {
          from_name: form.name,
          to_name: "Rohit Shaw",
          from_email: form.email,
          to_email: "carpediem212045@gmail.com",
          message: form.message,
        },
        // import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        'bi1A0_unpp97gqx1w'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you! I'll get back to you soon.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Something went wrong. Please try again!");
        }
      );
  };

  return (
    <div
      className={`xl:mt-17 mt-[-45px] flex xl:flex-row flex-col-reverse gap-7 overflow-hidden mb-[-28px] content-center`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.5] bg-black-100 p-12 rounded-2xl vilet-gradient border-dashed shadow-xl shadow-primary'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        {/* // form starts here */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-3 flex flex-col gap-7 mb-[-14px]'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2 drop-shadow-2xl'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-3 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-small text-[12px] b-gradient shadow-md shadow-primary'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2 drop-shadow-2xl'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-3 px-6 placeholder:text-secondary text-white rounded-lg outline-none font-small text-[12px] bt-gradient border-none shadow-md shadow-primary'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2 drop-shadow-2xl'>Your Message</span>
            <textarea
              rows={4}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What do you wanna say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none font-small text-[12px] br-gradient border-none shadow-md shadow-primary '
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-2 px-5 rounded-xl outline-none w-fit text-white font-bold text-[14px] shadow-md shadow-primary br-gradient drop-shadow-2xl'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      {/* <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div> */}
    </div>
  );
};

export default SectionWrapper(Contact, "contact");