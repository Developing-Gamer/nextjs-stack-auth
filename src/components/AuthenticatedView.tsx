'use client';

import type { User } from "@stackframe/stack";

interface AuthenticatedViewProps {
  user: User;
}

export function AuthenticatedView({ user }: AuthenticatedViewProps) {
  return (
    <div></div>
  );
}
