import React from "react"; 
import { useRouter } from "next/router";
import { api } from "~/utils/api"; 

export default function SingleVision() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <> 
      <main className=" flex min-h-screen flex-col items-center justify-center"> 
 
        <p> {id} </p>
      </main> 
    </>
  );
};