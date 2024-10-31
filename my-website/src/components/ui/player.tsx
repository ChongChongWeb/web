import { useState, useRef, useEffect } from "react";
import img1 from "../../assets/player/img/1.jpg";
import img2 from "../../assets/player/img/2.jpg";
import img3 from "../../assets/player/img/3.jpg";
import mp3_1 from "../../assets/player/mp3/1.mp3";
import mp3_2 from "../../assets/player/mp3/2.mp3";
import mp3_3 from "../../assets/player/mp3/3.mp3";
import "../../assets/player/player.css";

const Player = () => {
  const [tracks, setTracks] = useState([
    { name: "Eminem", artist: "Venom", cover: "https://y.qq.com/music/photo_new/T002R300x300M0000031VfPx2gRYPy_1.jpg?max_age=2592000", source: "src/assets/mp3/10.ogg", url: "https://y.qq.com/n/ryqq/songDetail/0038tY9N3dPrG5", favorited: true },
    { name: "弹壳", artist: "No more nice guy", cover: "https://y.qq.com/music/photo_new/T002R300x300M000002OI81S3zgKZq_1.jpg?max_age=2592000", source: "src/assets/mp3/11.mp3", url: "https://y.qq.com/n/ryqq/songDetail/002GgsOD31pOMo", favorited: true },
    { name: "Gai", artist: "盖哥调", cover: "https://y.qq.com/music/photo_new/T002R300x300M000004BapRx0lFUmF_1.jpg?max_age=2592000", source: "src/assets/mp3/12.mp3", url: "https://y.qq.com/n/ryqq/songDetail/000NiTou3GIkuO", favorited: true },
    { name: "C-Block/Gai", artist: "江湖流", cover: "https://y.qq.com/music/photo_new/T002R300x300M000002ILjM64c4PZy_1.jpg?max_age=2592000", source: "src/assets/mp3/13.mp3", url: "https://y.qq.com/n/ryqq/songDetail/000MNZsl0UUpF7", favorited: true },
    { name: "D-shine", artist: "一挑五", cover: "data:image/jpeg;base64,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", source: "src/assets/mp3/14.mp3", url: "data:image/jpeg;base64,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", favorited: true },
    { name: "mihimaru GT (大和美姬丸)", artist: "マスターピース (杰作)", cover: "https://y.qq.com/music/photo_new/T002R300x300M0000042zz3N1UYGBG_2.jpg?max_age=2592000", source: "src/assets/mp3/15.ogg", url: "https://y.qq.com/n/ryqq/songDetail/001MuRIY41kzKv", favorited: true },
  ]);

  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState("00:00");
  const [duration, setDuration] = useState("00:00");
  const [barWidth, setBarWidth] = useState("0%");

  const audioRef = useRef(new Audio(tracks[currentTrackIndex].source));

  // 获取当前曲目
  const currentTrack = tracks[currentTrackIndex];

  // 播放或暂停
  const play = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(error => console.error("播放失败:", error));
      audioRef.current.addEventListener('timeupdate', generateTime);
    }
    setIsPlaying(!isPlaying);
  };

  // 生成时间和进度条宽度
  const generateTime = () => {
    if (!audioRef.current.duration) return; // 防止 NaN
    let width = (100 / audioRef.current.duration) * audioRef.current.currentTime;
    setBarWidth(`${width}%`);

    let durmin = Math.floor(audioRef.current.duration / 60);
    let dursec = Math.floor(audioRef.current.duration % 60);
    let curmin = Math.floor(audioRef.current.currentTime / 60);
    let cursec = Math.floor(audioRef.current.currentTime % 60);

    // 格式化时间
    if (durmin < 10) durmin = "0" + durmin;
    if (dursec < 10) dursec = "0" + dursec;
    if (curmin < 10) curmin = "0" + curmin;
    if (cursec < 10) cursec = "0" + cursec;

    setDuration(`${durmin}:${dursec}`);
    setCurrentTime(`${curmin}:${cursec}`);
  };

  // 更新进度条
  const updateBar = (x) => {
    const progressBar = document.querySelector('.progress__bar');
    const maxduration = audioRef.current.duration;
    const position = x - progressBar.getBoundingClientRect().left;
    let percentage = (100 * position) / progressBar.offsetWidth;

    if (percentage > 100) percentage = 100;
    if (percentage < 0) percentage = 0;

    setBarWidth(`${percentage}%`);
    audioRef.current.currentTime = (maxduration * percentage) / 100;

    if (!isPlaying) {
      audioRef.current.play().catch(error => console.error("播放失败:", error));
      setIsPlaying(true);
      audioRef.current.addEventListener('timeupdate', generateTime);
    }
  };

  // 点击进度条
  const clickProgress = (e) => {
    updateBar(e.pageX);
  };

  // 重置播放器
  const resetPlayer = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0; // 重置当前时间
    setBarWidth("0%"); // 重置进度条宽度
    setCurrentTime("00:00"); // 重置当前时间显示
  };

  // 上一曲
  const prevTrack = () => {
    resetPlayer(); // 重置播放器
    setCurrentTrackIndex((prevIndex) => {
      const newIndex = prevIndex > 0 ? prevIndex - 1 : tracks.length - 1;
      audioRef.current.src = tracks[newIndex].source; // 更新音频源

      // 使用 setTimeout 延迟播放，避免 DOMException 错误
      setTimeout(() => {
        audioRef.current.play().catch(error => console.error("播放失败:", error)); // 自动播放新曲目
        audioRef.current.addEventListener('timeupdate', generateTime);
        setIsPlaying(true);
      }, 300);

      return newIndex;
    });

    if (isPlaying) {
      audioRef.current.addEventListener('timeupdate', generateTime);
    }
  };

  // 下一曲
  const nextTrack = () => {
    resetPlayer(); // 重置播放器
    setCurrentTrackIndex((prevIndex) => {
      const newIndex = prevIndex < tracks.length - 1 ? prevIndex + 1 : 0;
      audioRef.current.src = tracks[newIndex].source; // 更新音频源

      // 使用 setTimeout 延迟播放，避免 DOMException 错误
      setTimeout(() => {
        audioRef.current.play().catch(error => console.error("播放失败:", error)); // 自动播放新曲目
        audioRef.current.addEventListener('timeupdate', generateTime);
        setIsPlaying(true);
      }, 300);

      return newIndex;
    });

    if (isPlaying) {
      audioRef.current.addEventListener('timeupdate', generateTime);
    }
  };

  // 收藏功能
  const toggleFavorite = () => {
    setTracks(prevTracks => {
      const newTracks = [...prevTracks];
      newTracks[currentTrackIndex].favorited = !newTracks[currentTrackIndex].favorited; // 切换收藏状态
      return newTracks;
    });
  };

  useEffect(() => {
    // 当 currentTrackIndex 改变时，更新音频源并重置播放器
    audioRef.current.src = tracks[currentTrackIndex].source;

    return () => {
      audioRef.current.pause();
      audioRef.current.removeEventListener('timeupdate', generateTime);
    };
  }, [currentTrackIndex]);

  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" hidden xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
          <symbol id="icon-heart-o" viewBox="0 0 32 32">
            <title>icon-heart-o</title>
            <path
              d="M22.88 1.952c-2.72 0-5.184 1.28-6.88 3.456-1.696-2.176-4.16-3.456-6.88-3.456-4.48 0-9.024 3.648-9.024 10.592 0 7.232 7.776 12.704 15.072 17.248 0.256 0.16 0.544 0.256 0.832 0.256s0.576-0.096 0.832-0.256c7.296-4.544 15.072-10.016 15.072-17.248 0-6.944-4.544-10.592-9.024-10.592zM16 26.56c-4.864-3.072-12.736-8.288-12.736-14.016 0-5.088 3.040-7.424 5.824-7.424 2.368 0 4.384 1.504 5.408 4.032 0.256 0.608 0.832 0.992 1.472 0.992s1.248-0.384 1.472-0.992c1.024-2.528 3.040-4.032 5.408-4.032 2.816 0 5.824 2.304 5.824 7.424 0.064 5.728-7.808 10.976-12.672 14.016z">
            </path>
            <path
              d="M16 30.144c-0.32 0-0.64-0.096-0.896-0.256-7.296-4.576-15.104-10.048-15.104-17.344 0-7.008 4.576-10.688 9.12-10.688 2.656 0 5.152 1.216 6.88 3.392 1.728-2.144 4.224-3.392 6.88-3.392 4.544 0 9.12 3.68 9.12 10.688 0 7.296-7.808 12.768-15.104 17.344-0.256 0.16-0.576 0.256-0.896 0.256zM9.12 2.048c-4.448 0-8.928 3.616-8.928 10.496 0 7.168 7.744 12.64 15.008 17.152 0.48 0.288 1.12 0.288 1.568 0 7.264-4.544 15.008-9.984 15.008-17.152 0-6.88-4.48-10.496-8.928-10.496-2.656 0-5.088 1.216-6.816 3.392l-0.032 0.128-0.064-0.096c-1.696-2.176-4.192-3.424-6.816-3.424zM16 26.688l-0.064-0.032c-3.808-2.4-12.768-8.032-12.768-14.112 0-5.152 3.072-7.52 5.952-7.52 2.432 0 4.48 1.536 5.504 4.096 0.224 0.576 0.768 0.928 1.376 0.928s1.152-0.384 1.376-0.928c1.024-2.56 3.072-4.096 5.504-4.096 2.848 0 5.952 2.336 5.952 7.52 0 6.080-8.96 11.712-12.768 14.112l-0.064 0.032zM9.12 5.248c-2.752 0-5.728 2.304-5.728 7.328 0 5.952 8.8 11.488 12.608 13.92 3.808-2.4 12.608-7.968 12.608-13.92 0-5.024-2.976-7.328-5.728-7.328-2.336 0-4.32 1.472-5.312 3.968-0.256 0.64-0.864 1.056-1.568 1.056s-1.312-0.416-1.568-1.056c-0.992-2.496-2.976-3.968-5.312-3.968z">
            </path>
            <path
              d="M6.816 20.704c0.384 0.288 0.512 0.704 0.48 1.12 0.224 0.256 0.384 0.608 0.384 0.96 0 0.032 0 0.032 0 0.064 0.16 0.128 0.32 0.256 0.48 0.384 0.128 0.064 0.256 0.16 0.384 0.256 0.096 0.064 0.192 0.16 0.256 0.224 0.8 0.576 1.632 1.12 2.496 1.664 0.416 0.128 0.8 0.256 1.056 0.32 1.984 0.576 4.064 0.8 6.112 0.928 2.688-1.92 5.312-3.904 8-5.792 0.896-1.088 1.92-2.080 2.912-3.104v-7.552c-0.096-0.128-0.192-0.288-0.32-0.416-0.768-1.024-1.184-2.176-1.6-3.296-0.768-0.416-1.536-0.8-2.336-1.12-0.128-0.064-0.256-0.096-0.384-0.16h-21.568v12.992c1.312 0.672 2.496 1.6 3.648 2.528z">
            </path>
          </symbol>
          <symbol id="icon-heart" viewBox="0 0 32 32">
            <title>icon-heart</title>
            <path
              d="M22.88 1.952c-2.72 0-5.184 1.28-6.88 3.456-1.696-2.176-4.16-3.456-6.88-3.456-4.48 0-9.024 3.648-9.024 10.592 0 7.232 7.776 12.704 15.072 17.248 0.256 0.16 0.544 0.256 0.832 0.256s0.576-0.096 0.832-0.256c7.296-4.544 15.072-10.016 15.072-17.248 0-6.944-4.544-10.592-9.024-10.592zM16 26.56c-4.864-3.072-12.736-8.288-12.736-14.016 0-5.088 3.040-7.424 5.824-7.424 2.368 0 4.384 1.504 5.408 4.032 0.256 0.608 0.832 0.992 1.472 0.992s1.248-0.384 1.472-0.992c1.024-2.528 3.040-4.032 5.408-4.032 2.816 0 5.824 2.304 5.824 7.424 0.064 5.728-7.808 10.976-12.672 14.016z">
            </path>
            <path
              d="M16 30.144c-0.32 0-0.64-0.096-0.896-0.256-7.296-4.576-15.104-10.048-15.104-17.344 0-7.008 4.576-10.688 9.12-10.688 2.656 0 5.152 1.216 6.88 3.392 1.728-2.144 4.224-3.392 6.88-3.392 4.544 0 9.12 3.68 9.12 10.688 0 7.296-7.808 12.768-15.104 17.344-0.256 0.16-0.576 0.256-0.896 0.256zM9.12 2.048c-4.448 0-8.928 3.616-8.928 10.496 0 7.168 7.744 12.64 15.008 17.152 0.48 0.288 1.12 0.288 1.568 0 7.264-4.544 15.008-9.984 15.008-17.152 0-6.88-4.48-10.496-8.928-10.496-2.656 0-5.088 1.216-6.816 3.392l-0.032 0.128-0.064-0.096c-1.696-2.176-4.192-3.424-6.816-3.424zM16 26.688l-0.064-0.032c-3.808-2.4-12.768-8.032-12.768-14.112 0-5.152 3.072-7.52 5.952-7.52 2.432 0 4.48 1.536 5.504 4.096 0.224 0.576 0.768 0.928 1.376 0.928s1.152-0.384 1.376-0.928c1.024-2.56 3.072-4.096 5.504-4.096 2.848 0 5.952 2.336 5.952 7.52 0 6.080-8.96 11.712-12.768 14.112l-0.064 0.032zM9.12 5.248c-2.752 0-5.728 2.304-5.728 7.328 0 5.952 8.8 11.488 12.608 13.92 3.808-2.4 12.608-7.968 12.608-13.92 0-5.024-2.976-7.328-5.728-7.328-2.336 0-4.32 1.472-5.312 3.968-0.256 0.64-0.864 1.056-1.568 1.056s-1.312-0.416-1.568-1.056c-0.992-2.496-2.976-3.968-5.312-3.968z">
            </path>
          </symbol>
          <symbol id="icon-infinity" viewBox="0 0 32 32">
            <title>icon-infinity</title>
            <path
              d="M29.312 20.832c-1.28 1.28-3.008 1.984-4.832 1.984s-3.52-0.704-4.832-1.984c-0.032-0.032-0.224-0.224-0.256-0.256v0 1.28c0 0.448-0.352 0.8-0.8 0.8s-0.8-0.352-0.8-0.8v-3.168c0-0.448 0.352-0.8 0.8-0.8h3.168c0.448 0 0.8 0.352 0.8 0.8s-0.352 0.8-0.8 0.8h-1.28c0.032 0.032 0.224 0.224 0.256 0.256 0.992 0.992 2.304 1.536 3.68 1.536 1.408 0 2.72-0.544 3.68-1.536 0.992-0.992 1.536-2.304 1.536-3.68s-0.544-2.72-1.536-3.68c-0.992-0.992-2.304-1.536-3.68-1.536-1.408 0-2.72 0.544-3.68 1.536l-8.416 8.448c-1.312 1.312-3.072 1.984-4.832 1.984s-3.488-0.672-4.832-1.984c-2.656-2.656-2.656-6.976 0-9.632s6.976-2.656 9.632 0c0.032 0.032 0.16 0.16 0.192 0.192l0.064 0.064v-1.28c0-0.448 0.352-0.8 0.8-0.8s0.8 0.352 0.8 0.8v3.168c0 0.448-0.352 0.8-0.8 0.8h-3.168c-0.448 0-0.8-0.352-0.8-0.8s0.352-0.8 0.8-0.8h1.28l-0.096-0.064c-0.032-0.032-0.16-0.16-0.192-0.192-0.992-0.992-2.304-1.536-3.68-1.536s-2.72 0.544-3.68 1.536c-2.048 2.048-2.048 5.344 0 7.392 0.992 0.992 2.304 1.536 3.68 1.536s2.72-0.544 3.68-1.536l8.512-8.512c1.28-1.28 3.008-1.984 4.832-1.984s3.52 0.704 4.832 1.984c2.624 2.656 2.624 7.008-0.032 9.664z">
            </path>
            <path
              d="M24.512 23.488c-1.6 0-3.136-0.512-4.416-1.44-0.128 0.704-0.736 1.248-1.44 1.248-0.8 0-1.472-0.672-1.472-1.472v-3.168c0-0.8 0.672-1.472 1.472-1.472h3.168c0.8 0 1.472 0.672 1.472 1.472 0 0.608-0.384 1.152-0.928 1.376 0.64 0.352 1.376 0.544 2.144 0.544 1.216 0 2.368-0.48 3.2-1.344 0.864-0.864 1.344-1.984 1.344-3.2s-0.48-2.368-1.344-3.2c-0.864-0.864-1.984-1.344-3.2-1.344s-2.368 0.48-3.2 1.344l-8.512 8.48c-1.408 1.408-3.296 2.176-5.312 2.176s-3.872-0.768-5.312-2.176c-2.912-2.912-2.912-7.68 0-10.592 1.408-1.408 3.296-2.176 5.312-2.176 0 0 0 0 0 0 1.6 0 3.136 0.512 4.416 1.44 0.128-0.704 0.736-1.248 1.472-1.248 0.8 0 1.472 0.672 1.472 1.472v3.168c0 0.8-0.672 1.472-1.472 1.472h-3.168c-0.8 0-1.472-0.672-1.472-1.472 0-0.608 0.384-1.152 0.928-1.376-0.64-0.352-1.376-0.544-2.144-0.544-1.216 0-2.368 0.48-3.2 1.344-1.76 1.76-1.76 4.64 0 6.432 0.864 0.864 2.016 1.344 3.2 1.344 1.216 0 2.368-0.48 3.2-1.344l8.48-8.544c1.408-1.408 3.296-2.208 5.312-2.208s3.872 0.768 5.312 2.208c1.408 1.408 2.176 3.296 2.176 5.312s-0.768 3.872-2.208 5.312v0c0 0 0 0 0 0-1.408 1.408-3.296 2.176-5.28 2.176zM18.752 18.912l1.44 1.44c1.152 1.152 2.688 1.792 4.32 1.792s3.168-0.64 4.32-1.792v0c1.152-1.152 1.792-2.688 1.792-4.32s-0.64-3.168-1.792-4.32c-1.152-1.152-2.688-1.792-4.352-1.792-1.632 0-3.168 0.64-4.32 1.792l-8.48 8.448c-1.12 1.12-2.592 1.728-4.16 1.728s-3.072-0.608-4.16-1.728c-2.304-2.304-2.304-6.048 0-8.352 1.12-1.12 2.592-1.728 4.16-1.728s3.072 0.608 4.16 1.728l1.44 1.408h-2.912c-0.064 0-0.128 0.064-0.128 0.128s0.064 0.128 0.128 0.128h3.168c0.064 0 0.128-0.064 0.128-0.128v-3.168c0-0.064-0.064-0.128-0.128-0.128s-0.128 0.064-0.128 0.128v2.912l-1.408-1.408c-1.152-1.152-2.688-1.792-4.352-1.792-1.632 0-3.168 0.64-4.32 1.792-2.4 2.4-2.4 6.272 0 8.672 1.152 1.152 2.688 1.792 4.32 1.792s3.168-0.64 4.32-1.792l8.512-8.512c1.12-1.12 2.592-1.728 4.16-1.728s3.072 0.608 4.16 1.728c1.12 1.12 1.728 2.592 1.728 4.16s-0.608 3.072-1.728 4.16c-1.12 1.12-2.592 1.728-4.16 1.728s-3.072-0.608-4.16-1.728l-1.408-1.408h2.912c0.064 0 0.128-0.064 0.128-0.128s-0.064-0.128-0.128-0.128h-3.168c-0.064 0-0.128 0.064-0.128 0.128v3.168c0 0.064 0.064 0.128 0.128 0.128s0.128-0.064 0.128-0.128v-2.88z">
            </path>
          </symbol>
          <symbol id="icon-pause" viewBox="0 0 32 32">
            <title>icon-pause</title>
            <path
              d="M16 0.32c-8.64 0-15.68 7.040-15.68 15.68s7.040 15.68 15.68 15.68 15.68-7.040 15.68-15.68-7.040-15.68-15.68-15.68zM16 29.216c-7.296 0-13.216-5.92-13.216-13.216s5.92-13.216 13.216-13.216 13.216 5.92 13.216 13.216-5.92 13.216-13.216 13.216z">
            </path>
            <path
              d="M16 32c-8.832 0-16-7.168-16-16s7.168-16 16-16 16 7.168 16 16-7.168 16-16 16zM16 0.672c-8.448 0-15.328 6.88-15.328 15.328s6.88 15.328 15.328 15.328c8.448 0 15.328-6.88 15.328-15.328s-6.88-15.328-15.328-15.328zM16 29.568c-7.488 0-13.568-6.080-13.568-13.568s6.080-13.568 13.568-13.568c7.488 0 13.568 6.080 13.568 13.568s-6.080 13.568-13.568 13.568zM16 3.104c-7.104 0-12.896 5.792-12.896 12.896s5.792 12.896 12.896 12.896c7.104 0 12.896-5.792 12.896-12.896s-5.792-12.896-12.896-12.896z">
            </path>
            <path
              d="M12.16 22.336v0c-0.896 0-1.6-0.704-1.6-1.6v-9.472c0-0.896 0.704-1.6 1.6-1.6v0c0.896 0 1.6 0.704 1.6 1.6v9.504c0 0.864-0.704 1.568-1.6 1.568z">
            </path>
            <path
              d="M19.84 22.336v0c-0.896 0-1.6-0.704-1.6-1.6v-9.472c0-0.896 0.704-1.6 1.6-1.6v0c0.896 0 1.6 0.704 1.6 1.6v9.504c0 0.864-0.704 1.568-1.6 1.568z">
            </path>
          </symbol>
          <symbol id="icon-play" viewBox="0 0 32 32">
            <title>icon-play</title>
            <path
              d="M21.216 15.168l-7.616-5.088c-0.672-0.416-1.504 0.032-1.504 0.832v10.176c0 0.8 0.896 1.248 1.504 0.832l7.616-5.088c0.576-0.416 0.576-1.248 0-1.664z">
            </path>
            <path
              d="M13.056 22.4c-0.224 0-0.416-0.064-0.608-0.16-0.448-0.224-0.704-0.672-0.704-1.152v-10.176c0-0.48 0.256-0.928 0.672-1.152s0.928-0.224 1.344 0.064l7.616 5.088c0.384 0.256 0.608 0.672 0.608 1.088s-0.224 0.864-0.608 1.088l-7.616 5.088c-0.192 0.16-0.448 0.224-0.704 0.224zM13.056 10.272c-0.096 0-0.224 0.032-0.32 0.064-0.224 0.128-0.352 0.32-0.352 0.576v10.176c0 0.256 0.128 0.48 0.352 0.576 0.224 0.128 0.448 0.096 0.64-0.032l7.616-5.088c0.192-0.128 0.288-0.32 0.288-0.544s-0.096-0.416-0.288-0.544l-7.584-5.088c-0.096-0.064-0.224-0.096-0.352-0.096z">
            </path>
            <path
              d="M16 0.32c-8.64 0-15.68 7.040-15.68 15.68s7.040 15.68 15.68 15.68 15.68-7.040 15.68-15.68-7.040-15.68-15.68-15.68zM16 29.216c-7.296 0-13.216-5.92-13.216-13.216s5.92-13.216 13.216-13.216 13.216 5.92 13.216 13.216-5.92 13.216-13.216 13.216z">
            </path>
            <path
              d="M16 32c-8.832 0-16-7.168-16-16s7.168-16 16-16 16 7.168 16 16-7.168 16-16 16zM16 0.672c-8.448 0-15.328 6.88-15.328 15.328s6.88 15.328 15.328 15.328c8.448 0 15.328-6.88 15.328-15.328s-6.88-15.328-15.328-15.328zM16 29.568c-7.488 0-13.568-6.080-13.568-13.568s6.080-13.568 13.568-13.568c7.488 0 13.568 6.080 13.568 13.568s-6.080 13.568-13.568 13.568zM16 3.104c-7.104 0-12.896 5.792-12.896 12.896s5.792 12.896 12.896 12.896c7.104 0 12.896-5.792 12.896-12.896s-5.792-12.896-12.896-12.896z">
            </path>
          </symbol>
          <symbol id="icon-link" viewBox="0 0 32 32">
            <title>link</title>
            <path
              d="M23.584 17.92c0 0.864 0 1.728 0 2.56 0 1.312 0 2.656 0 3.968 0 0.352 0.032 0.736-0.032 1.12 0.032-0.16 0.032-0.288 0.064-0.448-0.032 0.224-0.096 0.448-0.16 0.64 0.064-0.128 0.128-0.256 0.16-0.416-0.096 0.192-0.192 0.384-0.32 0.576 0.096-0.128 0.16-0.224 0.256-0.352-0.128 0.16-0.288 0.32-0.48 0.48 0.128-0.096 0.224-0.16 0.352-0.256-0.192 0.128-0.352 0.256-0.576 0.32 0.128-0.064 0.256-0.128 0.416-0.16-0.224 0.096-0.416 0.16-0.64 0.16 0.16-0.032 0.288-0.032 0.448-0.064-0.256 0.032-0.512 0.032-0.768 0.032-0.448 0-0.896 0-1.312 0-1.472 0-2.976 0-4.448 0-1.824 0-3.616 0-5.44 0-1.568 0-3.104 0-4.672 0-0.736 0-1.44 0-2.176 0-0.128 0-0.224 0-0.352-0.032 0.16 0.032 0.288 0.032 0.448 0.064-0.224-0.032-0.448-0.096-0.64-0.16 0.128 0.064 0.256 0.128 0.416 0.16-0.192-0.096-0.384-0.192-0.576-0.32 0.128 0.096 0.224 0.16 0.352 0.256-0.16-0.128-0.32-0.288-0.48-0.48 0.096 0.128 0.16 0.224 0.256 0.352-0.128-0.192-0.256-0.352-0.32-0.576 0.064 0.128 0.128 0.256 0.16 0.416-0.096-0.224-0.16-0.416-0.16-0.64 0.032 0.16 0.032 0.288 0.064 0.448-0.032-0.256-0.032-0.512-0.032-0.768 0-0.448 0-0.896 0-1.312 0-1.472 0-2.976 0-4.448 0-1.824 0-3.616 0-5.44 0-1.568 0-3.104 0-4.672 0-0.736 0-1.44 0-2.176 0-0.128 0-0.224 0.032-0.352-0.032 0.16-0.032 0.288-0.064 0.448 0.032-0.224 0.096-0.448 0.16-0.64-0.064 0.128-0.128 0.256-0.16 0.416 0.096-0.192 0.192-0.384 0.32-0.576-0.096 0.128-0.16 0.224-0.256 0.352 0.128-0.16 0.288-0.32 0.48-0.48-0.128 0.096-0.224 0.16-0.352 0.256 0.192-0.128 0.352-0.256 0.576-0.32-0.128 0.064-0.256 0.128-0.416 0.16 0.224-0.096 0.416-0.16 0.64-0.16-0.16 0.032-0.288 0.032-0.448 0.064 0.48-0.064 0.96-0.032 1.44-0.032 0.992 0 1.952 0 2.944 0 1.216 0 2.432 0 3.616 0 1.056 0 2.112 0 3.168 0 0.512 0 1.024 0 1.536 0 0 0 0 0 0.032 0 0.448 0 0.896-0.192 1.184-0.48s0.512-0.768 0.48-1.184c-0.032-0.448-0.16-0.896-0.48-1.184s-0.736-0.48-1.184-0.48c-0.64 0-1.28 0-1.92 0-1.408 0-2.816 0-4.224 0-1.44 0-2.848 0-4.256 0-0.672 0-1.344 0-2.016 0-0.736 0-1.472 0.192-2.112 0.576s-1.216 0.96-1.568 1.6c-0.384 0.64-0.544 1.376-0.544 2.144 0 0.672 0 1.376 0 2.048 0 1.28 0 2.56 0 3.84 0 1.504 0 3.040 0 4.544 0 1.408 0 2.848 0 4.256 0 0.992 0 1.952 0 2.944 0 0.224 0 0.448 0 0.64 0 0.864 0.224 1.76 0.768 2.464 0.16 0.192 0.288 0.384 0.48 0.576s0.384 0.352 0.608 0.512c0.32 0.224 0.64 0.384 1.024 0.512 0.448 0.16 0.928 0.224 1.408 0.224 0.16 0 0.32 0 0.48 0 0.896 0 1.792 0 2.72 0 1.376 0 2.784 0 4.16 0 1.536 0 3.040 0 4.576 0 1.312 0 2.656 0 3.968 0 0.768 0 1.536 0 2.336 0 0.416 0 0.832-0.032 1.248-0.128 1.504-0.32 2.784-1.6 3.104-3.104 0.128-0.544 0.128-1.056 0.128-1.568 0-0.608 0-1.184 0-1.792 0-1.408 0-2.816 0-4.224 0-0.256 0-0.512 0-0.768 0-0.448-0.192-0.896-0.48-1.184s-0.768-0.512-1.184-0.48c-0.448 0.032-0.896 0.16-1.184 0.48-0.384 0.384-0.576 0.768-0.576 1.248v0z">
            </path>
            <path
              d="M32 11.232c0-0.8 0-1.568 0-2.368 0-1.248 0-2.528 0-3.776 0-0.288 0-0.576 0-0.864 0-0.896-0.768-1.696-1.696-1.696-0.8 0-1.568 0-2.368 0-1.248 0-2.528 0-3.776 0-0.288 0-0.576 0-0.864 0-0.448 0-0.896 0.192-1.184 0.48s-0.512 0.768-0.48 1.184c0.032 0.448 0.16 0.896 0.48 1.184s0.736 0.48 1.184 0.48c0.8 0 1.568 0 2.368 0 1.248 0 2.528 0 3.776 0 0.288 0 0.576 0 0.864 0-0.576-0.576-1.12-1.12-1.696-1.696 0 0.8 0 1.568 0 2.368 0 1.248 0 2.528 0 3.776 0 0.288 0 0.576 0 0.864 0 0.448 0.192 0.896 0.48 1.184s0.768 0.512 1.184 0.48c0.448-0.032 0.896-0.16 1.184-0.48 0.352-0.256 0.544-0.64 0.544-1.12v0z">
            </path>
            <path
              d="M15.040 21.888c0.16-0.16 0.288-0.288 0.448-0.448 0.384-0.384 0.8-0.8 1.184-1.184 0.608-0.608 1.184-1.184 1.792-1.792 0.704-0.704 1.44-1.44 2.176-2.176 0.8-0.8 1.568-1.568 2.368-2.368s1.6-1.6 2.4-2.4c0.736-0.736 1.504-1.504 2.24-2.24 0.64-0.64 1.248-1.248 1.888-1.888 0.448-0.448 0.896-0.896 1.344-1.344 0.224-0.224 0.448-0.416 0.64-0.64 0 0 0.032-0.032 0.032-0.032 0.32-0.32 0.48-0.768 0.48-1.184s-0.192-0.896-0.48-1.184c-0.32-0.288-0.736-0.512-1.184-0.48-0.512 0.032-0.928 0.16-1.248 0.48-0.16 0.16-0.288 0.288-0.448 0.448-0.384 0.384-0.8 0.8-1.184 1.184-0.608 0.608-1.184 1.184-1.792 1.792-0.704 0.704-1.44 1.44-2.176 2.176-0.8 0.8-1.568 1.568-2.368 2.368s-1.6 1.6-2.4 2.4c-0.736 0.736-1.504 1.504-2.24 2.24-0.64 0.64-1.248 1.248-1.888 1.888-0.448 0.448-0.896 0.896-1.344 1.344-0.224 0.224-0.448 0.416-0.64 0.64 0 0-0.032 0.032-0.032 0.032-0.32 0.32-0.48 0.768-0.48 1.184s0.192 0.896 0.48 1.184c0.32 0.288 0.736 0.512 1.184 0.48 0.48 0 0.928-0.16 1.248-0.48v0z">
            </path>
          </symbol>
          <symbol id="icon-next" viewBox="0 0 32 32">
            <title>next</title>
            <path
              d="M2.304 18.304h14.688l-4.608 4.576c-0.864 0.864-0.864 2.336 0 3.232 0.864 0.864 2.336 0.864 3.232 0l8.448-8.48c0.864-0.864 0.864-2.336 0-3.232l-8.448-8.448c-0.448-0.448-1.056-0.672-1.632-0.672s-1.184 0.224-1.632 0.672c-0.864 0.864-0.864 2.336 0 3.232l4.64 4.576h-14.688c-1.248 0-2.304 0.992-2.304 2.272s1.024 2.272 2.304 2.272z">
            </path>
            <path
              d="M29.696 26.752c1.248 0 2.304-1.024 2.304-2.304v-16.928c0-1.248-1.024-2.304-2.304-2.304s-2.304 1.024-2.304 2.304v16.928c0.064 1.28 1.056 2.304 2.304 2.304z">
            </path>
          </symbol>
          <symbol id="icon-prev" viewBox="0 0 32 32">
            <title>prev</title>
            <path
              d="M29.696 13.696h-14.688l4.576-4.576c0.864-0.864 0.864-2.336 0-3.232-0.864-0.864-2.336-0.864-3.232 0l-8.448 8.48c-0.864 0.864-0.864 2.336 0 3.232l8.448 8.448c0.448 0.448 1.056 0.672 1.632 0.672s1.184-0.224 1.632-0.672c0.864-0.864 0.864-2.336 0-3.232l-4.608-4.576h14.688c1.248 0 2.304-1.024 2.304-2.304s-1.024-2.24-2.304-2.24z">
            </path>
            <path
              d="M2.304 5.248c-1.248 0-2.304 1.024-2.304 2.304v16.928c0 1.248 1.024 2.304 2.304 2.304s2.304-1.024 2.304-2.304v-16.928c-0.064-1.28-1.056-2.304-2.304-2.304z">
            </path>
          </symbol>
        </defs>
      </svg>
      <div className="wrapper">
        <div className="player">
          <div className="player__top">
            <div className="player-cover">
              <div className="player-cover__item" style={{ backgroundImage: `url(${currentTrack.cover})` }}></div>
            </div>
            <div className="player-controls">
              <div className={`player-controls__item -favorite ${currentTrack.favorited ? 'active' : ''}`} onClick={toggleFavorite}>
                <svg className="icon"><use xlinkHref="#icon-heart-o"></use></svg>
              </div>
              <a href={currentTrack.url} target="_blank" rel="noopener noreferrer" className="player-controls__item">
                <svg className="icon"><use xlinkHref="#icon-link"></use></svg>
              </a>
              <div className="player-controls__item" onClick={prevTrack}>
                <svg className="icon"><use xlinkHref="#icon-prev"></use></svg>
              </div>
              <div className="player-controls__item" onClick={nextTrack}>
                <svg className="icon"><use xlinkHref="#icon-next"></use></svg>
              </div>
              <div className="player-controls__item -xl js-play" onClick={play}>
                <svg className="icon"><use xlinkHref={isPlaying ? "#icon-pause" : "#icon-play"}></use></svg>
              </div>
            </div>
          </div>

          <div className="progress">
            <div className="progress__top">
              {currentTrack && (
                <div className="album-info">
                  <div className="album-info__name">{currentTrack.artist}</div>
                  <div className="album-info__track">{currentTrack.name}</div>
                </div>
              )}
              {/* 显示时长 */}
              <div className="progress__duration">{duration}</div>
            </div>

            {/* 点击进度条 */}
            <div className="progress__bar" onClick={clickProgress}>
              {/* 动态宽度 */}
              <div className="progress__current" style={{ width: barWidth }}></div>
            </div>

            {/* 当前时间 */}
            <div className="progress__time">{currentTime}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Player;
