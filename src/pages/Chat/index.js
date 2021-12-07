import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChatEngine, getOrCreateChat } from "react-chat-engine";
import { auth } from "firebase";
import { selectUser } from "../../store/user/selectors";
import { useSelector } from "react-redux";
import { selectPetWithUser } from "../../store/pet/selectors";
//import { useAuth } from "../../contexts/AuthContext";
import axios from "axios";

const ChatPage = () => {
  const navigate = useNavigate();
  //  const { user } = useAuth();
  const user = useSelector(selectUser);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const matchedUser = useSelector(selectPetWithUser);

  const handleLogout = async () => {
    await auth.signOut();
    navigate("/");
  };
  console.log("USER", user);
  console.log("matched user", matchedUser);
  const getFile = async (url) => {
    const response = await fetch(url);
    const data = await response.blob();

    return new File([data], "userFoto.jpg", { type: "image/jpg" });
  };

  function createDirectChat(creds) {
    getOrCreateChat(
      creds,
      { is_direct_chat: true, usernames: [username] },
      () => setUsername("")
    );
  }

  function renderChatForm(creds) {
    console.log(creds);
    return (
      <div>
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={() => createDirectChat(creds)}>Create</button>
      </div>
    );
  }
  if (!user.id || loading) return "loading...";
  console.log("the user is not null", user);
  return (
    <div className="chats-page">
      <div className="nav-bar">
        <div className="logo-tab">PlayMate</div>
        {/* <div className="logout-tab" onClick={handleLogout}>
          Logout
        </div> */}
      </div>
      <ChatEngine
        height="calc(100vh -  66px)"
        projectID={process.env.REACT_APP_CHAT_ENGINE_ID}
        userName={user.email}
        userSecret={"123"}
        renderNewChatForm={(creds) => renderChatForm(creds)}
        onConnect={(some) => {
          console.log("connected", some);
        }}
        // renderNewChatForm={(creds) =>
      />
    </div>
  );
};

export default ChatPage;
