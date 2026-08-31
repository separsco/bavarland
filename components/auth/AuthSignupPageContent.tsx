import { AuthSidebar } from "@/components/auth/AuthSidebar";
import { AuthSignupForm } from "@/components/auth/AuthSignupForm";

export function AuthSignupPageContent() {
  return (
    <div className="flex min-h-dvh w-full items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="flex w-full max-w-6xl rounded-[2rem] bg-surface shadow-xl shadow-navy/10">
        <AuthSignupForm />
        <AuthSidebar />
      </div>
    </div>
  );
}
