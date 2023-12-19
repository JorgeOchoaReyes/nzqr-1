import { styled } from "@mui/material/styles";
import { type SxProps, type Theme } from "@mui/system";

const GradientTextUtil = styled("span")<{
  color?: "primary" | "error" | "success" | "warning";
}>(({ theme, color = "primary" }) => ({
  background:
    theme.palette.mode === "dark"
      ? theme.palette.primary.main
      : "linear-gradient(to right, #1eb854, #1db8ab)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
}));

interface GradientComponentProps {
  text: string; 
  sx?:  SxProps<Theme>;
}

export const GradientText: React.FC<GradientComponentProps> = ({text, sx}) => {
  return (
    <GradientTextUtil color="primary" sx={sx}>
      {text}
    </GradientTextUtil>
  );
};