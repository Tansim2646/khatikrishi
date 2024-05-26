import BottomNav from "@/components/Bottomnav/bottomnav";
import MainNav from "@/components/Mainnav/mainnav";
import Topnav from "@/components/Topnav/topnav";
import AdvertiseSection from "@/components/advertisingSection/advertisingSection";

export default function HomePage() {
  return (
    <div className="relative h-full">
      <Topnav />
      <MainNav />
      <BottomNav />
      <AdvertiseSection />
    </div>
  );
}
