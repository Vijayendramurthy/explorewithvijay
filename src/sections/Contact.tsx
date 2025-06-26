"use client";
import { useState, useRef } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ArrowuprightIcon from "../../public/assets/icons/arrow-up-right.svg";
import grainImage from "../../public/assets/images/grain.jpg";

export const ContactSection = () => {
  const [isFormVisible, setFormVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const handleContactClick = () => {
    setFormVisible(true);
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) {
      toast.error('Form reference not found');
      return;
    }

    const formData = new FormData(form.current);
    const from_name = formData.get('from_name') as string;
    const from_email = formData.get('from_email') as string;
    const message = formData.get('message') as string;

    if (!from_name || !from_email || !message) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ from_name, from_email, message }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('Email sent successfully!');
        form.current.reset();
        setFormVisible(false);
      } else {
        toast.error(data.message || 'Failed to send email');
      }
    } catch (error) {
      toast.error('Failed to send email');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24">
      <ToastContainer />
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-8">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent text-center">
            Contact
          </p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-4">Connect with me</h2>
        <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-3xl mx-auto">
          I'm just a message away! Whether it's for a project, or just a chat, feel free to contact me. I'd love to hear from you!
        </p>
        <div className="relative mt-24">
          <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
            <div
              className="absolute inset-0 opacity-5 -z-10"
              style={{
                backgroundImage: `url(${grainImage.src})`,
              }}
            ></div>

            <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
              <div>
                <h2 className="font-serif text-2xl md:text-3xl">
                  Let's create something amazing together.
                </h2>
                <p className="text-sm md:text-base mt-2">
                  Ready to bring your next project to life? Let's connect and
                  discuss how I can help you achieve your goals.
                </p>
              </div>
              <div className="">
                <button
                  className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900"
                  onClick={handleContactClick}
                >
                  <span className="font-semibold">Contact me</span>
                  <ArrowuprightIcon className="size-4" />
                </button>
              </div>
            </div>
          </div>
          {isFormVisible && (
            <div className="mt-10 flex flex-col md:flex-row gap-8 items-start border border-white/20 rounded-3xl overflow-hidden">
              <div className="md:w-1/2 px-8">
                <h2 className="font-serif text-2xl md:text-3xl mt-24 mb-2 bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">
                  Contact me for collaboration
                </h2>
                <p className="text-sm md:text-base mb-6">
                  Reach out today to discuss your project needs and start
                  collaborating on something amazing!
                </p>
              </div>
              <div className="md:w-1/2 bg-gray-900 text-white p-8 rounded-lg">
                <form ref={form} className="flex flex-col gap-4" onSubmit={sendEmail}>
                  <div className="flex flex-col md:flex-row gap-4">
                    <input
                      type="text"
                      placeholder="Name *"
                      name="from_name"
                      required
                      className="flex-1 px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:outline-none"
                    />
                    <input
                      type="email"
                      placeholder="Email *"
                      name="from_email"
                      required
                      className="flex-1 px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                  <textarea
                    placeholder="Message *"
                    className="px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:outline-none resize-vertical"
                    name="message"
                    rows={4}
                    required
                  ></textarea>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-6 py-2 rounded-lg font-semibold transition-all duration-200 ${
                      isSubmitting 
                        ? 'bg-gray-600 text-gray-300 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-emerald-300 to-sky-400 text-black hover:from-emerald-400 hover:to-sky-500'
                    }`}
                  >
                    {isSubmitting ? 'Sending...' : 'Submit'}
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};