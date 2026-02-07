import type * as ElevenLabs from "../index";
/**
 * The type of tool
 */
export type PromptAgentApiModelWorkflowOverrideInputToolsItem = ElevenLabs.PromptAgentApiModelWorkflowOverrideInputToolsItem.ApiIntegrationWebhook | ElevenLabs.PromptAgentApiModelWorkflowOverrideInputToolsItem.Client | ElevenLabs.PromptAgentApiModelWorkflowOverrideInputToolsItem.Mcp | ElevenLabs.PromptAgentApiModelWorkflowOverrideInputToolsItem.System | ElevenLabs.PromptAgentApiModelWorkflowOverrideInputToolsItem.Webhook;
export declare namespace PromptAgentApiModelWorkflowOverrideInputToolsItem {
    interface ApiIntegrationWebhook extends ElevenLabs.ApiIntegrationWebhookToolConfigInput {
        type: "api_integration_webhook";
    }
    interface Client extends ElevenLabs.ClientToolConfigInput {
        type: "client";
    }
    interface Mcp {
        type: "mcp";
        value?: unknown;
    }
    interface System extends ElevenLabs.SystemToolConfigInput {
        type: "system";
    }
    interface Webhook extends ElevenLabs.WebhookToolConfigInput {
        type: "webhook";
    }
}
