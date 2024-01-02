import {
  Dot,
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
import { useEffect, useRef, useState } from "react";
import { OnProgressProps } from "react-player/base";
import { toast } from "sonner";
import { VideoData, videoUrls } from "@/constant/data/video";
import { MusicList } from "../music/music-list";
import { detikKeStringWaktu } from "@/lib/time";
import { cn } from "@/lib/utils";

export const MusicHobbyContent = () => {
  const isFirstRender = useRef(true);
  const play = useBoolean(true);
  const seek = useBoolean(false);
  const repeat = useBoolean(false);
  const playerRef = useRef<ReactPlayer>(null);
  const [progressState, setProgressState] = useState<OnProgressProps>({
    loaded: 0,
    loadedSeconds: 0,
    played: 0,
    playedSeconds: 0,
  });
  const [duration, setDuration] = useState<number>(0);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

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

  const handleOnEnded = () => {
    if (repeat.value) {
      handleSeekChange(0);
      return;
    }

    handleSkipForward();
  };

  useEffect(() => {
    if (!isFirstRender.current) {
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
      });
    }
  }, [currentVideoIndex]);

  useEffect(() => {
    if (isFirstRender.current && !repeat.value) {
      isFirstRender.current = false;
    } else {
      if (repeat.value) {
        toast("Repeat song activated!", {
          cancel: {
            label: "Cancel",
            onClick: repeat.setFalse,
          },
        });
      } else {
        toast("Repeat song Deactivated!", {
          cancel: {
            label: "Cancel",
            onClick: repeat.setTrue,
          },
        });
      }
    }
  }, [repeat.setFalse, repeat.setTrue, repeat.value]);

  return (
    <div className="h-screen relative w-full flex flex-col justify-between">
      <ReactPlayer
        ref={playerRef}
        url={videoUrls[currentVideoIndex].link}
        onEnded={handleOnEnded}
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
        onDuration={(duration) => setDuration(duration)}
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
          <MusicList
            key={`${index}:${value.link}`}
            currentVideoIndex={currentVideoIndex}
            handleNotSelectedSongButtonClick={handleNotSelectedSongButtonClick}
            index={index}
            play={play}
            value={value}
          />
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
        <div className="flex justify-between mt-2">
          <p className="text-sm text-muted-foreground">
            {detikKeStringWaktu(Math.floor(progressState.playedSeconds))}
          </p>
          <p className="text-sm text-muted-foreground">
            {detikKeStringWaktu(duration)}
          </p>
        </div>
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
          <Button
            onClick={repeat.toggle}
            size="icon"
            variant="ghost"
            className="flex flex-col"
          >
            <Repeat
              className={cn(repeat.value ? "text-primary" : "text-muted")}
            />
          </Button>
        </div>
      </div>
      <div ref={bottomRef}></div>
    </div>
  );
};