'use client';

import Image from "next/image";
import Link from "next/link";
import { useUser, UserButton } from "@stackframe/stack";

export default function Home() {
  const user = useUser();

  return (
    <div className="font-sans min-h-screen p-8 pb-20">
      {/* Header with UserButton */}
      <header className="flex justify-between items-center mb-16">
        <h1 className="text-2xl font-bold">My App</h1>
        <div className="flex items-center gap-4">
          {user ? (
            <UserButton showUserInfo={true} />
          ) : (
            <div className="flex gap-2">
              <Link
                href="/handler/sign-in"
                className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm h-10 px-4"
              >
                Sign In
              </Link>
              <Link
                href="/handler/sign-up"
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm h-10 px-4"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </header>

      {/* Main content */}
      <main className="flex flex-col gap-8 items-center justify-center max-w-2xl mx-auto">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        {user ? (
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              Welcome back, {user.displayName || user.primaryEmail}!
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              You are successfully authenticated with Stack Auth.
            </p>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="font-semibold mb-2">Your Account Details:</h3>
              <ul className="text-left space-y-2">
                <li><strong>Email:</strong> {user.primaryEmail}</li>
                <li><strong>User ID:</strong> {user.id}</li>
                {user.displayName && <li><strong>Display Name:</strong> {user.displayName}</li>}
              </ul>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              Welcome to Stack Auth Demo
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Get started by signing up or signing in to see authentication in action.
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                href="/handler/sign-up"
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-base h-12 px-8"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Built with Next.js 15 and Stack Auth</p>
        </div>
      </main>
    </div>
  );
}
