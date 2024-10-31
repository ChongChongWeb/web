"use client";
import  { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/components/hooks/use-outside-click";





export function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <div className="relative"> {/* Ensure the container has a 'relative' position */}
       <h1 className="text-3xl font-bold text-neutral-800 mb-6 text-white pl-80">
    Rap Music
  </h1>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden relative"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="text-neutral-800 text-sm md:text-base max-w-sm text-white font-bold"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-800 text-sm md:text-base max-w-sm text-white font-bold"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
   <div className="relative flex justify-start items-start">
  <ul className=" grid grid-cols-1 md:grid-cols-3 items-start gap-4 ">
    
    {cards.map((card) => (
      <motion.div
        layoutId={`card-${card.title}-${id}`}
        key={card.title}
        onClick={() => setActive(card)}
        className="p-4 flex flex-col hover:bg-neutral-50 dark:hover:bg-neutral-800  rounded-xl cursor-pointer relative"
      >
        
        <div className="flex gap-4 flex-col w-full ">
          <motion.div layoutId={`image-${card.title}-${id}`}>
            <img
              src={card.src}
              alt={card.title}
              className="h-60 w-full rounded-lg object-cover object-top"
            />
          </motion.div>
          <div className="flex justify-center items-center flex-col">
          <motion.h3
  layoutId={`title-${card.title}-${id}`}
  className="font-medium text-white text-center md:text-left text-base"
>
  {card.title}
</motion.h3>
<motion.p
  layoutId={`description-${card.description}-${id}`}
  className="text-white text-center md:text-left text-base"
>
  {card.description}
</motion.p>
          </div>
        </div>
      </motion.div>
    ))}
  </ul>
</div>
</div>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
const cards = [
  {
    description: "Eminem",
    title: "Venom",
    src: "https://y.qq.com/music/photo_new/T002R300x300M0000031VfPx2gRYPy_1.jpg?max_age=2592000",
    ctaText: "Visit",
    ctaLink: "https://y.qq.com/n/ryqq/songDetail/0038tY9N3dPrG5",
    content: () => {
      return (
        <p>
I got a song filled with sh*t for the strong-willed

When the world gives you a raw deal

Sets you off 'til you scream

Piss off

Screw you

When it talks to you like you don't belong

Or tells you you're in the wrong field

When something's in your mitochondrial

'Cause it latched on to you like

Knock knock let the devil in

Manevolent as I've ever been head is spinnin'

This medicine's screamin'

L-l-l-let us in

L-l-l-like a salad bowl Edgar Allan Poe

Bedridden shoulda been dead a long time ago

Liquid Tylenol gelatins think my skeleton's meltin'

Wicked I get all high when I think I've smelled the scent

Of elephant manurehell I meant Kahlúa

Screw it to hell with it I went through hell with accelerants

And blew up my my myself again

Volkswagen tailspin bucket matches my pale skin

Mayo and went from Hellmann's and being rail thin

Filet-o-Fish to Scribble Jam Rap Olympics '97 Freaknik

How can I be down

Me and Bizarre in Florida

Proof's room slept on the floor of 'da motel then
        </p>
      );
    },
  },
  {
    description: "弹壳",
    title: "No more nice guy",
    src: "https://y.qq.com/music/photo_new/T002R300x300M000002OI81S3zgKZq_1.jpg?max_age=2592000", // 替换为本地路径
    ctaText: "Visit",
    ctaLink: "https://y.qq.com/n/ryqq/songDetail/002GgsOD31pOMo",
    content: () => {
      return (
        <p>
        我在他们眼里是坏的

注定会失败的

盼着我的下场能给他们带来快乐

狂的几年前就栽了

反骨仔也早闹掰了

让我变得臭名昭著

却越来越混得开了

不会坐以待毙 也不求能指望外力

懂得想要强大就要做到不可代替

压根懒得算计 狂妄自大喜欢攀比

那些不入流的东西

活得兜比脸还干净

钞票堆起来 用钞能力追女孩

行走江湖就像在钢琴上弹奏黑与白

只讲我的规矩 不怕再加几条罪名

蝼蚁也就过过嘴瘾

全都只能躲在背地

从不娘们唧唧抱怨是谁把我害了

敢做就敢当 上头条照样不会赖的

医药费甩脸上 就算错了也是帅的

老子从来不当主角

天生就是当反派的

搂着枪 压着火 花的比你赚的多

犯的错 惹的祸 全部都是真的我

靠一切谋取暴利 样拿得高级

这场游戏不讲道理

而我必须奉陪到底

搂着枪 压着火 花的比你赚的多

犯的错 惹的祸 全部都是真的我

开始靠近你会抗拒 但却发现离不开

你会踏入我的陷阱

然后给我你的爱

风生水起 不光是在内地

财富堆积是家族基因的一项配比

Hate me don't go crazy

没什么威力
        </p>
      );
    },
  },

  {
    description: "Gai",
    title: "盖哥调",
    src: "https://y.qq.com/music/photo_new/T002R300x300M000004BapRx0lFUmF_1.jpg?max_age=2592000", // 替换为本地路径
    ctaText: "Visit",
    ctaLink: "https://y.qq.com/n/ryqq/songDetail/000NiTou3GIkuO",
    content: () => {
      return (
        <p>
身家翻了好多倍我根本都不在乎

快找个Typebeat 说点脏话 你说那是态度

New friends 他们靠近我 是因为嫌贫爱富

我是你的眼中钉 活在人间的怪物

你觉得好 我觉得都一般

With my team

笼罩整个行业里的一匹山

走不起来的 过了十年 嘴巴依旧酸

你确实是在街上混 但手里拿个碗

他们问

你有多少车

你有多少房

我老爱打钱回家给我爹和我的娘

我只信我自己 只有自己能帮自己忙

除掉hater唯一办法就是比他们命更长

见怪不怪的表达

微笑带着爪牙

活得精彩纷呈

是我给你们的讨伐

巴别塔在我心里

不可能会倒塌

苦难是绳索抓住他

帮我把杂念绞杀

那些人承诺啥子

他们从来都做不到

Anywhere 都有Fake 也有太多墙头草

兄弟伙 干点正事为了把家照顾好

财富是脸上的笑

不是你说GAI哥调

GAI哥调
        </p>
      );
    },
  },
  {
    description: "C-Block/Gai",
    title: "江湖流",
    src: "https://y.qq.com/music/photo_new/T002R300x300M000002ILjM64c4PZy_1.jpg?max_age=2592000", // 替换为本地路径
    ctaText: "Visit",
    ctaLink: "https://y.qq.com/n/ryqq/songDetail/000MNZsl0UUpF7",
    content: () => {
      return (
        <p>
         整个江湖都任我闯

我的生命像一首歌

反正什么都带不走

因果循环在道中流

整个江湖都任我闯

我的生命像一首歌

反正什么都带不走

那就跟着那湘江水哗啦啦流

施逸凡Kungfu-Pen：

从南到北 有不同口味的消息

从南到北 绿色是我们的交集

等到各路好汉 在中原聚集

给这社会好看 天龙八部续集

F**k无病呻吟

也不爱满目狰狞

大家走起来才真行 百家争鸣

真的爱 给拿着mic的mc

默默耕耘

所以我真不在乎

你们到底谁能喷赢

那些看似正火的

其实早就入魔了

于是不trap不活了

有人没rap成佛了

所以湘江的龙抬头

他不想再躲了

喷你一脸白沙液

说TM江湖是我的

MFK 没学会放弃

听你放屁

那些焦急和消极

在flow中忘记

看看岳麓书院的牌匾

在提醒着你

惟楚有材 我要天下

才对你们客气

看头顶 的天网

在笼罩着你

在遥远 的东方

这非常合理

可革命 的江水

快涌向这里

只要河流合并

这里绝逼会决堤

黄金也买不走我的义气

时间它带不走我的兄弟

暴风雨

就像是对我的洗礼

要带着我们的湘军

插一面旗
        </p>
      );
    },
  },
  {
    description: "D-shine",
    title: "一挑五",
    src: "data:image/jpeg;base64,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", // 替换为本地路径
    ctaText: "Visit",
    ctaLink: "https://y.qq.com/n/ryqq/songDetail/001ICDRG3PMy26",
    content: () => {
      return (
        <p>
    

       首先呢

我不想扯到CDC

无关的人不要卷进来

我完完全全只是针对海尔兄弟

Higher Brothers PSY.P

Melo 马思唯

DZ know

还有一个我懒得讲

哈哈哈哈哈

哈 哈NM个头

一起上 一起上

你们全都一起上

看老子一挑五

你们五个一起上

你们的歌我不会再一起晃

要你们别太狂

全中国 一起唱

一挑五 一挑五 一挑五

海尔妹妹

一挑五 一挑五 一挑五

海尔妹妹

一挑五 一挑五 一挑五

海尔妹妹

Higher Brother

Higher Sisters

My chains new gold watch made in China

当面还挺好 表里不一

真的太假

你还晒发票

你想说什么大话

你现在买得起

不代表mv里没戴过

你摇起来很像

真的只是像而已

你们做的Trap

容易跟着唱而已

出几张 Mixtape

你依然卑微

你妹妹 脆脆

要我看马思唯 对 贝贝

TY的儿子 谢帝的狗

谁是 TY的儿子

谢帝的狗

你就是TY的儿子 谢帝的狗

你们是TY的儿子

还有PSY.P 你弱爆了

全都知道

让你先打五分钟

以暴制暴我嗜好

上海打你那哥们

我要跟他击个掌

我做吴京 来成都

再演杀破狼
        </p>
      );
    },
  },
  {
    description: "mihimaru GT (大和美姬丸)",
    title: "マスターピース (杰作)",
    src: "https://y.qq.com/music/photo_new/T002R300x300M0000042zz3N1UYGBG_2.jpg?max_age=2592000", // 替换为本地路径
    ctaText: "Visit",
    ctaLink: "https://y.qq.com/n/ryqq/songDetail/001MuRIY41kzKv",
    content: () => {
      return (
        <p>
         雨の日も 風の日も

極寒の吹雪も 灼熱の太陽も

全て日々を彩る材料

へこたれないで意思と愛を

君がくれた 優しさは厳しさ

ぶつかることで知った

もどかしさ

違いを認めることで始まる

縦横無尽 踊れ 天地開闢

本当はさびしかった

君に会うまでは

ひとりでいるほうが

気楽なんだって

うそついていた

好きな本も 趣味も

まるであわないけど

君だけだよ

うなずいてくれたのは

喜びと 悲しみと 怒りと

ドと レと ミと

ファと ソと ラと

シと ド

違わなきゃ出来ない

ハーモニーとシナリオ

誰も同じじゃない

それこそが生きてる意味だから

時として出した音が

不協和音でも

だからあきらめない

信じぬける強さで

辿り着ける世界の果てで

君と見る景色が真実なんだ

本当は探していた

君に会うまでは

つなぐための手のひらが

すぐそばにある事

ぶつかり合う事は

とても怖いけど

心の底から

笑いあいたい

赤青黄と白と黒と

大地と海と空と宇宙と

違わなきゃ見えない

風景とシナリオ

誰もひとりじゃない

それぞれの物語重ねれば

移り変わってく季節

迷ったとしても

その手を離さない

信じぬける強さで

歩いてゆく 旅の途中

君と見る景色が真実なんだ

リミットスピードで行きます Knock

君とあの日交わした約束

覚えてますか 語った夢

色褪せはしない Wonderful デイズ

陽の差す方へツヨク踏み出した

共に流した悔し涙

日々葛藤しながら格闘

逆境だって笑え楽勝

段々と強くなる決心

前進前進 培う精神

踏まれたって立ち上がってこう
        </p>
      );
    },
  },
];
