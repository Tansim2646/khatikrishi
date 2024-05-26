import notification from "@/public/Icons/Notification.png";
import account from "@/public/Icons/Account.png";
import cart from "@/public/Icons/Shopping-cart.png";
import Image from "next/image";
export default function NotificationPanel() {
  return (
    <div className="md:flex items-center gap-8 hidden">
      <Image src={notification} alt="notification" />
      <Image src={account} alt="account" />
      <Image src={cart} alt="cart" />
    </div>
  );
}
