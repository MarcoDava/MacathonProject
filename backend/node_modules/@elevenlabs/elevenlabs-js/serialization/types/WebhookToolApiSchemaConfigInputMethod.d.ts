import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const WebhookToolApiSchemaConfigInputMethod: core.serialization.Schema<serializers.WebhookToolApiSchemaConfigInputMethod.Raw, ElevenLabs.WebhookToolApiSchemaConfigInputMethod>;
export declare namespace WebhookToolApiSchemaConfigInputMethod {
    type Raw = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
}
