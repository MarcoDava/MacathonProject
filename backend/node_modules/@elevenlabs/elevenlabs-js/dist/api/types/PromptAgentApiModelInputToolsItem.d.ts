import type * as ElevenLabs from "../index";
/**
 * The type of tool
 */
export type PromptAgentApiModelInputToolsItem = ElevenLabs.PromptAgentApiModelInputToolsItem.ApiIntegrationWebhook | ElevenLabs.PromptAgentApiModelInputToolsItem.Client | ElevenLabs.PromptAgentApiModelInputToolsItem.Mcp | ElevenLabs.PromptAgentApiModelInputToolsItem.System | ElevenLabs.PromptAgentApiModelInputToolsItem.Webhook;
export declare namespace PromptAgentApiModelInputToolsItem {
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
