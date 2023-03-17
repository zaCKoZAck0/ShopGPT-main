import React from 'react';
import { useState } from 'react';
import askQuery from '../api/openAi';

const LeftChat = ({ message, time, user }) => {
  return (
    <li className="d-flex justify-content-between mb-4">
      <img
        src="https://www.gypsumtools.com/blog/wp-content/uploads/2015/07/Shopping_Cart_icon-300x300.jpg"
        alt="avatar"
        className="rounded-circle d-flex align-self-start me-3 shadow-1-strong"
        width={60}
      />
      <div className="card">
        <div className="card-header d-flex justify-content-between p-3">
          <p className="fw-bold mb-0">{user}</p>
          <p className="text-muted small mb-0">
            <i className="far fa-clock" /> {time}
          </p>
        </div>
        <div className="card-body">
          <p className="mb-0">{message}</p>
        </div>
      </div>
    </li>
  );
};

const RightChat = ({ message, time, user }) => {
  return (
    <li className="d-flex justify-content-between mb-4">
      <div className="card w-100">
        <div className="card-header d-flex justify-content-between p-3">
          <p className="fw-bold mb-0">{user}</p>
          <p className="text-muted small mb-0">
            <i className="far fa-clock" /> {time}
          </p>
        </div>
        <div className="card-body">
          <p className="mb-0">{message}</p>
        </div>
      </div>
      <img
        src="https://thumbs.dreamstime.com/b/default-avatar-profile-flat-icon-vector-contact-symbol-illustration-184752213.jpg"
        alt="avatar"
        className="rounded-circle d-flex align-self-start ms-3 shadow-1-strong"
        width={60}
      />
    </li>
  );
};
const ChatWindow = () => {
  const [query, setQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      user: 'system',
      message:
        'Hi, I am shopGPT your shopping assistant, How can I help you Today?',
    },
  ]);

  const askGpt = async () => {
    let date = new Date();
    const NewMessage = messages;
    NewMessage.push({ user: 'user', message: query, time: date.toLocaleTimeString() })
    setIsTyping(true);
    setQuery('')
    const res = await askQuery(query);
    console.log(res);
    setIsTyping(false);
    date = new Date();
    NewMessage.push({ user: 'system', message: res, time: date.toLocaleTimeString() })
    setMessages(NewMessage);
  };

  return (
    <section>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6 col-lg-7 col-xl-8">
            <ul className="list-unstyled pb-5">
              {messages.map((message, idx) => {
                return message.user === 'user' ? (
                  <RightChat
                    key={idx}
                    user={'You'}
                    message={message.message}
                    time={message.time}
                  />
                ) : (
                  <LeftChat
                    key={idx}
                    user={'ShopGPT'}
                    message={message.message}
                    time={message.time}
                  />
                );
              })}
              <li className="mb-3 fixed-bottom">
                <div class="form-floating px-2">
                  <textarea
                    onChange={(e) => setQuery(e.target.value)}
                    value={query}
                    class="form-control"
                    placeholder="Leave a comment here"
                    id="floatingTextarea"
                  ></textarea>
                  <label for="floatingTextarea">Query</label>
                </div>
                <div className="d-flex justify-content-center mt-2">
                  <button
                    onClick={() => askGpt()}
                    type="button"
                    disabled={isTyping}
                    className="btn btn-success btn-rounded float-end"
                  >
                    {isTyping ? 'Typing...' : 'Ask ShopGPT'}
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatWindow;
