import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ContactForm() {
  const [focused, setFocused] = useState({
    name: false,
    email: false,
    message: false,
  });
  const [values, setValues] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleFocus = (field) => {
    setFocused((prev) => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field) => {
    if (!values[field]) {
      setFocused((prev) => ({ ...prev, [field]: false }));
    }
  };

  const handleChange = (field, value) => {
    setValues((prev) => ({ ...prev, [field]: value }));
  };

  const getFieldColor = (field) => {
    if (focused[field] || values[field]) {
      switch (field) {
        case 'name':
          return 'text-red-500 after:bg-red-500';
        case 'email':
          return 'text-blue-500 after:bg-blue-500';
        case 'message':
          return 'text-purple-500 after:bg-purple-500';
        default:
          return '';
      }
    }
    return 'text-gray-500 after:bg-gray-300';
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Validation
    if (!values.name || !validateEmail(values.email) || !values.message) {
      toast.error('Please fill out all fields correctly.');
      setIsLoading(false);
      return;
    }

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // Use environment variable
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Use environment variable
        {
          from_name: values.name,
          from_emailId: values.email,
          message: values.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY, // Use environment variable
      )
      .then(
        () => {
          toast.success('Email sent successfully!');
          setIsLoading(false);
          setValues({ name: '', email: '', message: '' });
        },
        () => {
          toast.error('Failed to send email. Please try again.');
          setIsLoading(false);
        },
      );
  };

  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute inset-0  flex justify-center items-center z-10 ">
          <div className="animate-spin rounded-full h-20  w-20 border-t-4 border-sky-600" />
        </div>
      )}
      <form
        className={isLoading ? 'w-full mt-8 blur-sm' : 'w-full mt-8'}
        onSubmit={handleSubmit}
      >
        {['name', 'email', 'message'].map((field) => (
          <div key={field} className="mb-6 relative mt-3">
            <label
              htmlFor={field}
              className={`absolute left-0 transition-all duration-300 font-poppins text-lg text-gray-500 ${
                focused[field] || values[field] ? '-top-6 text-sm' : 'top-0'
              } ${getFieldColor(field)}`}
            >
              {field.charAt(0).toUpperCase() + field.slice(1)} *
            </label>
            <div
              className={`relative ${getFieldColor(field)} mt-[4em] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:transition-all after:duration-300`}
            >
              {field === 'message' ? (
                <textarea
                  id={field}
                  rows="1"
                  className="w-full pb-1 bg-transparent resize-none focus:outline-none mt-3"
                  onFocus={() => handleFocus(field)}
                  onBlur={() => handleBlur(field)}
                  onChange={(e) => handleChange(field, e.target.value)}
                  value={values[field]}
                  required
                />
              ) : (
                <input
                  type={field === 'email' ? 'email' : 'text'}
                  id={field}
                  className="w-full pb-1 bg-transparent focus:outline-none mt-3"
                  onFocus={() => handleFocus(field)}
                  onBlur={() => handleBlur(field)}
                  onChange={(e) => handleChange(field, e.target.value)}
                  value={values[field]}
                  required
                />
              )}
            </div>
          </div>
        ))}

        <button
          type="submit"
          className="mt-4 px-8 py-3 bg-white text-gray-600 text-lg font-semibold border border-gray-500 hover:bg-gradient-to-r hover:to-pink-500 hover:from-rose-500 hover:text-white hover:border-white transition-colors duration-300 rounded-xl"
        >
          Submit
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default ContactForm;
