import React from "react";
import { FlipWords } from "../ui/flip-words";

export function FlipWordsDemo() {
  const words = ["Chunxuan Ji", "季春轩", "Chongchong", "冲冲"];

  return (
    <div className="text-4xl font-bold text-white">  {/* 设置字体大小、加粗和颜色为白色 */}
      <FlipWords words={words} />
    </div>
  );
}
