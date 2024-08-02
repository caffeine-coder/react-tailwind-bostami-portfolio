import React, { useState } from 'react';

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

  return (
    <form className="w-full mt-8">
      {['name', 'email', 'message'].map((field) => (
        <div key={field} className="mb-6 relative mt-3">
          <label
            htmlFor={field}
            className={`absolute left-0 transition-all duration-300 font-poppins text-lg text-gray-500 ${
              focused[field] || values[field] ? '-top-6 text-sm' : 'top-0'
            } ${getFieldColor(field)}`}
          >
            {field.charAt(0).toUpperCase() + field.slice(1)}
            *
            {' '}
          </label>
          <div
            className={`relative ${getFieldColor(field)} mt-[4em]  after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:transition-all after:duration-300`}
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
        className="mt-4 px-8 py-3  bg-white text-gray-600 text-lg font-semibold border border-gray-500 hover:bg-gradient-to-r hover:to-pink-500 hover:from-rose-500 hover:text-white hover:border-white transition-colors duration-300 rounded-xl"
      >
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
