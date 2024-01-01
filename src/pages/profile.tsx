import { Timeline } from "@/components/timeline/timeline";
import { TimelineItemProps } from "@/components/timeline/timeline-item";
import { GraduationCap } from "lucide-react";

const timelineItems: TimelineItemProps[] = [
  {
    date: "2010 - 2016",
    title: "SD Hikmah Teladan",
    description:
      "When I was little, I liked efficient things and was lazy about doing repetitive things. Maybe that makes it easier for me as a programmer now.",
  },
  {
    date: "2016 - 2019",
    title: "SMP Hikmah Teladan",
    description:
      "When I was in high school I liked subjects related to calculations, problem solving and logic, such as mathematics.",
  },
  {
    date: "2019 - 2022",
    title: "SMAN 13 Bandung",
    description:
      "At this time I was new to the world of programming and started learning using the self-taught method",
  },
  {
    date: "2022 - now",
    title: "Widyatama University",
    description:
      "Now that I'm studying at Widyatama University and taking a major in Informatics Engineering, I plan to take a database major, but do not close the possibility that I will take a major other than that.",
  },
];

export default function Profile() {
  return (
    <div className="p-5 w-screen md:w-full overflow-y-auto">
      <h3 className="flex items-center gap-2 scroll-m-20 mb-2 text-2xl font-semibold tracking-tight">
        <GraduationCap /> Education
      </h3>
      <Timeline
        items={timelineItems.map((item, index, array) => {
          return {
            ...item,
            isCurrent: index === array.length - 1, // Tambahkan isCurrent berdasarkan index terakhir
          };
        })}
      />
    </div>
  );
}
