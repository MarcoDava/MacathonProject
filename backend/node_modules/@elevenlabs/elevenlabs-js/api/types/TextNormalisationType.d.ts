/** Method for converting numbers to words before sending to TTS */
export declare const TextNormalisationType: {
    readonly SystemPrompt: "system_prompt";
    readonly Elevenlabs: "elevenlabs";
};
export type TextNormalisationType = (typeof TextNormalisationType)[keyof typeof TextNormalisationType];
