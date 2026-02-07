import type * as ElevenLabs from "../index";
/**
 * Configuration for the tool
 */
export type ToolRequestModelToolConfig = ElevenLabs.ToolRequestModelToolConfig.Client | ElevenLabs.ToolRequestModelToolConfig.System | ElevenLabs.ToolRequestModelToolConfig.Webhook;
export declare namespace ToolRequestModelToolConfig {
    interface Client extends ElevenLabs.ClientToolConfigInput {
        type: "client";
    }
    interface System extends ElevenLabs.SystemToolConfigInput {
        type: "system";
    }
    interface Webhook extends ElevenLabs.WebhookToolConfigInput {
        type: "webhook";
    }
}
