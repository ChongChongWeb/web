// components/ResearchWorks.tsx


const ResearchWorks = () => {
  const works = [
    "<End Of The Loop> game and Software monograph",
    "Wechat Mini-game contest development <Music KongFu>",
    "The Maker’s Marathons competition third prize",
    "Qiongji Miaoyao social project",
    "Computer Adaptive Testing Project develop",
    "Keep going ..."
  ];

  return (
<div className="w-full py-10 bg-[#F6B61F]">
  <div className="max-w-6xl mx-auto px-4">
    {/* 调整标题样式，使其对齐 */}
    <h2 className="text-neutral-800 dark:text-neutral-200 text-lg md:text-4xl text-white font-bold mb-8"   style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
      Research and Works
    </h2>
    <ul className="list-disc list-inside text-neutral-800 text-lg text-white space-y-3 font-bold" >
      {works.map((work, index) => (
        <li key={index} className="hover:underline cursor-pointer font-bold"   style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
          {work}
        </li>
      ))}
    </ul>
  </div>
</div>
  );
};

export default ResearchWorks;
