"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode
  // any props that come into the component
}

const AuthProvider = ({ children, ...props }: Props) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;