import email_icon from "../../assets/images/icons/email.png";
import call_icon from "../../assets/images/icons/call.png";

export default function Contact() {
  return (
    <div className="p-8 mb-20">
      <h2 className="text-4xl text-center text-light-blue-900 mb-8">Contact</h2>
      <div className="bg-gray-50 h-[450px] w-5/6 p-4 mx-auto rounded-lg shadow-lg flex items-stretch gap-10">
        <div className="flex-1">
          <form className="h-full flex flex-col gap-4">
            <input
              type="text"
              name="name"
              id="name-input"
              placeholder="Name"
              className="bg-gray-300 rounded-md p-3 text-gray-700 text-xl outline-none placeholder:text-white placeholder:text-lg"
            />
            <input
              type="email"
              name="email"
              id="email-input"
              placeholder="Email"
              className="bg-gray-300 rounded-md p-3 text-gray-700 text-xl outline-none placeholder:text-white placeholder:text-lg"
            />
            <input
              type="text"
              name="subject"
              id="subject-input"
              placeholder="Subject"
              className="bg-gray-300 rounded-md p-3 text-gray-700 text-xl outline-none placeholder:text-white placeholder:text-lg"
            />
            <textarea
              name="message"
              id="message-input"
              placeholder="Message"
              rows={2}
              className="bg-gray-300 rounded-md p-3 grow text-gray-700 text-xl outline-none placeholder:text-white placeholder:text-lg"
            />
            <input
              type="button"
              value="Send Message"
              className="bg-pointer-color rounded-md p-3 mt-auto text-white text-xl outline-none cursor-pointer hover:bg-cyan-900 active:scale-90 transition-all duration-200 ease-in-out"
            />
          </form>
        </div>

        <div className="relative flex-1 px-8 py-10 bg-pointer-color rounded-lg text-white">
          <h2 className="text-4xl font-light mb-10">Contact Information</h2>
          <div className="flex items-center gap-5 mb-5 ml-3">
            <img src={email_icon} alt="email-icon" />
            <h5>info@shoa.com</h5>
          </div>
          <div className="flex items-center gap-5 mb-10 ml-3">
            <img src={call_icon} alt="email-icon" />
            <div>
              <h5>+251-906-500000</h5>
              <h5>+251-906-500000</h5>
            </div>
          </div>
          <h2 className="text-4xl font-light mb-6">Working Hours</h2>
          <ul className="list-disc ml-6 text-xl">
            <li>Mon - Fri 6am to 8pm</li>
            <li>Sat - Sun 9am to 2pm</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
