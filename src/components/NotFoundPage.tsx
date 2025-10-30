import React from "react";
import { Box, Typography, Button } from "@mui/material";

interface NotFoundPageProps {
  title?: string;
  message?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  imageSrc?: string;
}

const NotFoundPage: React.FC<NotFoundPageProps> = ({
  title = "No engagements have been created yet.",
  message = "There are currently no engagements available. Please create a new engagement to get started.",
  imageSrc 
}) => {
  return (
    <Box
      sx={{
        height: "75.9vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        backgroundColor: "#f5f5f4",
        borderRadius: 2,
      }}
    >
      <Box>
        <img src={imageSrc} alt="Not Found" width={120} height={120} />
      </Box>
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: "16px",
          fontFamily: "'Open Sans', sans-serif",
          mb: 1,
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          fontSize: "14px",
          color: "#666",
          mb: 3,
          fontFamily: "'Open Sans', sans-serif",
        }}
      >
        {message}
      </Typography>
    </Box>
  );
};

export default NotFoundPage;
