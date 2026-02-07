import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { ApiIntegrationWebhookToolConfigInput } from "./ApiIntegrationWebhookToolConfigInput";
import { ClientToolConfigInput } from "./ClientToolConfigInput";
import { SystemToolConfigInput } from "./SystemToolConfigInput";
import { WebhookToolConfigInput } from "./WebhookToolConfigInput";
export declare const PromptAgentApiModelWorkflowOverrideInputToolsItem: core.serialization.Schema<serializers.PromptAgentApiModelWorkflowOverrideInputToolsItem.Raw, ElevenLabs.PromptAgentApiModelWorkflowOverrideInputToolsItem>;
export declare namespace PromptAgentApiModelWorkflowOverrideInputToolsItem {
    type Raw = PromptAgentApiModelWorkflowOverrideInputToolsItem.ApiIntegrationWebhook | PromptAgentApiModelWorkflowOverrideInputToolsItem.Client | PromptAgentApiModelWorkflowOverrideInputToolsItem.Mcp | PromptAgentApiModelWorkflowOverrideInputToolsItem.System | PromptAgentApiModelWorkflowOverrideInputToolsItem.Webhook;
    interface ApiIntegrationWebhook extends ApiIntegrationWebhookToolConfigInput.Raw {
        type: "api_integration_webhook";
    }
    interface Client extends ClientToolConfigInput.Raw {
        type: "client";
    }
    interface Mcp {
        type: "mcp";
        value?: unknown;
    }
    interface System extends SystemToolConfigInput.Raw {
        type: "system";
    }
    interface Webhook extends WebhookToolConfigInput.Raw {
        type: "webhook";
    }
}
