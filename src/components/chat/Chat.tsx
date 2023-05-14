import './Chat.scss';

import {
    addDoc, collection, DocumentData, DocumentReference, onSnapshot, orderBy, query,
    QueryDocumentSnapshot, serverTimestamp, Timestamp
} from 'firebase/firestore';
import React, { useEffect, useState } from 'react';

import { AddCircleOutline, CardGiftcardOutlined, EmojiEmotionsOutlined } from '@mui/icons-material';
import GifIcon from '@mui/icons-material/Gif';

import { useAppSelector } from '../../app/hooks';
import { db } from '../../firbase';
import useSubCollection from '../../hooks/useSubCollection';
import ChatHeader from './ChatHeader';
import { ChatMessage } from './ChatMessage';

interface Messages {
  timestamp: Timestamp;
  message: string;
  user: {
    uid: string;
    photo: string;
    email: string;
    displayName: string;
  };
}
const Chat = () => {
  const user = useAppSelector((state) => state.user.user);
  const [inputText, setInputText] = useState<string>("");
  const channelId = useAppSelector((state) => state.channel.channelId);
  const channelName = useAppSelector((state) => state.channel.channelName);
  const { subDocuments: messages } = useSubCollection("channels", "messages");
  const sendMessage = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const collectionRef = collection(
      db,
      "channels",
      String(channelId),
      "messages"
    );
    const docRef: DocumentReference<DocumentData> = await addDoc(
      collectionRef,
      {
        timestamp: serverTimestamp(),
        message: inputText,
        user: user,
      }
    );

    setInputText("");
  };
  console.log(inputText);
  return (
    <div className="chat">
      <ChatHeader channelName={channelName} />

      <div className="chatMessages">
        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            message={message.message}
            timestamp={message.timestamp}
            user={message.user}
          />
        ))}
      </div>

      <div className="chatInput">
        <AddCircleOutline fontSize="large" />
        <form>
          <input
            type="text"
            placeholder={`#${channelName}へメッセージを送信`}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInputText(e.target.value)
            }
            value={inputText}
            disabled={Boolean(!channelId)}
          />
          <button
            type="submit"
            className="chatInputButton"
            disabled={Boolean(!channelId)}
            onClick={(e: React.MouseEvent<HTMLElement>) => sendMessage(e)}
          >
            送信
          </button>
        </form>

        <div className="chatInputIcons">
          <CardGiftcardOutlined />
          <GifIcon />
          <EmojiEmotionsOutlined />
        </div>
      </div>
    </div>
  );
};

export default Chat;
