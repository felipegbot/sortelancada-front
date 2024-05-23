import { useRouter } from "next/router";

export default function isAuth() {
  const router = useRouter();
  const auth =
    typeof window !== "undefined" ? localStorage?.getItem("user_token") : true;

  if (!auth && typeof window !== "undefined") {
    router.push("/logout");
  }
  return auth;
}
