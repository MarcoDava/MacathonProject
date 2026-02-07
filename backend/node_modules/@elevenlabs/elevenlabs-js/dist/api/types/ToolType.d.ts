export declare const ToolType: {
    readonly System: "system";
    readonly Webhook: "webhook";
    readonly Client: "client";
    readonly Mcp: "mcp";
    readonly Workflow: "workflow";
    readonly ApiIntegrationWebhook: "api_integration_webhook";
    readonly ApiIntegrationMcp: "api_integration_mcp";
};
export type ToolType = (typeof ToolType)[keyof typeof ToolType];
