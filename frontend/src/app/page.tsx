"use client"; // 👈 This is required!

import { Button } from "@/components/ui/button";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export default function Home() {
  return (
    <header className="flex justify-end items-center p-4 gap-4 h-16">
      {/* <SignedOut>
        <Button>Sign Out</Button>
        <SignUpButton />
      </SignedOut>

      <SignedIn>
        <Button>Sign In</Button>
      </SignedIn> */}
      <SignInButton>
        <Button>
          Sign In
        </Button>
      </SignInButton>
    </header>
  );
}
