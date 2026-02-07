import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { ClientToolConfigInput } from "./ClientToolConfigInput";
import { SystemToolConfigInput } from "./SystemToolConfigInput";
import { WebhookToolConfigInput } from "./WebhookToolConfigInput";
export declare const ToolRequestModelToolConfig: core.serialization.Schema<serializers.ToolRequestModelToolConfig.Raw, ElevenLabs.ToolRequestModelToolConfig>;
export declare namespace ToolRequestModelToolConfig {
    type Raw = ToolRequestModelToolConfig.Client | ToolRequestModelToolConfig.System | ToolRequestModelToolConfig.Webhook;
    interface Client extends ClientToolConfigInput.Raw {
        type: "client";
    }
    interface System extends SystemToolConfigInput.Raw {
        type: "system";
    }
    interface Webhook extends WebhookToolConfigInput.Raw {
        type: "webhook";
    }
}
