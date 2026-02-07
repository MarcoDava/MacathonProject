import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { ConvAiDynamicVariable } from "./ConvAiDynamicVariable";
import { ConvAiSecretLocator } from "./ConvAiSecretLocator";
export declare const WebhookToolApiSchemaConfigOutputRequestHeadersValue: core.serialization.Schema<serializers.WebhookToolApiSchemaConfigOutputRequestHeadersValue.Raw, ElevenLabs.WebhookToolApiSchemaConfigOutputRequestHeadersValue>;
export declare namespace WebhookToolApiSchemaConfigOutputRequestHeadersValue {
    type Raw = string | ConvAiSecretLocator.Raw | ConvAiDynamicVariable.Raw;
}
