"use client";

import {
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@radix-ui/react-navigation-menu";
import { NavigationMenu, NavigationMenuContent } from "../ui/navigation-menu";
import chevrondonw from "@/public/Icons/cheveron-down-arrow.png";
import Image from "next/image";
import catergoryOneLogo from "@/public/Icons/Natural-food.png";
import catergoryTwoLogo from "@/public/Icons/Carbohydrates.png";
import categoryThreeLogo from "@/public/Icons/olive-oil-bottle.png";
import categoryFourLogo from "@/public/Icons/Supplement-bottle.png";
import Link from "next/link";
/*
THIS COMPONENT IS USED TO SHOW CATEGORY LIST IN THE BOTTOM NAVIGATION. IT IS BASED ON SHADCN NAV COMPONENT
*/
export default function Category() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="flex gap-2 items-center py-3 transition-all duration-1000">
            <span className="text-neutral-900 font-medium hover:text-primary-400 text-regular">
              Categories
            </span>
            <Image src={chevrondonw} alt="chevron-down" />
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-[600px] bg-secondary-50 grid grid-cols-2 px-4 py-3 gap-4">
              <li className="px-4 py-2">
                <div>
                  <div className="flex gap-2 font-medium mb-1 items-center">
                    <Image
                      src={catergoryOneLogo}
                      alt="Fresh produce"
                      width={24}
                      height={24}
                    />
                    <p>Fresh Produce</p>
                  </div>
                  <ul className="ml-8 list-disc">
                    <li className="text-sm hover:text-secondary-500">
                      <Link href="#">Organic & Fresh Vegetables</Link>
                    </li>
                    <li className="text-sm  hover:text-secondary-500">
                      <Link href="#">Local Fruits</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="px-4 py-2">
                <div>
                  <div className="flex gap-2 font-medium mb-1 items-center">
                    <Image
                      src={catergoryTwoLogo}
                      alt="Fresh produce"
                      width={24}
                      height={24}
                    />
                    <p>Seeds & Grains</p>
                  </div>
                  <ul className="ml-8 list-disc">
                    <li className="text-sm hover:text-secondary-500">
                      <Link href="#">Grains</Link>
                    </li>
                    <li className="text-sm  hover:text-secondary-500">
                      <Link href="#">Legumes</Link>
                    </li>
                    <li className="text-sm  hover:text-secondary-500">
                      <Link href="#">Seeds</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="px-4 py-2">
                <div>
                  <div className="flex gap-2 font-medium mb-1 items-center">
                    <Image
                      src={categoryThreeLogo}
                      alt="Fresh produce"
                      width={24}
                      height={24}
                    />
                    <p>Cold Pressed Oil</p>
                  </div>
                  <ul className="ml-8 list-disc">
                    <li className="text-sm hover:text-secondary-500">
                      <Link href="#">Coconut Oil</Link>
                    </li>
                    <li className="text-sm  hover:text-secondary-500">
                      <Link href="#">Mustard Oil</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="px-4 py-2">
                <div>
                  <div className="flex gap-2 font-medium mb-1 items-center">
                    <Image
                      src={categoryFourLogo}
                      alt="Fresh produce"
                      width={24}
                      height={24}
                    />
                    <p>Supplement</p>
                  </div>
                  <ul className="ml-8 list-disc">
                    <li className="text-sm hover:text-secondary-500">
                      <Link href="#">Supplement 1</Link>
                    </li>
                    <li className="text-sm  hover:text-secondary-500">
                      <Link href="#">Supplement 2</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="px-4 py-2">
                <div>
                  <div className="flex gap-2 font-medium mb-1 items-center">
                    <Image
                      src={categoryFourLogo}
                      alt="Fresh produce"
                      width={24}
                      height={24}
                    />
                    <p>CHT Product</p>
                  </div>
                  <ul className="ml-8 list-disc">
                    <li className="text-sm hover:text-secondary-500">
                      <Link href="#">CHT product 1</Link>
                    </li>
                    <li className="text-sm  hover:text-secondary-500">
                      <Link href="#">CHT product 2</Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
