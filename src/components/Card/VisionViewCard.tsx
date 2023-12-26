import { useRouter } from "next/router";
import React from "react"; 
import { api } from "~/utils/api";
import { LoadingButton } from "@mui/lab";

interface ViewVisionCardProps {
  name: string;
  url: string;
  timeOfDay: string;
  id: string;
  loading: boolean;
  deleteMutation: (id: string) => Promise<void>;
}

export const ViewVisionCard: React.FC<ViewVisionCardProps> = ({
  name, 
  url,
  timeOfDay,
  id,
  deleteMutation,
  loading
}) => {

  const router = useRouter();  

  return (
    <div className="card w-[400px] bg-base-100 shadow-xl m-2">
      <div className="card-body">
        <p style={{ fontSize: "30px"}}> 👁️ </p>
        <h2 className="card-title">{name}</h2>
        <p style={{fontSize: "20px", textOverflow: "clip"}}> Vision on: <a target="_blank" rel="noopener noreferrer" className="hover:underline" href={url}>{url}</a> </p>
        <p style={{fontSize: "20px"}}> Runs at: {timeOfDay}</p>
        <div className="card-actions justify-end">
          <LoadingButton loading={loading} onClick={async () => {
            await deleteMutation(id);
          }}  className="btn btn-error">Delete</LoadingButton>
          
          <LoadingButton onClick={async () => {
            await router.push(`/vision/${id}`);  
          }}  className="btn btn-primary">View History</LoadingButton>
        </div>
      </div>
    </div>
  );
};