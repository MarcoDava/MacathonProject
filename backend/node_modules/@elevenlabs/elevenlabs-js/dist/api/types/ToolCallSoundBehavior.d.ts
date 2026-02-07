/** Determines how the tool call sound should be played. */
export declare const ToolCallSoundBehavior: {
    readonly Auto: "auto";
    readonly Always: "always";
};
export type ToolCallSoundBehavior = (typeof ToolCallSoundBehavior)[keyof typeof ToolCallSoundBehavior];
