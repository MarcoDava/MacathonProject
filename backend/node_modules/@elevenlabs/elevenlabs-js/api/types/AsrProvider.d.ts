export declare const AsrProvider: {
    readonly Elevenlabs: "elevenlabs";
    readonly ScribeRealtime: "scribe_realtime";
};
export type AsrProvider = (typeof AsrProvider)[keyof typeof AsrProvider];
