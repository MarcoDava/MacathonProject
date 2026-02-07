import type * as ElevenLabs from "../../../../index";
/**
 * @example
 *     {
 *         settings: {
 *             authType: "hmac",
 *             name: "name",
 *             webhookUrl: "webhook_url"
 *         }
 *     }
 */
export interface BodyCreateWorkspaceWebhookV1WorkspaceWebhooksPost {
    /** Webhook settings object containing auth_type and corresponding configuration */
    settings: ElevenLabs.WebhookHmacSettings;
}
