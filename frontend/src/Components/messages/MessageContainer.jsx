import React, { useEffect } from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import Logo from "../../assets/chaton2.png";
import useConversation from "../../zustand/useConversation";
import { useAuthContext } from "../../context/AuthContext";

function MessageContainer() {
  const { selectedConversation, setSelectedConversation } = useConversation();
  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);
  return (
    <div className="md:w-full flex flex-col">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="bg-purple-700 px-4 py-2 mb-2">
            <span className="label-text">To:</span>{" "}
            <span className="text-gray-900 font-bold">
              {selectedConversation.fullName}
            </span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
}

const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <img className=" w-64 h-64 pb-4" src={Logo} alt="chaton-logo" />
      <p className="text-gray-500 text-lg">Welcome {authUser.fullName}!</p>
      <p className="text-gray-500 text-lg">Select a chat to start messaging</p>
    </div>
  );
};

export default MessageContainer;
