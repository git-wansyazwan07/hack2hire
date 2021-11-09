import React from "react";
import Chat, { Bubble, useMessages } from "@chatui/core";
import "@chatui/core/dist/index.css";
import faker from "faker";
// import

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
      <div style={{ color: "primary" }}>
        <h1>CHAT UI APP</h1>
      </div>
      <Chat
        // navbar={{ title: "CHAT UI APP" }}
        messages={messages}
        renderMessageContent={renderMessageContent}
        onSend={handleSend}
      />
    </React.Fragment>
  );
}
