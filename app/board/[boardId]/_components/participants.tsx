"use client";

import { useOthers, useSelf } from "@/liveblocks.config";

import { UserAvatar } from "./user-avatar";
import { connectionIdToColor } from "@/lib/utils";

const MAX_SHOWN_OTHERS = 2;

const Participants = () => {
    const users = useOthers();
    const currentUser = useSelf();

    const hasMoreUsers = users.length > MAX_SHOWN_OTHERS;
    const otherUsers = users.length - MAX_SHOWN_OTHERS;

    return (
        <div className="absolute h-12 top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md">
            <div className="flex gap-x-2">
                {users
                    .slice(0, MAX_SHOWN_OTHERS)
                    .map(({ connectionId, info }) => {
                        return (
                            <UserAvatar
                                borderColor={connectionIdToColor(connectionId)}
                                key={connectionId}
                                src={info?.picture}
                                name={info?.name}
                                fallback={info?.name?.[0] || "A"}
                            />
                        );
                    })}

                {currentUser && (
                    <UserAvatar
                        borderColor={connectionIdToColor(
                            currentUser.connectionId
                        )}
                        src={currentUser.info?.picture}
                        name={`${currentUser.info?.name} (You)`}
                        fallback={currentUser.info?.name?.[0] || "A"}
                    />
                )}

                {hasMoreUsers && (
                    <UserAvatar
                        borderColor={connectionIdToColor(
                            currentUser.connectionId / 2
                        )}
                        name={`${otherUsers} other${otherUsers > 1 ? "s" : ""}`}
                        fallback={`+${otherUsers}`}
                    />
                )}
            </div>
        </div>
    );
};

export const ParticipantsSkeleton = () => {
    return (
        <div className="absolute h-12 top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md w-[100px]" />
    );
};

export default Participants;
