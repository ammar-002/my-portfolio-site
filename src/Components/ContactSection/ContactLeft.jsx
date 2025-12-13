import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactLeft = () => {
  const form = useRef();
  const [hasSent, setHasSent] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_2frxixr",
        "template_z6rmog7",
        form.current,
        "SfOqqMCSnPTL8l7OC"
      )
      .then(
        () => {
          setHasSent(true);
          setIsSending(false);
          form.current.reset();

          // auto hide success message
          setTimeout(() => {
            setHasSent(false);
          }, 3000);
        },
        (error) => {
          setIsSending(false);
          alert("Failed to send message, please try again.");
          console.error(error);
        }
      );
  };

  return (
    <div className="contact-left md:max-w-[40vw] max-w-[70vw] mx-auto flex flex-col gap-4 items-center">

      <h1 className="text-3xl font-bold text-[var(--color-orange)]">
        Lets Connect!
      </h1>

      <p className="text-lg text-center text-[var(--color-white)]">
        If you have any type of query, feel free to message me using the form below.
      </p>

  
      {hasSent && (
        <div className="
          w-full
          flex
          items-center
          gap-3
          bg-[rgba(34,197,94,0.1)]
          border
          border-[rgba(34,197,94,0.3)]
          text-[rgb(34,197,94)]
          px-4
          py-3
          rounded-lg
          shadow-sm
          animate-slideFade
        ">
          <span className="text-xl">✔</span>
          <p className="text-sm font-medium">
            Message sent successfully. I’ll get back to you soon.
          </p>
        </div>
      )}

      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col w-full gap-3"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="text-[var(--color-white)] outline-none bg-[var(--color-lightBrown)] rounded-md p-2"
        />

        <input
          type="email"
          name="user_email"
          placeholder="Email Address"
          required
          className="outline-none text-[var(--color-white)] bg-[var(--color-lightBrown)] rounded-md p-2"
        />

        <textarea
          name="message"
          placeholder="Message"
          required
          className="outline-none bg-[var(--color-lightBrown)] rounded-md text-[var(--color-white)] p-2 min-h-[25vh]"
        />

        <button
          type="submit"
          disabled={isSending}
          className={`
            cursor-pointer
            bg-[var(--color-darkOrange)]
            text-[var(--color-darkBrown)]
            font-semibold
            py-2.5
            px-6
            rounded-lg
            shadow-md
            transition-all
            duration-300
            hover:bg-[var(--color-cyan)]
            hover:shadow-lg
            hover:scale-[1.03]
            active:scale-95
            disabled:opacity-60
            disabled:cursor-not-allowed
          `}
        >
          {isSending ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactLeft;
