/* eslint-disable @typescript-eslint/no-explicit-any */
import { Google } from "iconsax-react";
import { LoginSocialGoogle, IResolveParams } from "reactjs-social-login";

const GOOGLE_CLIENT_ID = import.meta.env.VITE_REACT_APP_GOOGLE_CLIENT_ID;

export default function GoogleLogin() {
  return (
    <LoginSocialGoogle
      isOnlyGetToken
      client_id={GOOGLE_CLIENT_ID}
      //   onLoginStart={()=>{}}
      onResolve={({ data }: IResolveParams) => {
        console.log(data);
      }}
      onReject={(err: any) => {
        console.log(err);
      }}
    >
      <Google size={30} color="green" variant="Bold" />
    </LoginSocialGoogle>
  );
}
