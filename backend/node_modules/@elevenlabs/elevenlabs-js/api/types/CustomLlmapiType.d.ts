export declare const CustomLlmapiType: {
    readonly ChatCompletions: "chat_completions";
    readonly Responses: "responses";
};
export type CustomLlmapiType = (typeof CustomLlmapiType)[keyof typeof CustomLlmapiType];
