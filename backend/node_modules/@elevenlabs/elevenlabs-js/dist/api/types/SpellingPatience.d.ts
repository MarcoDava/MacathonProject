/** Controls if the agent should be more patient when user is spelling numbers and named entities. */
export declare const SpellingPatience: {
    readonly Auto: "auto";
    readonly Off: "off";
};
export type SpellingPatience = (typeof SpellingPatience)[keyof typeof SpellingPatience];
