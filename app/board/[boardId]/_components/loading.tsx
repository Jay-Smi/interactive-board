import { Loader } from "lucide-react";
import { InfoSkeleton } from "./info";
import { ParticipantsSkeleton } from "./participants";
import { ToolbarSkeleton } from "./toolbar";

const Loading = () => {
    return (
        <main className="h-full w-full ralative bg-neutral-100 touch-none flex items-center justify-center">
            <Loader className="h-12 w-12 text-muted-foreground animate-spin" />
            <InfoSkeleton />
            <ParticipantsSkeleton />
            <ToolbarSkeleton />
        </main>
    );
};

export default Loading;
