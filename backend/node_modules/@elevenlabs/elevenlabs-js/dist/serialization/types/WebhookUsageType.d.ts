import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const WebhookUsageType: core.serialization.Schema<serializers.WebhookUsageType.Raw, ElevenLabs.WebhookUsageType>;
export declare namespace WebhookUsageType {
    type Raw = "ConvAI Agent Settings" | "ConvAI Settings" | "Voice Library Removal Notices" | "Speech to Text";
}
