export declare const ToolTypeFilter: {
    readonly Webhook: "webhook";
    readonly Client: "client";
    readonly ApiIntegrationWebhook: "api_integration_webhook";
};
export type ToolTypeFilter = (typeof ToolTypeFilter)[keyof typeof ToolTypeFilter];
