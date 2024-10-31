"use client";
import { LayoutGrid } from "@/components/ui/layout-grid";

export function LayoutGridDemo() {
  return (
    <div className="h-screen py-20 w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}





const cards = [
  {
    id: 1,

    className: "md:col-span-2",
    thumbnail:
      "https://img0.baidu.com/it/u=2546167195,2723464941&fm=253&fmt=auto&app=138&f=JPEG?w=760&h=380",
  },
  {
    id: 2,

    className: "col-span-1",
    thumbnail:
      "https://www.ghostoact.com/static/arts/img/skins/Zoe_Splash_0.jpg",
  },
  {
    id: 3,

    className: "col-span-1",
    thumbnail:
      "https://img1.baidu.com/it/u=861021254,3423983436&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=500",
  },
  {
    id: 4,

    className: "md:col-span-2",
    thumbnail:
      "https://img2.baidu.com/it/u=3842522264,3293124359&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500",
  },
];
