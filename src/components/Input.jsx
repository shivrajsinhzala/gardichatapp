import React, { useContext, useState, useRef } from "react";
import Img from "../img/img.png";
import Smile from "../img/smile.png";
// import Attach from "../img/attach.png";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import {
  arrayUnion,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../firebase";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import EmojiPicker from "emoji-picker-react";

const Input = () => {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);
  const [emoji, setEmoji] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  const inputRef = useRef(null);

  // const [dispEmoji, setDispEmoji] = useState(false);

  const handleEmojiClick = (emojiObject, event) => {
    setText((prevText) =>
      prevText ? prevText + emojiObject.emoji : emojiObject.emoji
    );
    console.log("emoji added", emojiObject.emoji);
    inputRef.current.focus();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
      setImg(null);
      console.log("enter clicked");
      setText("");
    }
    // console.log("key pressed");
  };

  inputRef.current?.focus();
  const handleSend = async () => {
    setEmoji(false);
    console.log("message sent");
    setText(text.trim()); // Trim extra spaces

    if (text === "" && !img) {
      // If text is empty and no image is selected, do not proceed
      return;
    }

    if (img) {
      const storageRef = ref(storage, uuid());

      const uploadTask = uploadBytesResumable(storageRef, img);

      uploadTask.on(
        (error) => {
          //TODO:Handle Error
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(db, "chats", data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: currentUser.uid,
                date: Timestamp.now(),
                img: downloadURL,
              }),
            });
          });
        }
      );
    } else {
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now(),
        }),
      });
    }

    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [data.chatId + ".lastMessage"]: {
        text: text.trim(), // Trim extra spaces
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatId + ".lastMessage"]: {
        text: text.trim(), // Trim extra spaces
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    // Clear input fields
  };

  return (
    <>
      <div className="input">
        {emoji ? (
          <>
            <div className="emojiPicker">
              <EmojiPicker
                height={300}
                width={662}
                previewConfig={{ showPreview: false }}
                searchDisabled={true}
                onEmojiClick={handleEmojiClick}
              />
            </div>
          </>
        ) : (
          <></>
        )}
        <img
          className="smile"
          src={Smile}
          onClick={() => {
            console.log("clicked");
            setEmoji(!emoji);
          }}
          alt="emoji"
        />
        <input
          type="text"
          placeholder="Type something..."
          onChange={(e) => setText(e.target.value)}
          value={text}
          ref={inputRef}
          onKeyUp={handleKeyPress}
        />
        <div className="send">
          {/* <img src={Attach} alt="" /> */}
          <input
            type="file"
            style={{ display: "none" }}
            id="file"
            onChange={(e) => setImg(e.target.files[0])}
          />
          <label htmlFor="file">
            <img src={Img} alt="" />
          </label>
          <button onClick={handleSend}>Send</button>
        </div>
      </div>
    </>
  );
};
export default Input;
// const handleKeyPress = (e) => {
//   if (e.key === "Enter") {
//     handleSend();
//   }
// };

// return (
//   <div className="input">
//     <input
//       type="text"
//       placeholder="Type something..."
//       onChange={(e) => setText(e.target.value)}
//       onKeyPress={handleKeyPress}
//       value={text}
//     />
//     {/* Rest of the code */}
//   </div>
// );
