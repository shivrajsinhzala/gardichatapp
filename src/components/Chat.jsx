// import React, { useContext } from "react";
// import Cam from "../img/cam.png";
// import Add from "../img/add.png";
// import More from "../img/more.png";
// import Back from "../img/back.png";
// import Messages from "./Messages";
// import Input from "./Input";
// import { ChatContext } from "../context/ChatContext";

// const Chat = () => {
//   const { data } = useContext(ChatContext);

//   return (
//     <div className="chat">
//       {true ? (
//         <>
//           <div className="chatInfo">
//             <img src={Back} alt="" className="back" />
//             <span className="Name">{data.user?.displayName}</span>
//             <div className="chatIcons">
//               <img src={Cam} alt="" />
//               <img src={Add} alt="" />
//               <img src={More} alt="" />
//             </div>
//           </div>
//           <Messages />
//           <Input />
//         </>
//       ) : (
//         <>
//           <h1>
//             <center>Click on user to Chat</center>
//           </h1>
//         </>
//       )}
//     </div>
//   );
// };

// export default Chat;

// import React, { useContext } from "react";
// import Cam from "../img/cam.png";
// import Add from "../img/add.png";
// import More from "../img/more.png";
// import Back from "../img/back.png";
// import Messages from "./Messages";
// import Input from "./Input";
// import { ChatContext } from "../context/ChatContext";

// const Chat = () => {
//   const { data, dispatch } = useContext(ChatContext);

//   // Function to handle back button click
//   const handleBack = () => {
//     // Dispatch action to clear chat and user data
//     dispatch({ type: "CLEAR_CHAT" });
//   };

//   return (
//     <div className="chat">
//       {data.user ? (
//         <>
//           <div className="chatInfo">
//             <img
//               src={Back}
//               alt=""
//               className="back"
//               onClick={handleBack} // Call handleBack function on click
//             />
//             <span className="Name">{data.user.displayName}</span>
//             <div className="chatIcons">
//               <img src={Cam} alt="" />
//               <img src={Add} alt="" />
//               <img src={More} alt="" />
//             </div>
//           </div>
//           <Messages />
//           <Input />
//         </>
//       ) : (
//         <h1>
//           <center>Click on user to Chat</center>
//         </h1>
//       )}
//     </div>
//   );
// };

// export default Chat;

import React, { useContext } from "react";
import Cam from "../img/cam.png";
import Add from "../img/add.png";
import More from "../img/more.png";
import Back from "../img/back.png";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const { data, dispatch } = useContext(ChatContext);

  // Function to handle back button click
  const handleBack = () => {
    <Messages />;
    dispatch({ type: "CLEAR_CHAT" });
  };

  return (
    <div className="chat">
      {data.chatId == "null" ? (
        <>
          <center className="cntr">
            <h1 className="c">Select a user to chat</h1>
          </center>
        </>
      ) : (
        <>
          <div className="chatInfo">
            {data.chatId !== "null" ? (
              <img
                src={Back}
                alt=""
                className="back"
                onClick={handleBack} // Call handleBack function on click
              />
            ) : (
              <></>
            )}
            <span className="Name">{data.user.displayName}</span>
            <div className="chatIcons">
              <img src={Cam} alt="" />
              <img src={Add} alt="" />
              <img src={More} alt="" />
            </div>
          </div>
          <Messages />
          <Input />
        </>
      )}
    </div>
  );
};

export default Chat;
