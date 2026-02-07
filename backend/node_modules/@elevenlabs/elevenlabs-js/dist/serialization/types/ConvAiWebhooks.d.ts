import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { WebhookEventType } from "./WebhookEventType";
export declare const ConvAiWebhooks: core.serialization.ObjectSchema<serializers.ConvAiWebhooks.Raw, ElevenLabs.ConvAiWebhooks>;
export declare namespace ConvAiWebhooks {
    interface Raw {
        post_call_webhook_id?: string | null;
        events?: WebhookEventType.Raw[] | null;
        send_audio?: boolean | null;
    }
}
