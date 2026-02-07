import type * as ElevenLabs from "../index";
/**
 * The type of tool
 */
export type ToolResponseModelToolConfig = ElevenLabs.ToolResponseModelToolConfig.Client | ElevenLabs.ToolResponseModelToolConfig.System | ElevenLabs.ToolResponseModelToolConfig.Webhook;
export declare namespace ToolResponseModelToolConfig {
    interface Client extends ElevenLabs.ClientToolConfigOutput {
        type: "client";
    }
    interface System extends ElevenLabs.SystemToolConfigOutput {
        type: "system";
    }
    interface Webhook extends ElevenLabs.WebhookToolConfigOutput {
        type: "webhook";
    }
}
