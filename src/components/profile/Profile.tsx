import { Avatar, Button, Stack, Typography } from "@mui/material";
import { UploadFile } from "@mui/icons-material";
import { useGetMe } from "../../hooks/useGetMe";
import { API_URL } from "../../constants/urls";
import { snackVar } from "../../constants/snack";

const Profile = () => {
  const me = useGetMe();

  const handleFileUpload = async (event: any) => {
    try {
      const file = event.target.files[0];
      const formData = new FormData();
      formData.append("file", file);
      await fetch(`${API_URL}/users/image`, {
        method: "POST",
        body: formData,
      });
      snackVar({ message: "Image uploaded.", type: "success" });
    } catch (err) {
      snackVar({ message: "Error uploading file.", type: "error" });
    }
  };

  return (
    <Stack
      spacing={6}
      sx={{
        marginTop: "2.5rem",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h1">{me.data?.me.username}</Typography>
      <Avatar sx={{ width: 256, height: 256 }} src={me.data?.me.imageUrl} />
      <Button
        variant="contained"
        component="label"
        size="large"
        startIcon={<UploadFile />}
      >
        Upload Image
        <input type="file" hidden onChange={handleFileUpload} />
      </Button>
    </Stack>
  );
};

export default Profile;
