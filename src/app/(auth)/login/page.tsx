import SignInForm from "@/app/shared/auth/sign-in-form";
import AuthWrapper from "@/app/shared/auth/auth-wrapper";
import { metaObject } from "@/config/site.config";

export const metadata = {
  ...metaObject("Login"),
};

export default function LoginPage() {
  return (
    <AuthWrapper
      title={
        <>
          <span className="bg-gradient-to-r from-[#136A8A] to-[#267871] bg-clip-text text-transparent">
            Welcome Back!
          </span>{" "}
          Stay signed in and get special benefits.
        </>
      }
      isSignIn
      //   isSocialLoginActive={true}
    >
      <SignInForm />
    </AuthWrapper>
  );
}
