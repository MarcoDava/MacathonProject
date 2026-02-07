/** Agent's eagerness to respond. Higher values make agent wait for higher turn probability. */
export declare const TurnEagerness: {
    readonly Patient: "patient";
    readonly Normal: "normal";
    readonly Eager: "eager";
};
export type TurnEagerness = (typeof TurnEagerness)[keyof typeof TurnEagerness];
