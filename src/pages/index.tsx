import { Typography } from "@mui/material";
import Head from "next/head"; 
import { GradientText } from "~/components/Text/GradientText";
import { HoverButton } from "~/components/Buttons/HoverButton";
import { useRouter } from "next/router";
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect } from "react";


export default function Home() { 
  const router = useRouter(); 
  const { data: session } = useSession();

  useEffect(() => {
    if(session) {
      router.push("/library").catch(console.error);
    }
  }, [session]);

  return (
    <>
      <Head>
        <title>Vision</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" flex min-h-screen flex-col items-center justify-center"> 
        <GradientText
          text="Daily Vision on any website!"
          sx={{
            fontSize: "80px",
            textDecoration: "underline",
            fontWeight: "bold",
            width: "60%",
            textAlign: "center"
          }} />

        <Typography sx={{
          fontSize: "80px",
          fontWeight: "bold"
        }}> 
      👁️ 👁️ 👁️ 👁️ 👁️
        </Typography>
  
        <Typography variant="h5" sx={{
          textAlign: "center", 
          width: "25%",
          mt: 4
        }}>
          Monitor, store historical data, and view daily updates on any website, for reviews, or other changes.
        </Typography>

        <HoverButton onClick={async () => {
          await signIn();
        }} text="Get Started" sx={{
          width: "250px",
          fontSize: "24px",
          mt: 3
        }} />

      </main> 
    </>
  );
}
