import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { ClientToolConfigOutput } from "./ClientToolConfigOutput";
import { SystemToolConfigOutput } from "./SystemToolConfigOutput";
import { WebhookToolConfigOutput } from "./WebhookToolConfigOutput";
export declare const ToolResponseModelToolConfig: core.serialization.Schema<serializers.ToolResponseModelToolConfig.Raw, ElevenLabs.ToolResponseModelToolConfig>;
export declare namespace ToolResponseModelToolConfig {
    type Raw = ToolResponseModelToolConfig.Client | ToolResponseModelToolConfig.System | ToolResponseModelToolConfig.Webhook;
    interface Client extends ClientToolConfigOutput.Raw {
        type: "client";
    }
    interface System extends SystemToolConfigOutput.Raw {
        type: "system";
    }
    interface Webhook extends WebhookToolConfigOutput.Raw {
        type: "webhook";
    }
}
