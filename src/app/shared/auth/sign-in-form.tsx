"use client";

import Link from "next/link";
import { Input, Text, Button, Password, Switch } from "rizzui";
import { useMedia } from "@/hooks/use-media";
import { Form } from "@/components/ui/form";
import { routes } from "@/config/routes";
import { loginSchema, LoginSchema } from "@/utils/validators/login.schema";
import { useSignInMutation } from "@/api/auth.api";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const initialValues: LoginSchema = {
  email: "yugalkhati57@gmail.com",
  password: "pythonjs20",
};

export default function SignInForm() {
  const isMedium = useMedia("(max-width: 1200px)", false);
  const router = useRouter();

  const [signInUserMutation] = useSignInMutation();

  const signInUser = (data: LoginSchema) => {
    signInUserMutation({
      email: data.email,
      password: data.password,
    })
      .unwrap()
      .then((response) => {
        localStorage.setItem("token", response);
        router.push("/dashboard");
      })
      .catch((err: any) => {
        console.log(err.data.error);
        toast.error(err.data.error || "Something went wrong!");
      });
  };

  return (
    <>
      <Form<LoginSchema>
        validationSchema={loginSchema}
        // onSubmit={onSubmit}
        onSubmit={(data) => signInUser(data)}
        useFormProps={{
          mode: "onChange",
          defaultValues: initialValues,
        }}>
        {({ register, formState: { errors } }) => (
          <div className="space-y-5 lg:space-y-6">
            <Input
              type="email"
              size={isMedium ? "lg" : "xl"}
              label="Email"
              placeholder="Enter your email"
              className="[&>label>span]:font-medium"
              {...register("email")}
              error={errors.email?.message}
            />
            <Password
              label="Password"
              placeholder="Enter your password"
              size={isMedium ? "lg" : "xl"}
              className="[&>label>span]:font-medium"
              {...register("password")}
              error={errors.password?.message}
            />

            <Button className="w-full" type="submit" size={isMedium ? "lg" : "xl"}>
              Sign In
            </Button>
          </div>
        )}
      </Form>
      <Text className="mt-5 text-center text-[15px] leading-loose text-gray-500 md:mt-7 lg:mt-9 lg:text-base">
        Don’t have an account?{" "}
        <Link
          href="#"
          className="font-semibold text-gray-700 transition-colors hover:text-gray-1000">
          Sign Up
        </Link>
      </Text>
    </>
  );
}
