import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const WebhookToolApiSchemaConfigOutputMethod: core.serialization.Schema<serializers.WebhookToolApiSchemaConfigOutputMethod.Raw, ElevenLabs.WebhookToolApiSchemaConfigOutputMethod>;
export declare namespace WebhookToolApiSchemaConfigOutputMethod {
    type Raw = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
}
