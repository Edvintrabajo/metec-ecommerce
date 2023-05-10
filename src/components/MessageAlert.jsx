import React from "react";

function MessageAlert() {
  return (
    // <div
    //   id="message-container"
    //   className="fixed top-0 left-0 hidden w-full h-screen items-center justify-center bg-b-rgba-4 text-white"
    // ></div>
    <div id="message-container" className="alert alert-info shadow-lg w-[600px] mt-7 hidden">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <span>New software update available.</span>
      </div>
    </div>
  );
}

export default MessageAlert;
