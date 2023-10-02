import List from "@mui/material/List";
import ChatListItem from "./chat-list-item/ChatListItem";
import { Divider, Stack } from "@mui/material";
import ChatListHeader from "./chat-list-header/ChatListHeader";

const ChatList = () => {
  return (
    <Stack>
      <ChatListHeader />
      <Divider />
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
          maxHeight: "80vh",
          overflow: "auto",
        }}
      >
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
      </List>
    </Stack>
  );
};

export default ChatList;
