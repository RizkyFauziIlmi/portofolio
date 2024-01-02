import {
  Disc3,
  Music,
  Pause,
  Play,
  Repeat,
  Shuffle,
  SkipBack,
  SkipForward,
} from "lucide-react";
import { Slider } from "@/components/ui/slider";
import ReactPlayer from "react-player";
import { useBoolean } from "usehooks-ts";
import { Button } from "../ui/button";
import React, { useEffect, useRef, useState } from "react";
import { OnProgressProps } from "react-player/base";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

interface VideoData {
  title: string;
  description?: string;
  link: string;
  artist: string;
  thumbnail: string;
}

export const MusicHobbyContent = () => {
  const play = useBoolean(true);
  const seek = useBoolean(false);
  const audioOnly = useBoolean(true);
  const playerRef = useRef<ReactPlayer>(null);
  const [progressState, setProgressState] = useState<OnProgressProps>({
    loaded: 0,
    loadedSeconds: 0,
    played: 0,
    playedSeconds: 0,
  });
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const videoUrls: VideoData[] = [
    {
      title: "TULUS - Hati-Hati di Jalan (Official Lyric Video)",
      thumbnail:
        "https://i.ytimg.com/vi/_N6vSc_mT6I/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDNnjDgSWIKHltC_WHkW6ZsNSLKwQ",
      link: "https://www.youtube.com/watch?v=_N6vSc_mT6I",
      artist: "Tulus",
    },
    {
      title: "TULUS - Monokrom (Official Music Video)",
      thumbnail:
        "https://i.ytimg.com/vi/QqJ-Vp8mvbk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAXMC7DktlvXdktxePlhMCIHSmFIg",
      link: "https://www.youtube.com/watch?v=QqJ-Vp8mvbk",
      artist: "Tulus",
    },
    {
      title: "TULUS - Pamit (Official Music Video)",
      thumbnail:
        "https://i.ytimg.com/vi/G2-ZC9NpDBg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBS9D6GiYPH-lDWgrKLok6-bYYXKg",
      link: "https://www.youtube.com/watch?v=G2-ZC9NpDBg",
      artist: "Tulus",
    },
    {
      title: "TULUS - Ruang Sendiri (Official Music Video)",
      thumbnail:
        "https://i.ytimg.com/vi/c0p-61mLUGw/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAJxcgbB5_9Zyj4MYV26zIiSloYhw",
      link: "https://www.youtube.com/watch?v=c0p-61mLUGw",
      artist: "Tulus",
    },
    {
      title: "TULUS - Interaksi (Official Lyric Video)",
      thumbnail:
        "https://i.ytimg.com/vi/GIy9ZbH0sHo/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA6cVk5_Zk1KlivWtK4SfU8DjUUKQ",
      link: "https://www.youtube.com/watch?v=GIy9ZbH0sHo",
      artist: "Tulus",
    },
    {
      title: "TULUS - Teman Hidup (Official Music Video)",
      thumbnail:
        "https://i.ytimg.com/vi/dt4Ueda_h6Y/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDqxDcgJ_BxIsHhEVfJdeoHPtkoRw",
      link: "https://www.youtube.com/watch?v=dt4Ueda_h6Y",
      artist: "Tulus",
    },
    {
      title: "TULUS - Jangan Cintai Aku Apa Adanya (Official Music Video)",
      thumbnail:
        "https://i.ytimg.com/vi/5L1RVCtL1D0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDwE9oD_hGIPK3W8L8HohPXJh8CzQ",
      link: "https://www.youtube.com/watch?v=5L1RVCtL1D0",
      artist: "Tulus",
    },
    {
      title: "TULUS - Diri (Official Lyric Video)",
      thumbnail:
        "https://i.ytimg.com/vi/fsGcUWiylW8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCp6DAnjH-Mh9M3lqq_ilD2zgMThg",
      link: "https://www.youtube.com/watch?v=fsGcUWiylW8",
      artist: "Tulus",
    },
    {
      title: "TULUS - Sepatu (Official Music Video)",
      thumbnail:
        "https://i.ytimg.com/vi/DYbSp-B-8AM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCaNnyrbThNO3ylDxe3uV4-_RaKnw",
      link: "https://www.youtube.com/watch?v=DYbSp-B-8AM",
      artist: "Tulus",
    },
    {
      title: "TULUS - Sewindu (Official Music Video)",
      thumbnail:
        "https://i.ytimg.com/vi/wpst_4m_c-E/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLChnBLzO6KKWEO2K0gJeK3Px9FriQ",
      link: "https://www.youtube.com/watch?v=wpst_4m_c-E",
      artist: "Tulus",
    },
    {
      title: "TULUS - Gajah (Official Music Video)",
      thumbnail:
        "https://i.ytimg.com/vi/I-el8UadDc4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCCkttVp9DKzFpj3p_icvemmxui7g",
      link: "https://www.youtube.com/watch?v=I-el8UadDc4",
      artist: "Tulus",
    },
    {
      title: "TULUS - Jatuh Suka (Official Lyric Video)",
      thumbnail:
        "https://i.ytimg.com/vi/2uJut6USftQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBtagM3bfoswKbO81TBopsadB1oUA",
      link: "https://www.youtube.com/watch?v=2uJut6USftQ",
      artist: "Tulus",
    },
    {
      title: "TULUS - Tukar Jiwa (Official Music Video)",
      thumbnail:
        "https://i.ytimg.com/vi/aHPUWgYgees/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA2j89IFkBSA70sGH091nTBOIYiLw",
      link: "https://www.youtube.com/watch?v=aHPUWgYgees",
      artist: "Tulus",
    },
    {
      title: "TULUS - Langit Abu-abu (Official Lyric Video)",
      thumbnail:
        "https://i.ytimg.com/vi/CVI6SOuPAAw/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDZx2P0EaafqdJeMRjhu345aEAwQg",
      link: "https://www.youtube.com/watch?v=CVI6SOuPAAw",
      artist: "Tulus",
    },
    {
      title: "TULUS - Labirin (Official Music Video)",
      thumbnail:
        "https://i.ytimg.com/vi/ANLIBOKQVLc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC89ZNVv64qZd9B5GEidMX57IKK5w",
      link: "https://www.youtube.com/watch?v=ANLIBOKQVLc",
      artist: "Tulus",
    },
    {
      title: "TULUS - Cahaya (Official Lyric Video)",
      thumbnail:
        "https://i.ytimg.com/vi/-BgPEiLABtQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBZkpl3Y-hp6sd_wo7-AEEs7iekjQ",
      link: "https://www.youtube.com/watch?v=-BgPEiLABtQ",
      artist: "Tulus",
    },
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState<number>(0);

  const handleSeekChange = (newPlayed: number) => {
    setProgressState((prevState) => ({
      ...prevState,
      played: newPlayed,
    }));
    playerRef.current?.seekTo(newPlayed, "fraction");
  };

  const handleSkipBack = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === 0 ? videoUrls.length - 1 : prevIndex - 1
    );
  };

  const handleSkipForward = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === videoUrls.length - 1 ? 0 : prevIndex + 1
    );
  };

  const findIndexByLink = (array: VideoData[], searchLink: string): number => {
    for (let i = 0; i < array.length; i++) {
      if (array[i].link === searchLink) {
        return i;
      }
    }
    return -1;
  };

  const handleNotSelectedSongButtonClick = (value: VideoData) => {
    if (value.link === videoUrls[currentVideoIndex].link) {
      play.toggle();
    } else {
      const newIndex = findIndexByLink(videoUrls, value.link);
      setCurrentVideoIndex(newIndex);
    }

    play.setTrue();
  };

  useEffect(() => {
    // This code will run after currentVideoIndex is updated
    toast(`Now playing: ${videoUrls[currentVideoIndex].title}`, {
      description: `By ${videoUrls[currentVideoIndex].artist}`,
      cancel: {
        label: "Prev",
        onClick: handleSkipBack,
      },
      action: {
        label: "Next",
        onClick: handleSkipForward,
      },
      icon: <Music />,
      dismissible: true,
      position: "top-right",
      duration: 3000,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentVideoIndex]);

  return (
    <div className="h-screen relative w-full flex flex-col justify-between">
      <ReactPlayer
        ref={playerRef}
        url={videoUrls[currentVideoIndex].link}
        onEnded={handleSkipForward}
        onError={() => handleSkipForward()}
        controls={false}
        playing={play.value}
        onProgress={(e) => {
          if (!seek.value) {
            setProgressState((prevState) => ({
              ...prevState,
              loaded: e.loaded,
              loadedSeconds: e.loadedSeconds,
              played: e.played,
              playedSeconds: e.playedSeconds,
            }));
          }
        }}
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        }}
        width="100%"
        height="100%"
      />
      <div className="z-30 w-full overflow-auto bg-black/70 p-4 flex flex-col gap-4">
        {videoUrls.map((value, index) => (
          <div
            key={`${index}${value.link}`}
            className="flex justify-between items-center p-2 rounded-sm text-white hover:bg-black/80 transition-all"
          >
            <div className="flex gap-2">
              <img
                src={value.thumbnail}
                alt={value.title}
                className="rounded-md w-20 md:w-40"
              />
              <div>
                <h3 className="scroll-m-20 text-md md:text-xl font-semibold tracking-tight">
                  {value.title}
                </h3>
                <p className="leading-7 text-sm">{value.artist}</p>
                {value.link === videoUrls[currentVideoIndex].link && (
                  <p className="text-sm flex items-center gap-2 mt-1 text-muted-foreground">
                    <Disc3
                      className={cn(
                        play.value && "animate-spin",
                        "w-4 h-4 md:w-6 md:h-6"
                      )}
                    />
                    Now Playing
                  </p>
                )}
              </div>
            </div>

            {value.link === videoUrls[currentVideoIndex].link && play.value ? (
              <Button size="icon" variant="ghost" onClick={play.toggle}>
                <Pause />
              </Button>
            ) : (
              <Button
                size="icon"
                variant="ghost"
                onClick={() => handleNotSelectedSongButtonClick(value)}
              >
                <Play />
              </Button>
            )}
          </div>
        ))}
      </div>
      <div className="px-4 py-2 sticky bottom-0 bg-primary-foreground z-40">
        <div>
          <h4 className="scroll-m-20 text-md md:text-lg font-semibold tracking-tight">
            {videoUrls[currentVideoIndex].title}
          </h4>
          <p className="text-sm text-muted-foreground">
            {videoUrls[currentVideoIndex].artist}
          </p>
        </div>
        <Slider
          value={[
            progressState.played as number,
            progressState.loaded as number,
          ]}
          onValueChange={(values) => handleSeekChange(values[0])}
          onValueCommit={() => seek.setFalse()}
          max={1}
          step={0.0001}
          className="mt-6"
        />
        <div className="w-full flex justify-between mt-4">
          <Button onClick={handleSkipBack} size="icon" variant="ghost">
            <Shuffle />
          </Button>
          <div className="flex gap-4">
            <Button onClick={handleSkipBack} size="icon" variant="ghost">
              <SkipBack />
            </Button>
            <Button onClick={play.toggle} size="icon" variant="ghost">
              {play.value ? <Pause /> : <Play />}
            </Button>
            <Button onClick={handleSkipForward} size="icon" variant="ghost">
              <SkipForward />
            </Button>
          </div>
          <Button onClick={() => toast("ok")} size="icon" variant="ghost">
            <Repeat />
          </Button>
        </div>
      </div>
      <div ref={bottomRef}></div>
    </div>
  );
};
