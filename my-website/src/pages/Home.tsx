import Navbar from '@/components/Navbar';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import { OrbitingCirclesDemo } from '@/components/ui/OrbitingCirclesPage';
import { AnimatedGridPatternDemo } from '@/components/ui/badkgrond';
import { FlipWordsDemo } from '@/components/ui/flipWord';
import { TimelineDemo } from '@/components/timelinePage';
import ResearchWorks from '@/components/researchWork';
import IconCloud from '@/components/ui/icon-cloud';
import { ExpandableCardDemo } from '@/components/grid';
import MusicPlayer from '@/components/ui/player'; // 确保路径正确
import BookComponent from '@/components/Booker'; // 引入新的 BookComponent
import { AnimatedListDemo } from '@/components/poppage';








const Home: React.FC = () => {
  return (
    <><div className=" text-white font-bold" style={{ backgroundColor: '#F6B61F', minHeight: '100vh', position: 'relative' } }>
      {/* 导航栏 */}

      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
        <div className="absolute inset-0 z-0 pointer-events-none">
          <AnimatedGridPatternDemo />
        </div>
      </div>

      {/* 中心卡片和动画 */}
      <div id="web" className="relative flex flex-col items-center justify-start h-screen z-20">
        {/* 圆圈动画 */}
        <OrbitingCirclesDemo />

        {/* 卡片内容 */}
        <div className="relative flex justify-center items-center w-full h-full z-30 bottom-40">
          <CardContainer className="inter-var max-w-[30rem]">
            <CardBody className="bg-transparent relative dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] w-full h-auto rounded-xl p-10">
              <CardItem translateZ="50" className="text-4xl font-bold text-neutral-600 text-white text-center "   style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
                HELLO, It's ME！
              </CardItem>

              {/* 文字切换效果 */}
              <CardItem as="div" translateZ="60" className="text-2xl text-neutral-500 mt-4 text-white text-center">
                <FlipWordsDemo />
              </CardItem>

              {/* 图片 */}
              <CardItem translateZ="100" className="mt-8 flex justify-center">
                <img
                  src="src/assets/chong.png"
                  style={{ height: '18rem', width: '18rem', borderRadius: '0.5rem', objectFit: 'cover' }}
                  alt="thumbnail" />
              </CardItem>
            </CardBody>

            {/* 卡片右下角的描述 */}
            <div className="absolute bottom-4 right-4 text-white text-2xl font-bold space-y-2"   style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
              <div>Researcher</div>
              <div>Coder</div>
              <div>Vtuber</div>
              <div>Gamer</div>
            </div>
          </CardContainer>
        </div>
      </div>

      {/* 时间轴部分 */}
      <div id="study-experience" className="w-full mt-20 z-10 relative bg-transparent">
        <TimelineDemo />

      </div>
      <div id="rw" className="w-full z-10 relative ">
        <ResearchWorks />
        <div className="w-full mt-20 z-10 relative bg-transparent">
          <div className="relative transform -translate-y-[20%]">
            {/* 图片悬浮 */}

            {/* IconCloud组件 */}
            <IconCloud
              iconSlugs={[
                "typescript",
                "javascript",
                "dart",
                "java",
                "react",
                "flutter",
                "android",
                "html5",
                "css3",
                "nodedotjs",
                "express",
                "nextdotjs",
                "prisma",
                "amazonaws",
                "postgresql",
                "firebase",
                "nginx",
                "vercel",
                "testinglibrary",
                "jest",
                "cypress",
                "docker",
                "git",
                "jira",
                "github",
                "gitlab",
                "visualstudiocode",
                "androidstudio",
                "sonarqube",
                "figma",
              ]} />
            <img
              src="src/assets/chong123.png"
              className="w-100 h-100 object-contain absolute bottom-1 left-1/2 transform -translate-x-[80%] translate-y-[-30%] z-10"
              alt="floating" />
          </div>

        </div>

      </div>
      <div id="rap" className="flex gap-24  w-full mt-10 z-10 relative bg-transparent"   style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
    <ExpandableCardDemo />
    <div className="ml-60  mt-10">
        <MusicPlayer />

    </div>

</div>


<div id="book-display" className="w-full z-10 relative flex items-start" style={{ marginTop: '15rem', display: 'flex', alignItems: 'flex-start' }}>
  <div style={{ flex: 1 }} >
    <BookComponent />
    
  </div>
    {/* 在 BookComponent 的右下角添加 GIF */}



</div>

<div id="game" className="w-full z-10 relative mt-10  "> {/* mt-10 可以调节间距 */}
<h2 className="text-neutral-800 dark:text-neutral-200 text-lg md:text-4xl text-white font-bold "   style={{ fontFamily: 'Helvetica, Arial, sans-serif',marginLeft: '12rem' }}>
      Game
    </h2>
        <AnimatedListDemo />

        <div
  style={{
    position: 'absolute',
    bottom: '10px',
    left: '180px',
    width: '380px',
    height: '380px',
    overflow: 'hidden', // 确保 GIF 不超出边界
  }}
>
  <img src="src/assets/img/chong.GIF" alt="Reading GIF" style={{ width: '100%', height: '100%' }} />
</div>
      </div>

    </div></>
    

  );
}

export default Home;


