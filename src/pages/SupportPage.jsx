import { useState } from "react";
import axios from "axios";

export default function SupportPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errors, setErrors] = useState({});

  function validateForm() {
    const errorsDictionary = {};

    if (fullName.length === 0) {
      errorsDictionary.fullName = "Введите свое имя";
    }

    if (email.length === 0) {
      errorsDictionary.email = "Введите свою электронную почту";
    }

    if (text.length === 0) {
      errorsDictionary.text = "Введите свое сообщение";
    }

    return errorsDictionary;
  }

  async function sendMail(e) {
    e.preventDefault();

    const formErrors = validateForm();

    if (Object.values(formErrors).length !== 0) {
      setErrors(formErrors);
      return;
    }

    try {
      setErrors({});
      setIsLoading(true);

      const { data } = await axios.post("http://localhost:5555/send", {
        fullName,
        email,
        text,
      });

      setSuccessMessage(data.message);

      setFullName("");
      setEmail("");
      setText("");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section id="support">
      <h2 className="support-title">Служба поддержки</h2>
      <p className="support-text">
        Если у вас возникли трудности по работе сайта, сложности в оплате или есть вопрос, вы можете
        обратиться в службу поддержки, мы обязательно вам поможем.
      </p>
      <form className="support-form" onSubmit={sendMail}>
        <div className="support-form__container">
          <div id="name-input" className="support-form__block">
            <label className="support-form__label">Имя</label>
            <input
              type="text"
              name="name"
              className="support-form__input"
              placeholder="Введите ваше имя"
              value={fullName}
              onChange={event => setFullName(event.target.value)}
            />
            <span className="error-message">{errors.fullName}</span>
          </div>
          <div id="email-input" className="support-form__block">
            <label className="support-form__label">E-mail</label>
            <input
              type="email"
              name="email"
              className="support-form__input"
              placeholder="Введите вашу почту"
              value={email}
              onChange={event => setEmail(event.target.value)}
            />
            <span className="error-message">{errors.email}</span>
          </div>
          <div id="message-input" className="support-form__block">
            <label className="support-form__label">Сообщение</label>
            <textarea
              className="support-form__input"
              name="message"
              placeholder="Расскажите нам о возникшем вопросе"
              value={text}
              onChange={event => setText(event.target.value)}
            ></textarea>
            <span className="error-message">{errors.text}</span>
          </div>
        </div>
        <div className="submit-btn__container">
          <button type="submit" className="support-form__submit" disabled={isLoading}>
            {isLoading ? "Отправка..." : "Отправить"}
          </button>

          {successMessage && <div className="submit-btn__message">{successMessage}</div>}
        </div>
      </form>
    </section>
  );
}
