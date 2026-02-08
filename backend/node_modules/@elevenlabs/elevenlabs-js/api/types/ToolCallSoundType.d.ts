/** Predefined tool call sound types. */
export declare const ToolCallSoundType: {
    readonly Typing: "typing";
    readonly Elevator1: "elevator1";
    readonly Elevator2: "elevator2";
    readonly Elevator3: "elevator3";
    readonly Elevator4: "elevator4";
};
export type ToolCallSoundType = (typeof ToolCallSoundType)[keyof typeof ToolCallSoundType];
