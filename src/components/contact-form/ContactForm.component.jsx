import { React, useState } from "react";
import { sendMessage } from "../../utils/firebase/firebasefirestore.utils";

const defaultFormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const ContactForm = () => {
  const [formState, setFormState] = useState(defaultFormState);
  const { name, email, subject, message } = formState;

  const resetForm = () => {
    setFormState(defaultFormState);
  };

  const handleSubmit = (event) => {
    const handler = async () => {
      event.preventDefault();
      if (name == "" || email == "" || subject == "" || message == "") {
        alert("no empty values allowed");
        return;
      }
      if (email == "/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/") {
        alert("email format is not correct");
        return;
      }
      try {
        await sendMessage(formState);
        resetForm();
      } catch (error) {
        console.error("error during sending message", error);
      }
    };

    handler().catch((error) => {
      console.error(error);
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };
  return (
    <form className="mb-5 p-5" onSubmit={handleSubmit}>
      <div className="mb-5">
        <h3>SEND US A MESSAGE</h3>
      </div>
      <div className="mb-3">
        <label for="name" className="form-label">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          className="form-control"
          onChange={handleChange}
          name="name"
          value={name}
        />
      </div>
      <div className="mb-3">
        <label for="email" className="form-label">
          Your Email
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          onChange={handleChange}
          name="email"
          value={email}
        />
      </div>
      <div className="mb-3">
        <label for="subject" className="form-label">
          Your Subject
        </label>
        <input
          type="text"
          className="form-control"
          id="subject"
          onChange={handleChange}
          name="subject"
          value={subject}
        />
      </div>
      <div className="mb-3">
        <label for="subject" className="form-label">
          Your Message
        </label>
        <textarea
          rows="5"
          className="form-control"
          onChange={handleChange}
          name="message"
          value={message}
        ></textarea>
      </div>
      <button type="submit" className="btn btn-success mt-4 w-100">
        Send
      </button>
    </form>
  );
};

export default ContactForm;
