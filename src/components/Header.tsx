'use client';

import Link from "next/link";
import { UserButton } from "@stackframe/stack";
import type { User } from "@stackframe/stack";

interface HeaderProps {
  user: User | null;
}

export function Header({ user }: HeaderProps) {
  return (
    <header className="flex justify-between items-center mb-16">
      <h1 className="text-2xl font-bold"></h1>
      <div className="flex items-center gap-4">
        {user ? (
          <UserButton showUserInfo={true} />
        ) : (
          <div className="flex gap-2">
            <Link
              href="/handler/sign-up"
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm h-10 px-4"
            >
              Join
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
