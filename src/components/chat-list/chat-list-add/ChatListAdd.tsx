import {
  Box,
  Button,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useCreateChat } from "../../../hooks/useCreateChat";
import { UNKNOWN_ERROR_MESSAGE } from "../../../constants/errors";
import router from "../../Routes";

interface ChatListAddProps {
  open: boolean;
  handleClose: () => void;
}

const ChatListAdd = ({ open, handleClose }: ChatListAddProps) => {
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [createChat] = useCreateChat();

  const onClose = () => {
    setError("");
    setName("");
    handleClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute" as "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Stack spacing={2}>
          <Typography variant="h6" component="h2">
            Add Chat
          </Typography>
          <TextField
            label="Name"
            error={!!error}
            helperText={error}
            onChange={(event) => setName(event.target.value)}
          />
          <Button
            variant="outlined"
            onClick={async () => {
              if (!name.length) {
                setError("Chat name is required.");
                return;
              }
              try {
                const chat = await createChat({
                  variables: {
                    createChatInput: { name },
                  },
                });
                onClose();
                router.navigate(`/chats/${chat.data?.createChat._id}`);
              } catch (err) {
                setError(UNKNOWN_ERROR_MESSAGE);
              }
            }}
          >
            Save
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};

export default ChatListAdd;
