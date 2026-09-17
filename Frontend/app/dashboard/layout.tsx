import type React from "react";
import { SidebarProvider } from "@/app/components/ui/sidebar";
import { SidebarTrigger } from "@/app/components/ui/sidebar";
import { DashboardSidebar } from "@/app/components/dashboard/sidebar";
import { UserNav } from "@/app/components/dashboard/user-nav";
import { Chatbot } from "@/app/components/chatbot/page";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full overflow-hidden bg-black">
        <DashboardSidebar />
        <div className="flex flex-col flex-1 overflow-hidden">
          <header className="border-b border-[#00FF00]/30 bg-black min-h-16 flex items-center px-3 sm:px-6 py-3 justify-between gap-3">
            <div className="flex items-center gap-2 min-w-0">
              <SidebarTrigger className="shrink-0 text-[#00FF00] md:hidden" />
              <h1 className="text-lg sm:text-xl font-bold text-[#00FF00] truncate">
                Dashboard
              </h1>
            </div>
            <UserNav />
          </header>
          <main className="flex-1 min-w-0 overflow-auto p-3 sm:p-6 relative">
            {children}
            <Chatbot />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
