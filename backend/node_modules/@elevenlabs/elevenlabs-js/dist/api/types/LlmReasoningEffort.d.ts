export declare const LlmReasoningEffort: {
    readonly None: "none";
    readonly Minimal: "minimal";
    readonly Low: "low";
    readonly Medium: "medium";
    readonly High: "high";
};
export type LlmReasoningEffort = (typeof LlmReasoningEffort)[keyof typeof LlmReasoningEffort];
