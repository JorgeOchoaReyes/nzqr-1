import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { Wrapper } from "~/components/Wrapper";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}> 
      <Wrapper>  
        <Component {...pageProps} />
      </Wrapper> 
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
