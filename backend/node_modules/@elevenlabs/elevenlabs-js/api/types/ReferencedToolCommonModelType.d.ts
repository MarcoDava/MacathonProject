/** The type of the tool */
export declare const ReferencedToolCommonModelType: {
    readonly System: "system";
    readonly Webhook: "webhook";
    readonly Client: "client";
    readonly Workflow: "workflow";
    readonly ApiIntegrationWebhook: "api_integration_webhook";
};
export type ReferencedToolCommonModelType = (typeof ReferencedToolCommonModelType)[keyof typeof ReferencedToolCommonModelType];
