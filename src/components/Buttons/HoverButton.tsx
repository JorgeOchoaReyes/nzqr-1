/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { useEffect } from "react";
import { Box, type SxProps, type Theme } from "@mui/material"; 
interface ButtonProps {
  text: string; 
  sx?:  SxProps<Theme>;
  onClick: () => void;
}

export const HoverButton: React.FC<ButtonProps> = ({text, onClick, sx}) => {


  useEffect(() => {
    const button = document.querySelector(".shiny") ;

    const readout = document.querySelector("p");
  
    button?.addEventListener("mousemove", (e) => {
      const { x, y } = button.getBoundingClientRect();
      (button as any)?.style?.setProperty("--x", (e as any)?.clientX - x);
      (button as any)?.style?.setProperty("--y", (e as any)?.clientY - y);
    });
  }, []);

  return <Box className="shiny" sx={{...sx, textAlign: "center"}} onClick={onClick}>
    {text} 
  </Box>;

};