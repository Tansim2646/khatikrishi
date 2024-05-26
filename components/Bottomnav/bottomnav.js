import Link from "next/link";
import Category from "./category";

export default function BottomNav() {
  return (
    <div className=" container mx-auto border-b border-neutral-300 hidden md:flex items-center justify-between px-4">
      <div className="flex items-center gap-6">
        <Category />
        <Link
          href="#"
          className="hover:text-primary-400 font-medium text-neutral-900"
        >
          About Us
        </Link>
        <Link
          href="#"
          className="hover:text-primary-400 font-medium text-neutral-900"
        >
          Contact Us
        </Link>
      </div>
      <div className="flex items-center gap-6">
        <Link
          href="#"
          className="hover:text-primary-400 font-medium text-neutral-900"
        >
          Privacy Policy
        </Link>
        <Link
          href="#"
          className="hover:text-primary-400 font-medium text-neutral-900"
        >
          Terms & Conditions
        </Link>
      </div>
    </div>
  );
}
