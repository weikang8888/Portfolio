import React, { useState } from "react";

const ContactData = {
  btntext: "submit now",
  btnurl: "#",
  ContactList: [
    {
      icon: '<svg class="w-10 h-10 fill-[#ff4a54]"  viewBox="0 0 48 48"  xmlns=http://www.w3.org/2000/svg><path d="M38 46c4.18 0 7-2.94 7.83-8.08a5 5 0 00-1-3.77l-.16-.15-6.07-4.8a5 5 0 00-6.29.24l-2.62 2.48C24.23 30.68 16.39 23.6 16 18.38l2.59-2.73a5 5 0 00.19-6.27L14 3.33a.73.73 0 00-.18-.17 5 5 0 00-3.76-1C4.94 3 2 5.82 2 10a36 36 0 0036 36zM10.38 4.15a3.11 3.11 0 01.43 0 3 3 0 011.72.55l4.67 5.9a3 3 0 01-.09 3.72l-2.84 3A1 1 0 0014 18c0 6.44 9.29 14.9 15.84 16a1 1 0 00.85-.26l3-2.81a3 3 0 013.73-.13l5.95 4.68a2.92 2.92 0 01.52 2.15C43.4 40.53 42 44 38 44A34 34 0 014 10c0-4 3.47-5.4 6.38-5.85z"/></svg>',
      title: "Phone:",
      info: "+60 11 10810323",
    },
    {
      icon: '<svg class="w-10 h-10 fill-[#ff4a54]"  viewBox="0 0 125 125"  xmlns=http://www.w3.org/2000/svg><path d="M105.182 97.82H19.818A10.477 10.477 0 019.353 87.354v-52.72a10.477 10.477 0 0110.465-10.466h85.364a10.477 10.477 0 0110.465 10.466v52.72a10.477 10.477 0 01-10.465 10.466zM19.818 28.168a6.472 6.472 0 00-6.465 6.466v52.72a6.472 6.472 0 006.465 6.466h85.364a6.472 6.472 0 006.465-6.466v-52.72a6.472 6.472 0 00-6.465-6.466z"/><path d="M62.5 72.764a2 2 0 01-1.324-.5l-48.2-42.548 2.647-3L62.5 68.1l46.879-41.379 2.647 3-48.2 42.548a1.994 1.994 0 01-1.326.495z"/><path d="M11.888 91.54l32.38-36.895 3.009 2.64-32.38 36.894zm65.937-34.293l3.008-2.64L113.214 91.5l-3.008 2.64z"/></svg>',
      title: "Email:",
      info: "weikang8805@hotmail.com",
    },
    {
      icon: '<svg class="w-10 h-10 fill-[#ff4a54]"viewBox="0 0 511.999 511.999"x=0px xmlns=http://www.w3.org/2000/svg xmlSpace=preserve y=0px><path d="M256.98 40.005c-5.53-.04-10.04 4.41-10.08 9.93-.04 5.52 4.4 10.03 9.93 10.07 5.52.04 10.03-4.4 10.07-9.92.04-5.52-4.4-10.03-9.92-10.08zM256.525 100.004c-38.611-.274-70.232 30.875-70.524 69.474-.291 38.597 30.875 70.233 69.474 70.524l.536.002c38.353 0 69.698-31.056 69.988-69.476.291-38.595-30.874-70.233-69.474-70.524zm-.516 120.001l-.384-.002c-27.571-.208-49.833-22.806-49.625-50.375.207-27.445 22.595-49.627 49.991-49.627l.384.002c27.571.208 49.833 22.806 49.625 50.375-.208 27.445-22.595 49.627-49.991 49.627zM299.631 47.589c-5.202-1.846-10.921.879-12.767 6.085-1.845 5.206.88 10.921 6.085 12.767 44.047 15.611 73.402 57.562 73.05 104.389-.041 5.522 4.402 10.033 9.925 10.075h.077c5.486 0 9.956-4.428 9.998-9.925.416-55.347-34.293-104.934-86.368-123.391z"/><path d="M317.357 376.442c66.513-85.615 108.08-130.26 108.641-205.164C426.702 77.035 350.22 0 255.984 0 162.848 0 86.71 75.428 86.002 168.728c-.572 76.935 41.767 121.519 108.739 207.7C128.116 386.384 86.002 411.401 86.002 442c0 20.497 18.946 38.89 53.349 51.79 31.313 11.742 72.74 18.209 116.649 18.209s85.336-6.467 116.649-18.209c34.403-12.901 53.349-31.294 53.349-51.791 0-30.582-42.075-55.593-108.641-65.557zM106.001 168.879C106.625 86.55 173.8 20 255.986 20c83.159 0 150.633 67.988 150.013 151.129-.532 71.134-44.614 114.971-114.991 206.714-12.553 16.356-24.081 31.82-34.993 46.947-10.88-15.136-22.178-30.323-34.919-46.953-73.286-95.584-115.637-136.108-115.095-208.958zM256 492c-85.851 0-149.999-26.397-149.999-50 0-17.504 38.348-39.616 102.826-47.273 14.253 18.701 26.749 35.691 39.005 53.043a9.998 9.998 0 008.159 4.23H256a10 10 0 008.158-4.217c12.14-17.126 24.978-34.535 39.109-53.045 64.418 7.665 102.732 29.77 102.732 47.263C405.998 465.603 341.851 492 256 492z"/></svg>',
      title: "Location:",
      info: "Lorong Melor 3 Kayu Ara",
    },
    {
      icon: '<svg class="w-10 h-10 fill-[#ff4a54]"  viewBox="0 0 24 24"  xmlns=http://www.w3.org/2000/svg><path clipRule=evenodd d="M9.82.198C10.526.068 11.255 0 12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12a12.05 12.05 0 01-2.18-.198 1 1 0 11.36-1.967c.59.108 1.198.165 1.82.165 5.523 0 10-4.477 10-10S17.523 2 12 2c-.622 0-1.23.057-1.82.165A1 1 0 119.82.198zM7.365 1.97A1 1 0 017 3.337a10.056 10.056 0 00-3.384 3.21A1 1 0 111.94 5.453 12.056 12.056 0 016 1.606a1 1 0 011.367.365zm10.32 6.302a1 1 0 01.04 1.414l-6.432 6.806a1.601 1.601 0 01-2.338 0l-2.683-2.838a1 1 0 011.454-1.374l2.398 2.537 6.148-6.505a1 1 0 011.414-.04zM10.41 15.12zM1.512 8.526a1 1 0 01.747 1.2 10.065 10.065 0 00.001 4.548 1 1 0 01-1.949.452 12.073 12.073 0 010-5.452 1 1 0 011.2-.748zm.72 8.636a1 1 0 011.385.292A10.056 10.056 0 007 20.663a1 1 0 11-1.002 1.731 12.056 12.056 0 01-4.058-3.848 1 1 0 01.292-1.384z"fillRule=evenodd /></svg>',
      title: "Working:",
      info: "Mon - Friday, 9am - 6pm",
    },
  ],
};
const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("Message sent successfully!");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus(data.message || "Error sending message");
      }
    } catch (err) {
      setStatus("Error sending message");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div
        className="proloy-map-wrape"
        data-aos="fade-up"
        data-aos-duration="500"
      >
        <div className="container">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12">
              <iframe
                className="w-full h-[400px] rounded-[20px] -z-[1]"
                id="proloy-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8199999999997!2d101.686855!3d3.139003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc49c701efeae7%3A0xf4d98e5b2f5c778d!2sKuala%20Lumpur%2C%20Federal%20Territory%20of%20Kuala%20Lumpur%2C%20Malaysia!5e0!3m2!1sen!2smy!4v1683722024828!5m2!1sen!2smy"
                allowFullScreen={true}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div id="contact" className="proloy-contant-info-wraper">
        <div className="container">
          <div className="grid grid-cols-12 gap-6">
            <div
              className="xl:col-span-5 lg:col-span-12 md:col-span-12 sm:col-span-12"
              data-aos="fade-right"
              data-aos-duration="200"
            >
              <ul className="contant-info-content-wrape mt-[30px]">
                {ContactData.ContactList.map((item, i) => (
                  <li
                    className="flex items-center magic-hover magic-hover__square p-[15px] m-0 border-[1px] border-solid border-[#e1e1e1] transition-all duration-[0.3s] gap-3"
                    key={i}
                  >
                    <div className="contant-info-content-icon">
                      <span
                        className="w-[70px] h-[70px] inline-flex items-center bg-[#f7faff] justify-center"
                        dangerouslySetInnerHTML={{ __html: item.icon }}
                      ></span>
                    </div>
                    <div className="flex items-center w-full">
                      <div className="about-resume-title text-xl capitalize sm:w-[50%] w-[30%] flex-shrink-0">
                        {item.title}
                      </div>
                      <div className="about-resume-info text-xl flex-1 min-w-0 break-all">
                        {item.info}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="xl:col-span-7 lg:col-span-12 md:col-span-12 sm:col-span-12"
              data-aos="fade-right"
              data-aos-duration="400"
            >
              <div className="proloy-contact-form-area bg-[#f7faff] rounded-[10px] py-[70px] px-[50px] shadow-[0px_15px_30px_0px_rgba(0,0,0,0.14)] xl:-mt-[100px] lg:mt-[30px] md:mt-[30px] sm:mt-[30px]">
                <form
                  className="proloy-contact-form"
                  id="ajax-contact"
                  onSubmit={handleSubmit}
                >
                  <div className="container">
                    <div className="grid grid-cols-12 gap-6">
                      <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12">
                        <input
                          className="form-control transition-all duration-[0.3s] shadow-none h-[50px] text-[#777777] bg-white border-[1px] border-solid border-[#e7eaf0] py-[5px] px-5 w-full focus:shadow-[0px_10px_14px_0px_rgba(12,0,46,0.06)] focus:border-[1px] focus:border-solid focus:border-[#ff60a3] focus:w-full"
                          type="text"
                          name="name"
                          placeholder="Name *"
                          value={form.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12">
                        <input
                          className="form-control transition-all duration-[0.3s] shadow-none h-[50px] text-[#777777] bg-white border-[1px] border-solid border-[#e7eaf0] py-[5px] px-5 w-full focus:shadow-[0px_10px_14px_0px_rgba(12,0,46,0.06)] focus:border-[1px] focus:border-solid focus:border-[#ff60a3] focus:w-full"
                          type="email"
                          name="email"
                          placeholder="E-mail *"
                          value={form.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="xl:col-span-12 lg:col-span-12 md:col-span-12 sm:col-span-12">
                        <input
                          className="form-control transition-all duration-[0.3s] shadow-none h-[50px] text-[#777777] bg-white border-[1px] border-solid border-[#e7eaf0] py-[5px] px-5 w-full focus:shadow-[0px_10px_14px_0px_rgba(12,0,46,0.06)] focus:border-[1px] focus:border-solid focus:border-[#ff60a3] focus:w-full"
                          type="text"
                          name="subject"
                          placeholder="Subject"
                          value={form.subject}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="xl:col-span-12 lg:col-span-12 md:col-span-12 sm:col-span-12">
                        <textarea
                          className="form-control transition-all duration-[0.3s] shadow-none h-[133px] text-[#777777] mb-[30px] bg-white border-[1px] border-solid border-[#e7eaf0] py-[15px] px-5 w-full focus:shadow-[0px_10px_14px_0px_rgba(12,0,46,0.06)] focus:border-[1px] focus:border-solid focus:border-[#ff60a3] focus:w-full"
                          name="message"
                          cols="30"
                          rows="8"
                          placeholder="Message"
                          value={form.message}
                          onChange={handleChange}
                          required
                        ></textarea>
                        <button
                          className="btn-3 uppercase"
                          type="submit"
                          disabled={isLoading}
                        >
                          {isLoading ? (
                            <>
                              <span className="inline-flex items-center">
                                <svg
                                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                >
                                  <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                  ></circle>
                                  <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                  ></path>
                                </svg>
                                Sending...
                              </span>
                            </>
                          ) : (
                            <>
                              submit now{" "}
                              <span>
                                <svg
                                  data-name="Layer 1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 128 95.91"
                                >
                                  <path
                                    d="M259.88,468.09l-52,45.93-5.1-5.52,43.33-38.41H131.88v-8H246.09l-43.25-38.36,5-5.62,52.06,46Z"
                                    transform="translate(-131.88 -418.11)"
                                  ></path>
                                </svg>
                              </span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                    <p className={`form-message float-left mt-[15px] text-[15px] font-medium ${
                      status.includes('successfully') ? 'text-green-600' :
                      status.includes('Error') || status.includes('error') ? 'text-red-600' :
                      status.includes('Sending') ? 'text-blue-600' :
                      'text-gray-600'
                    }`}>
                      {status}
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
