import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChatEngine, getOrCreateChat } from "react-chat-engine";
import { auth } from "firebase";
import { selectUser } from "../../store/user/selectors";
import { useSelector } from "react-redux";
//import { useAuth } from "../../contexts/AuthContext";
import axios from "axios";

const ChatPage = () => {
  const navigate = useNavigate();
  //  const { user } = useAuth();
  const user = useSelector(selectUser);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const matchedUser = "martinaplaceres1@gmail.com";

  const handleLogout = async () => {
    await auth.signOut();
    navigate("/");
  };

  const getFile = async (url) => {
    const response = await fetch(url);
    const data = await response.blob();

    return new File([data], "userFoto.jpg", { type: "image/jpg" });
  };
  // useEffect(() => {
  //   if (!user) {
  //     navigate("/");
  //     return;
  //   }
  //   axios
  //     .get("https://api.chatengine.io/users/me", {
  //       headers: {
  //         "project-id": process.env.REACT_APP_CHAT_ENGINE_ID,
  //         "user-name": user.email,
  //         "user-secret": user.password,
  //       },
  //     })
  //     .then(() => {
  //       setLoading(false);
  //     })
  //     .catch(() => {
  //       let formdata = new FormData();
  //       formdata.append("email", user.email);
  //       formdata.append("username", user.email);
  //       formdata.append("secret", "123");
  //       getFile(user.imageUrl).then((avatar) => {
  //         formdata.append("avatar", avatar, avatar.name);
  //         axios
  //           .post("https://api.chatengine.io/users", formdata, {
  //             headers: {
  //               "private-key": process.env.REACT_APP_CHAT_ENGINE_KEY,
  //             },
  //           })
  //           .then(() => setLoading(false))
  //           .catch((error) => console.log(error));
  //       });
  //     });
  // }, [user, navigate]);
  function createDirectChat(creds) {
    getOrCreateChat(
      creds,
      { is_direct_chat: true, usernames: [username] },
      () => setUsername("")
    );
  }

  function renderChatForm(creds) {
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

  if (!user || loading) return "loading...";
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
        userSecret={123}
        renderNewChatForm={(creds) =>
          getOrCreateChat(
            creds,
            { is_direct_chat: true, usernames: [{ matchedUser }] },
            () => setUsername("")
          )
        }
      />
    </div>
  );
};

export default ChatPage;
