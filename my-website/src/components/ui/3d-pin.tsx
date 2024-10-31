"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const PinContainer = ({
  children,
  imgSrc,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  imgSrc?: string;
  className?: string;
  containerClassName?: string;
}) => {
  const [transform, setTransform] = useState(
    "translate(-50%,-50%) rotateX(0deg)"
  );

  const [showImage, setShowImage] = useState(false); // 控制图片显示的状态

  const onMouseEnter = () => {
    setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.8)");
    setShowImage(true); // 鼠标悬停时显示图片
  };
  const onMouseLeave = () => {
    setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
    setShowImage(false); // 鼠标移开时隐藏图片
  };

  return (
    <div
      className={cn(
        "relative group/pin z-50 cursor-pointer",
        containerClassName
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* 图片展示 */}
      {showImage && imgSrc && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-[70]">
          <img
            src={imgSrc}
            alt="Pin Image"
            className="w-96 h-80 object-cover rounded-xl shadow-lg"
          />
        </div>
      )}

      <div
        style={{
          perspective: "1000px",
          transform: "rotateX(70deg) translateZ(0deg)",
        }}
        className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
      >
        <div
          style={{
            transform: transform,
            borderColor: "#F6B61F", // 修改边框颜色为背景颜色
          }}
          className="absolute left-1/2 p-4 top-1/2 flex justify-start items-start rounded-2xl shadow-[0_8px_16px_rgb(0_0_0/0.4)] bg-black border border-[#F6B61F] group-hover/pin:border-[#F6B61F] transition duration-700 overflow-hidden"
        >
          <div className={cn("relative z-50", className)}>{children}</div>
        </div>
      </div>
    </div>
  );
};

// 修改后的使用方式
export function AnimatedPinDemo() {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center bg-[#F6B61F]">
      <PinContainer imgSrc="src/assets/bar12.jpg">
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] bg-[#F6B61F]">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
            Aceternity UI
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Customizable Tailwind CSS and Framer Motion Components.
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
        </div>
      </PinContainer>
    </div>
  );
}
