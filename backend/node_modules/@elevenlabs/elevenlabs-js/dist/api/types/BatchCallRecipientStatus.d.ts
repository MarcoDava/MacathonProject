export declare const BatchCallRecipientStatus: {
    readonly Pending: "pending";
    readonly Dispatched: "dispatched";
    readonly Initiated: "initiated";
    readonly InProgress: "in_progress";
    readonly Completed: "completed";
    readonly Failed: "failed";
    readonly Cancelled: "cancelled";
    readonly Voicemail: "voicemail";
};
export type BatchCallRecipientStatus = (typeof BatchCallRecipientStatus)[keyof typeof BatchCallRecipientStatus];
