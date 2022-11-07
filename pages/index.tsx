/* eslint-disable react-hooks/exhaustive-deps */
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Link from "next/link";

const Home: NextPage = () => {
  const { status, user } = useSelector((state: any) => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/home");
    }
  }, [router, user, status]);

  return (
    <div>
      Musive landing page! work stil in progress.
      <Link href="/login">
        <a>login</a>
      </Link>
      <Link href="/register">
        <a>register</a>
      </Link>
    </div>
  );
};

export default Home;
