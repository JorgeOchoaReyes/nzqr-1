import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { Wrapper } from "~/components/Wrapper";
import { StyledEngineProvider } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import {theme} from "~/utils/theme";


const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return ( 
    <StyledEngineProvider injectFirst>      
      <ThemeProvider theme={theme}>
        <SessionProvider session={session}> 
          <Wrapper>  
            <Component {...pageProps} />
          </Wrapper> 
        </SessionProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default api.withTRPC(MyApp);
