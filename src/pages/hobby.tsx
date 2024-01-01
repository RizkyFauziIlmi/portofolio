import { GameHobbyContent } from "@/components/content/game-hobby-content";
import { MusicHobbyContent } from "@/components/content/music-hobby-content";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Gamepad2, Headphones } from "lucide-react";
import { useDocumentTitle } from "usehooks-ts";

export default function Hobby() {
  useDocumentTitle("Rizky Fauzi Ilmi - Hobby");

  return (
    <div className="p-5 w-screen md:w-full h-full overflow-y-auto">
      <Tabs defaultValue="game" className="w-full">
        <TabsList>
          <TabsTrigger value="game">
            <Gamepad2 className="h-4 w-4 mr-2" /> Game
          </TabsTrigger>
          <TabsTrigger value="music">
            <Headphones className="h-4 w-4 mr-2" /> Music
          </TabsTrigger>
        </TabsList>
        <TabsContent value="game">
          <GameHobbyContent />
        </TabsContent>
        <TabsContent value="music">
          <MusicHobbyContent />
        </TabsContent>
      </Tabs>
    </div>
  );
}
