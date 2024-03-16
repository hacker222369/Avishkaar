import { useAuth0 } from "@auth0/auth0-react";
import { access } from "fs";
import { useMutation } from "react-query";
import { string } from "zod";

const API_BASE_URL=import.meta.env.VITE_API_BASE_URL;
type CreateUserRequest={
    auth0Id:string;
    email:string;
};
export const useCreateMyUser=()=>{
    const {getAccessTokenSilently}=useAuth0();

    const createMyUserRequest=async(user:CreateUserRequest)=>{
        const accessToken=await getAccessTokenSilently();
        const response=await fetch(`${API_BASE_URL}/api/my/user`,{
            method:"POST",
            headers:{
                Authorization:`Bearer ${accessToken}`,
                "Content-Type":"application/json",
            },
            body: JSON.stringify(user),
        });
        if(!response.ok){
            throw new Error("Failed to create user");
        }
    };
    const {mutateAsync:createUser,isLoading,isError,isSuccess,}=useMutation(createMyUserRequest);
    return{
        createUser,isLoading,isError,isSuccess,
    };
};

type UpdateMyUserRequest ={

    Name :string;
    
    room_number : string ;
    hostel : string

}
export const useUpdateMyUser = () => {
    const {getAccessTokenSilently} =useAuth0();

    const updateMyUserRequest = async (formData:UpdateMyUserRequest)=> {
        const accessToken= await getAccessTokenSilently();
        const response = await fetch (`${API_BASE_URL}/api/my/user`, {
           method:"PUT",
           headers: {
            Authorization : `Bearer ${accessToken}`,
            "Content-Type":"application/json",

           },
           body: JSON.stringify(formData),

        });

        if(!response.ok){
            throw new Error("Failed to uodate User")

        }
        return response.json();


    };

   const {mutateAsync:updateUser,isLoading,isSuccess,isError,error,reset}= useMutation(updateMyUserRequest);

   return { updateUser,isLoading};
    
};