"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "@/components/ui/layout-grid";

export function LayoutGridDemo() {
  return (
    <div className="h-screen py-20 w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
    return (
      <div style={{ backgroundColor: 'black', padding: '1rem' }}> {/* 临时背景色 */}
        <p className="font-bold md:text-4xl text-xl text-white">
          House in the woods
        </p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          A serene and tranquil retreat, this house in the woods offers a peaceful
          escape from the hustle and bustle of city life.
        </p>
      </div>
    );
  };
  



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
