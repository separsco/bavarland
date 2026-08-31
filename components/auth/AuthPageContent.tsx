import { AuthLoginForm } from "@/components/auth/AuthLoginForm";
import { AuthSidebar } from "@/components/auth/AuthSidebar";

export function AuthPageContent() {
  return (
    <div className="flex min-h-full w-full items-center justify-center bg-[#eef2f6] p-4 sm:p-6 lg:p-8">
      <div className="flex w-full max-w-6xl overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-navy/10">
        <AuthLoginForm />
        <AuthSidebar />
      </div>
    </div>
  );
}
