import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { ConvAiDynamicVariable } from "./ConvAiDynamicVariable";
import { ConvAiSecretLocator } from "./ConvAiSecretLocator";
export declare const WebhookToolApiSchemaConfigInputRequestHeadersValue: core.serialization.Schema<serializers.WebhookToolApiSchemaConfigInputRequestHeadersValue.Raw, ElevenLabs.WebhookToolApiSchemaConfigInputRequestHeadersValue>;
export declare namespace WebhookToolApiSchemaConfigInputRequestHeadersValue {
    type Raw = string | ConvAiSecretLocator.Raw | ConvAiDynamicVariable.Raw;
}
