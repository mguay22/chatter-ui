import { Box, Button } from "@mui/material";

interface NavigationProps {
  pages: string[];
}

const Navigation = ({ pages }: NavigationProps) => {
  return (
    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
      {pages.map((page) => (
        <Button key={page} sx={{ my: 2, color: "white", display: "block" }}>
          {page}
        </Button>
      ))}
    </Box>
  );
};

export default Navigation;
