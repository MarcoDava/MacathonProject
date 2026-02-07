import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { ConvAiDynamicVariable } from "./ConvAiDynamicVariable";
export declare const ApiIntegrationWebhookOverridesInputRequestHeadersValue: core.serialization.Schema<serializers.ApiIntegrationWebhookOverridesInputRequestHeadersValue.Raw, ElevenLabs.ApiIntegrationWebhookOverridesInputRequestHeadersValue>;
export declare namespace ApiIntegrationWebhookOverridesInputRequestHeadersValue {
    type Raw = string | ConvAiDynamicVariable.Raw;
}
