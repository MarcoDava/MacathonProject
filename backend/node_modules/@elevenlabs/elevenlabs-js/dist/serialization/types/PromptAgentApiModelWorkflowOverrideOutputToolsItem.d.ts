import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { ApiIntegrationWebhookToolConfigOutput } from "./ApiIntegrationWebhookToolConfigOutput";
import { ClientToolConfigOutput } from "./ClientToolConfigOutput";
import { SystemToolConfigOutput } from "./SystemToolConfigOutput";
import { WebhookToolConfigOutput } from "./WebhookToolConfigOutput";
export declare const PromptAgentApiModelWorkflowOverrideOutputToolsItem: core.serialization.Schema<serializers.PromptAgentApiModelWorkflowOverrideOutputToolsItem.Raw, ElevenLabs.PromptAgentApiModelWorkflowOverrideOutputToolsItem>;
export declare namespace PromptAgentApiModelWorkflowOverrideOutputToolsItem {
    type Raw = PromptAgentApiModelWorkflowOverrideOutputToolsItem.ApiIntegrationWebhook | PromptAgentApiModelWorkflowOverrideOutputToolsItem.Client | PromptAgentApiModelWorkflowOverrideOutputToolsItem.Mcp | PromptAgentApiModelWorkflowOverrideOutputToolsItem.System | PromptAgentApiModelWorkflowOverrideOutputToolsItem.Webhook;
    interface ApiIntegrationWebhook extends ApiIntegrationWebhookToolConfigOutput.Raw {
        type: "api_integration_webhook";
    }
    interface Client extends ClientToolConfigOutput.Raw {
        type: "client";
    }
    interface Mcp {
        type: "mcp";
        value?: unknown;
    }
    interface System extends SystemToolConfigOutput.Raw {
        type: "system";
    }
    interface Webhook extends WebhookToolConfigOutput.Raw {
        type: "webhook";
    }
}
