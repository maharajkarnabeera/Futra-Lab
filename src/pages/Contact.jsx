import emailjs from 'emailjs-com';

function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        e.target,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Message sent successfully!');
        },
        (error) => {
          console.log(error.text);
          alert('Failed to send the message. Please try again.');
        }
      );

    e.target.reset(); // Reset the form after submission
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 md:flex md:justify-between">
        {/* Contact Information */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <p className="text-gray-700 mb-4">
            Feel free to reach out to us through any of the following methods:
          </p>
          <ul className="text-gray-600 mb-6">
            <li>Office Address: 1234 Innovation Drive, Tech City</li>
            <li>Phone: +1 (555) 012-3456</li>
            <li>Email: contact@sitedesign.com</li>
          </ul>
          {/* <img
            src="https://via.placeholder.com/400x300"
            alt="Office Building"
            className="rounded-lg"
          /> */}
        </div>

        {/* Contact Form */}
        <div className="md:w-1/2 bg-gray-100 p-6 shadow-md rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
          <form onSubmit={sendEmail} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-2 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-4 py-2  bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="w-full px-4 py-2  bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="w-full px-4 py-2  bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows="4"
            ></textarea>
            <button
              type="submit"
              className="w-full py-2  bg-black text-white rounded-md hover:bg-gray-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}


export default Contact