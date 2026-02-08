export declare const ToolExecutionMode: {
    readonly Immediate: "immediate";
    readonly PostToolSpeech: "post_tool_speech";
    readonly Async: "async";
};
export type ToolExecutionMode = (typeof ToolExecutionMode)[keyof typeof ToolExecutionMode];
