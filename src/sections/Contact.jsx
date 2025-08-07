import React, { useRef, useState } from 'react';
import Button from '../components/Button';
import TitleHeader from '../components/TitleHeader';
import emailjs from '@emailjs/browser'

const Contact = () => {
 const formRef = useRef(null)
    const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    try{
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      )
 setFormData({name: '',
    email: '',
    message: '',})
    }
    catch(error){
        console.log("EmailJS error", error)
    }
    finally{
        setLoading(false);
    }
  };

  const[loading,setLoading] = useState(false)

  return (
      <div>
    
      
      <section id='contact' className='flex-center section-padding'> 
      <div className='w-full h-full md:px-10 px-5'>
      <TitleHeader
               title="🤳 Contact Me "
               sub="want to talk?😁"
            />
       <div className='mt-6 grid-12-cols' >
      
      {/*left */}
      <div className='xl:col-span-5'>
        <div className='flex-center card-border rounded-xl p-10'>

      <form onSubmit={handleSubmit} className='w-full flex flex-col gap-7' ref={formRef}>
          <div>
        <label>Name:</label><br />
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          />
      </div>

      <div>
        <label>Email:</label><br />
          
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          />
      </div>

      <div>
        <label>Write a message</label><br />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          required
          />
      </div>
     <button
  type="submit"
  className="mt-4 px-4 py-2 bg-white/10 text-white rounded border border-white/20 hover:bg-white/20 transition"
  disabled={loading}
>
  {loading? 'Sending...' : 'Send'}
</button>
    </form>
          </div>
          </div>
          </div>
          </div>
          </section>
    </div>
  );
};

export default Contact;
