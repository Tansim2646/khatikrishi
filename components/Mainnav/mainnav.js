import Image from "next/image";
import { SidebarWrapper } from "../Sidebar/sidebar";
import logo from "@/public/khatikrishi-logo.svg";
import { Input } from "../ui/input";
import NotificationPanel from "./notification-panel/notificationPanel";

export default function MainNav() {
  return (
    <header className="container mx-auto flex justify-between px-4 py-2 items-center gap-7 border-b border-neutral-300">
      <Image src={logo} alt="khatikrishi-logo" />
      <Input
        className="max-w-3xl bg-white rounded-md px-5 py-3 focus:border-primary-100 hidden md:block"
        placeholder="Search for products"
      />
      <NotificationPanel />
      <SidebarWrapper />
    </header>
  );
}
