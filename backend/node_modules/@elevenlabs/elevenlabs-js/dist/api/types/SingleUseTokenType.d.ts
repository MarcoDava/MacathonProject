export declare const SingleUseTokenType: {
    readonly RealtimeScribe: "realtime_scribe";
    readonly TtsWebsocket: "tts_websocket";
};
export type SingleUseTokenType = (typeof SingleUseTokenType)[keyof typeof SingleUseTokenType];
