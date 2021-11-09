import React from "react";
import Chat, { Bubble, useMessages } from "@chatui/core";
import "@chatui/core/dist/index.css";
import faker from "faker";
import Typography from "@mui/material/Typography";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";
import Emoji from "./emoji";

export default function App() {
  const { messages, appendMsg, setTyping } = useMessages([]);
  const randomReply =
    "I Love " +
    faker.commerce.productMaterial() +
    " " +
    faker.commerce.productName() +
    "!";

  function handleSend(type, val) {
    if (type === "text" && val.trim()) {
      appendMsg({
        type: "text",
        content: { text: val },
        position: "right",
      });

      setTyping(true);

      setTimeout(() => {
        appendMsg({
          type: "text",
          content: { text: randomReply },
        });
      }, 1000);
    }
  } //function end

  function renderMessageContent(msg) {
    const { content } = msg;
    return <Bubble content={content.text} />;
  }

  return (
    <React.Fragment>
      <Brightness7Icon />
      <div style={{ color: "white ", backgroundColor: "#554f58" }}>
        <Typography variant="h4" fontWeight="700" textAlign="center">
          CHAT UI APP
        </Typography>
      </div>

      <Chat
        messages={messages}
        renderMessageContent={renderMessageContent}
        onSend={handleSend}
      />
      <div>{Emoji()}</div>
    </React.Fragment>
  );
}
