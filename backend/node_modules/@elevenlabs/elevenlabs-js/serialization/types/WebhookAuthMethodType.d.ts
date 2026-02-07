import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const WebhookAuthMethodType: core.serialization.Schema<serializers.WebhookAuthMethodType.Raw, ElevenLabs.WebhookAuthMethodType>;
export declare namespace WebhookAuthMethodType {
    type Raw = "hmac" | "oauth2" | "mtls";
}
