import React from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import Logo from "../../assets/chaton2.png";

function MessageContainer() {
  const noChatSelected = true;
  return (
    <div className="md:w-full flex flex-col">
      {noChatSelected ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="bg-purple-700 px-4 py-2 mb-2">
            <span className="label-text">To:</span>{" "}
            <span className="text-gray-900 font-bold">John doe</span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
}

const NoChatSelected = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <img className=" w-64 h-64 pb-4" src={Logo} alt="chaton-logo" />
      <p className="text-gray-500 text-lg">Welcome Artemis!</p>
      <p className="text-gray-500 text-lg">Select a chat to start messaging</p>
    </div>
  );
};

export default MessageContainer;
