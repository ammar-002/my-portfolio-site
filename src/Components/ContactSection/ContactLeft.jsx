import React from "react";

const ContactLeft = () => {
  return (
    <div className="contact-left md:max-w-[40vw] max-w-[70vw] mx-auto flex flex-col gap-3 items-center">
         <h1 className='text-3xl font-bold text-[var(--color-orange)]'>Lets Connect!</h1>
        <p className='text-lg text-[var(--color-white)]'>If you have any type of query. You can message me by submitting the following form.</p>
      <form action="" className="flex flex-col pt-1 w-full gap-3  ">
        <input type="text" placeholder="Your Name" className="text-[var(--color-white)] outline-none bg-[var(--color-lightBrown)] focus:outline-none rounded-md p-1" />
        <input type="email" placeholder="Email Adress" className="outline-none text-[var(--color-white)] bg-[var(--color-lightBrown)] rounded-md p-1"/>
        <textarea placeholder="Message" className="outline-none bg-[var(--color-lightBrown)] rounded-md text-[var(--color-white)] p-1 min-h-[25vh]"></textarea>
      </form>
    </div>
  );
};

export default ContactLeft;
