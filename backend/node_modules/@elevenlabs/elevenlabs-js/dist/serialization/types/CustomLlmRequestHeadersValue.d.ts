import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { ConvAiDynamicVariable } from "./ConvAiDynamicVariable";
import { ConvAiSecretLocator } from "./ConvAiSecretLocator";
export declare const CustomLlmRequestHeadersValue: core.serialization.Schema<serializers.CustomLlmRequestHeadersValue.Raw, ElevenLabs.CustomLlmRequestHeadersValue>;
export declare namespace CustomLlmRequestHeadersValue {
    type Raw = string | ConvAiSecretLocator.Raw | ConvAiDynamicVariable.Raw;
}
