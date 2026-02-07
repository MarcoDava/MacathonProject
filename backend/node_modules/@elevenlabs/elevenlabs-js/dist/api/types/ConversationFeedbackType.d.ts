export declare const ConversationFeedbackType: {
    readonly Thumbs: "thumbs";
    readonly Rating: "rating";
};
export type ConversationFeedbackType = (typeof ConversationFeedbackType)[keyof typeof ConversationFeedbackType];
