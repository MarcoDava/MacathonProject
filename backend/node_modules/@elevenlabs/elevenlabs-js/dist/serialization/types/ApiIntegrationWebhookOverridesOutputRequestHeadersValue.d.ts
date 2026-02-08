import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { ConvAiDynamicVariable } from "./ConvAiDynamicVariable";
export declare const ApiIntegrationWebhookOverridesOutputRequestHeadersValue: core.serialization.Schema<serializers.ApiIntegrationWebhookOverridesOutputRequestHeadersValue.Raw, ElevenLabs.ApiIntegrationWebhookOverridesOutputRequestHeadersValue>;
export declare namespace ApiIntegrationWebhookOverridesOutputRequestHeadersValue {
    type Raw = string | ConvAiDynamicVariable.Raw;
}
