import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import MusicPlayerComponent from "@/components/ui/player";
import styles from '@/styles/player.module.scss';

interface Track {
    name: string;
    artist: string;
    cover: string;
    source: string;
    url: string;
    favorited: boolean;
}



const MusicPlayer: React.FC = () => {
    const [tracks, setTracks] = useState<Track[]>([
        { name: "Mekanın Sahibi", artist: "Norm Ender", cover: "src/assets/img/1.jpg", source: "src/assets/mp3/1.mp3", url: "https://y.qq.com/n/ryqq/songDetail/0038tY9N3dPrG5", favorited: true },
        { name: "Track 2", artist: "Artist 2", cover: "src/assets/img/2.jpg", source: "src/assets/mp3/2.mp3", url: "https://y.qq.com/n/ryqq/songDetail/0038tY9N3dPrG5", favorited: true },
        { name: "Track 3", artist: "Artist 3", cover: "src/assets/img/3.jpg", source: "src/assets/mp3/3.mp3", url: "https://y.qq.com/n/ryqq/songDetail/0038tY9N3dPrG5", favorited: true }
    ]);

    const [currentTrackIndex, setCurrentTrackIndex] = useState<number>(0);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [currentTime, setCurrentTime] = useState<string>("00:00");
    const [duration, setDuration] = useState<string>("00:00");
    const [barWidth, setBarWidth] = useState<string>("0%");

    const audioRef = useRef<HTMLAudioElement>(new Audio(tracks[currentTrackIndex].source));

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

        // 格式化时间为字符串
        const formattedDurmin = durmin < 10 ? `0${durmin}` : `${durmin}`;
        const formattedDursec = dursec < 10 ? `0${dursec}` : `${dursec}`;
        const formattedCurmin = curmin < 10 ? `0${curmin}` : `${curmin}`;
        const formattedCursec = cursec < 10 ? `0${cursec}` : `${cursec}`;

        setDuration(`${formattedDurmin}:${formattedDursec}`);
        setCurrentTime(`${formattedCurmin}:${formattedCursec}`);
    };

    // 更新进度条
    const updateBar = (x: number) => {
        const progressBar = document.querySelector('.progress__bar') as HTMLElement;
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
    const clickProgress = (e: React.MouseEvent<HTMLDivElement>) => {
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
            }, 300);

            return newIndex;
        });

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
            }, 300);

            return newIndex;
        });

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

                {/* 隐藏的元素 */}
                <div v-cloak></div>
            </div>

           
        </div>
    );
}

export default MusicPlayer;


/*
import React from 'react';
import ReactDOM from 'react-dom';
import MusicPlayer from './MusicPlayer'; // 确保路径正确

const rootElement = document.getElementById("app");
if (rootElement) {
   const root = ReactDOM.createRoot(rootElement);
   root.render(<MusicPlayer />);
}
*/