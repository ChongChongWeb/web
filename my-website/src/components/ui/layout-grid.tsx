"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Card = {
  id: number;
  className: string;
  thumbnail: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);

  const handleClick = (card: Card) => {
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setSelected(null);
  };

  return (
    <div className="relative w-full h-full">
      {/* 覆盖整个页面的透明背景层，点击任何地方都会触发关闭 */}
      {selected && (
        <div
          onClick={handleOutsideClick}
          className="fixed inset-0 z-40 bg-transparent cursor-pointer" // 全屏覆盖层
        />
      )}

      <div className="w-full h-full p-10 grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-4 relative z-50">
        {cards.map((card, i) => (
          <div key={i} className={cn(card.className, "")}>
            <motion.div
              onClick={() => handleClick(card)}
              className={cn(
                card.className,
                "relative overflow-hidden cursor-pointer",
                selected?.id === card.id
                  ? "rounded-lg absolute inset-0 h-1/2 w-full md:w-1/2 m-auto flex justify-center items-center flex-wrap flex-col z-50"
                  : "bg-white rounded-xl h-full w-full"
              )}
              layoutId={`card-${card.id}`}
            >
              {selected?.id === card.id && <SelectedCard selected={selected} />}
              <ImageComponent card={card} />
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ImageComponent = ({ card }: { card: Card }) => {
  return (
    <motion.img
      layoutId={`image-${card.id}-image`}
      src={card.thumbnail}
      height="500"
      width="500"
      className="object-cover object-top absolute inset-0 h-full w-full transition duration-200"
      alt="thumbnail"
    />
  );
};

const SelectedCard = ({ selected }: { selected: Card | null }) => {
  return (
    <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg relative z-60">
      <motion.div
        layoutId={`content-${selected?.id}`}
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: 100,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      >
   
      </motion.div>
    </div>
  );
};
