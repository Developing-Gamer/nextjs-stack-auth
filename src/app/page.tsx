'use client';

import { useUser } from "@stackframe/stack";
import { Header } from "@/components/Header";
import { AuthenticatedView } from "@/components/AuthenticatedView";
import { UnauthenticatedView } from "@/components/UnauthenticatedView";
import { Footer } from "@/components/Footer";

export default function Home() {
  const user = useUser();

  return (
    <div className="font-sans min-h-screen p-8 pb-20">
      <Header user={user} />

      <main className="flex flex-col gap-8 items-center justify-center max-w-2xl mx-auto">
        {user ? <AuthenticatedView user={user} /> : <UnauthenticatedView />}

        <Footer />
      </main>
    </div>
  );
}
