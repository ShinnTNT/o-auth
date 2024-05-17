import { Facebook } from "iconsax-react";
import { LoginSocialFacebook, IResolveParams } from "reactjs-social-login";

const FACEBOOK_ID = import.meta.env.VITE_REACT_APP_FACEBOOK_APP_ID;

export default function FacebookLogin() {
  return (
    <LoginSocialFacebook
      appId={FACEBOOK_ID}
      onResolve={(response: IResolveParams) => {
        console.log(response.data);
      }}
      onReject={(error: Error) => {
        console.log(error);
      }}
    >
      <Facebook size={30} color="blue" variant="Bold" />
    </LoginSocialFacebook>
  );
}
