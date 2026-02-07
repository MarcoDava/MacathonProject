export declare const KnowledgeBaseDependentType: {
    readonly Direct: "direct";
    readonly Transitive: "transitive";
    readonly All: "all";
};
export type KnowledgeBaseDependentType = (typeof KnowledgeBaseDependentType)[keyof typeof KnowledgeBaseDependentType];
