"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/ui/pop";
import { LayoutGridDemo } from "./layout";

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };


let notifications = [
  {
    name: "冲神666",
    description: "和朋友玩游戏才是最开心的时候~下面的话仅供娱乐~",
    time: "1m ago",
    icon: "💸",
    color:  getRandomColor(),
  },
  {
    name: "东狗",
    description: "冲神下把带我打大乱斗！",
    time: "1m ago",
    icon: "🤬",
    color: getRandomColor(),
  },
  {
    name: "黑人Bro",
    description: "炉石只服冲神！",
    time: "10m ago",
    icon: "👤",
    color: "#d4f2e8",
  },
  {
    name: "大菲",
    description: "我承认，我是靶场的手下败将",
    time: "5m ago",
    icon: "💬",
    color:  getRandomColor(),
  },
  {
    name: "HT250",
    description: "冲神太强了，我得一辈子追上他的脚步",
    time: "2m ago",
    icon: "🐷",
    color:  getRandomColor(),
  },
  {
    name: "美团销马",
    description: "我承认我的游戏水平不值一提！",
    time: "20m ago",
    icon: "🐕",
    color:  getRandomColor(),
  },
  {
    name: "顶天立地富",
    description: "他怎么可以这么强？",
    time: "3m ago",
    icon: "🙊",
    color:  getRandomColor(),
  },
  {
    name: "交大吴亦凡",
    description: "游戏？冲神只是在单方面的推进...",
    time: "9m ago",
    icon: "🏃‍♀️‍➡️",
    color:  getRandomColor(),
  },
  {
    name: "美国罕见",
    description: "He's so strong that I can only use herbivorous jungle.",
    time: "6m ago",
    icon: "🤖",
    color:  getRandomColor(),
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        "transition-all duration-200 ease-in-out hover:scale-[103%]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption
            className="flex flex-row items-center whitespace-pre text-lg font-medium"
            style={{ fontFamily: 'Helvetica, Arial, sans-serif', color: 'white', fontWeight: 'bold' }}
          >
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs">{time}</span>
          </figcaption>
          <p
            className="text-sm font-normal"
            style={{ fontFamily: 'Helvetica, Arial, sans-serif', color: 'white', fontWeight: 'bold' }}
          >
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export function AnimatedListDemo({
    className,
  }: {
    className?: string;
  }) {
    return (
      <div className="w-full flex items-start space-x-4"> {/* 添加 space-x-4 用于间距控制 */}
        {/* 左侧的 AnimatedListDemo */}
        <div
          className={cn(
            "flex h-[500px] w-full flex-col p-0 overflow-hidden rounded-lg",
            className
          )}
          style={{ flex: 1 }} // 保证宽度
        >
          <AnimatedList>
            {notifications.map((item, idx) => (
              <Notification {...item} key={idx} />
            ))}
          </AnimatedList>
        </div>
  
        {/* 右侧的 LayoutGridDemo */}
        <div style={{ flex: 3, marginTop: '-10rem' }}> {/* 保证 LayoutGridDemo 占据剩余宽度 */}
          <LayoutGridDemo />
        </div>
      </div>
    );
  }
  