import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const WebhookEventType: core.serialization.Schema<serializers.WebhookEventType.Raw, ElevenLabs.WebhookEventType>;
export declare namespace WebhookEventType {
    type Raw = "transcript" | "audio" | "call_initiation_failure";
}
