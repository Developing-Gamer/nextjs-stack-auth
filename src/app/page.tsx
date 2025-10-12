'use client';

import { useUser } from "@stackframe/stack";
import { AuthenticatedView } from "@/components/AuthenticatedView";
import { UnauthenticatedView } from "@/components/UnauthenticatedView";

export default function Home() {
  const user = useUser();

  return (
    <>
      {user ? <AuthenticatedView user={user} /> : <UnauthenticatedView />}
    </>
  );
}
