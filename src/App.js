import React from 'react';
import { AiOutlineSend, AiOutlineMessage } from 'react-icons/ai';
import ChatWindow from './components/chat';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <ChatWindow />
    // <div classNameName="container bg-success">
    //   <div className="d-flex justify-content-center">
    //     <div className="fixed-top w-100 bg-light">
    //       <form className="form-inline my-2 my-lg-0 px-2">
    //         <div className="input-group">
    //           <input
    //             className="form-control"
    //             type="search"
    //             placeholder="Book Name"
    //             aria-label="Search"
    //           />
    //           <button className="btn btn-outline-success pb-2" type="submit">
    //             <AiOutlineMessage />
    //           </button>
    //         </div>
    //       </form>
    //     </div>
    //   </div>
    // </div>
  );
}
