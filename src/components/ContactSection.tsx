import React from "react";

const ContactSection: React.FC = () => {
  return (
    <section className="px-6 py-20 bg-yellow-100">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-bold text-gray-800">
          Me no friend :( <span className="text-yellow-500"> Be frend with me XD</span>
        </h2>
        <p className="text-gray-600 text-lg">
          Feel free to reach out to me,  have a question, 
          or just want to connect.
        </p>
        <div className="space-x-4">
            <a
            href="mailto:youremail@example.com"
            className="px-6 py-3 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-100 hover:text-yellow-500 transition"
            >
            Contact Me
            </a>
          <a
            href="#portfolio"
            className="px-6 py-3 border border-yellow-500 text-yellow-500 rounded-lg shadow-md hover:bg-yellow-500 hover:text-white transition"
          >
            View Portfolio
          </a>
        </div>
        <div className="flex justify-center space-x-6 mt-6">
          {/* Icon links (social media) */}
          <a
            href="https://www.linkedin.com/in/muhammad-faiz-habibi-0512a32b1/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-500 hover:text-yellow-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.783-1.75-1.75s.784-1.75 1.75-1.75c.965 0 1.75.784 1.75 1.75s-.785 1.75-1.75 1.75zm13.5 11.268h-3v-4.844c0-1.158-.021-2.646-1.613-2.646-1.614 0-1.862 1.261-1.862 2.566v4.924h-3v-10h2.881v1.377h.042c.402-.762 1.384-1.563 2.849-1.563 3.045 0 3.608 2.005 3.608 4.614v5.572z" />
            </svg>
          </a>
          <a
            href="https://github.com/FaizHabibi12"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-500 hover:text-yellow-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.744.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.123-.303-.535-1.527.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.005-.404 1.022.005 2.048.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.649.241 2.873.118 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.803 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.218.694.825.576 4.765-1.587 8.2-6.084 8.2-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>  
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
