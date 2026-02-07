import type * as ElevenLabs from "../index";
/**
 * The type of tool
 */
export type PromptAgentApiModelWorkflowOverrideOutputToolsItem = ElevenLabs.PromptAgentApiModelWorkflowOverrideOutputToolsItem.ApiIntegrationWebhook | ElevenLabs.PromptAgentApiModelWorkflowOverrideOutputToolsItem.Client | ElevenLabs.PromptAgentApiModelWorkflowOverrideOutputToolsItem.Mcp | ElevenLabs.PromptAgentApiModelWorkflowOverrideOutputToolsItem.System | ElevenLabs.PromptAgentApiModelWorkflowOverrideOutputToolsItem.Webhook;
export declare namespace PromptAgentApiModelWorkflowOverrideOutputToolsItem {
    interface ApiIntegrationWebhook extends ElevenLabs.ApiIntegrationWebhookToolConfigOutput {
        type: "api_integration_webhook";
    }
    interface Client extends ElevenLabs.ClientToolConfigOutput {
        type: "client";
    }
    interface Mcp {
        type: "mcp";
        value?: unknown;
    }
    interface System extends ElevenLabs.SystemToolConfigOutput {
        type: "system";
    }
    interface Webhook extends ElevenLabs.WebhookToolConfigOutput {
        type: "webhook";
    }
}
