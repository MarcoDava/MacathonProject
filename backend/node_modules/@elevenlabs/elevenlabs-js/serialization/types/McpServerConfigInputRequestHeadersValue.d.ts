import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { ConvAiDynamicVariable } from "./ConvAiDynamicVariable";
import { ConvAiSecretLocator } from "./ConvAiSecretLocator";
export declare const McpServerConfigInputRequestHeadersValue: core.serialization.Schema<serializers.McpServerConfigInputRequestHeadersValue.Raw, ElevenLabs.McpServerConfigInputRequestHeadersValue>;
export declare namespace McpServerConfigInputRequestHeadersValue {
    type Raw = string | ConvAiSecretLocator.Raw | ConvAiDynamicVariable.Raw;
}
