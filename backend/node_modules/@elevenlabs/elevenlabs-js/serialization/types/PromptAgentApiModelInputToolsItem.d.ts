import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { ApiIntegrationWebhookToolConfigInput } from "./ApiIntegrationWebhookToolConfigInput";
import { ClientToolConfigInput } from "./ClientToolConfigInput";
import { SystemToolConfigInput } from "./SystemToolConfigInput";
import { WebhookToolConfigInput } from "./WebhookToolConfigInput";
export declare const PromptAgentApiModelInputToolsItem: core.serialization.Schema<serializers.PromptAgentApiModelInputToolsItem.Raw, ElevenLabs.PromptAgentApiModelInputToolsItem>;
export declare namespace PromptAgentApiModelInputToolsItem {
    type Raw = PromptAgentApiModelInputToolsItem.ApiIntegrationWebhook | PromptAgentApiModelInputToolsItem.Client | PromptAgentApiModelInputToolsItem.Mcp | PromptAgentApiModelInputToolsItem.System | PromptAgentApiModelInputToolsItem.Webhook;
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
