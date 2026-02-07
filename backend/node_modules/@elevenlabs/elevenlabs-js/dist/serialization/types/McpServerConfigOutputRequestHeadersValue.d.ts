import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { ConvAiDynamicVariable } from "./ConvAiDynamicVariable";
import { ConvAiSecretLocator } from "./ConvAiSecretLocator";
export declare const McpServerConfigOutputRequestHeadersValue: core.serialization.Schema<serializers.McpServerConfigOutputRequestHeadersValue.Raw, ElevenLabs.McpServerConfigOutputRequestHeadersValue>;
export declare namespace McpServerConfigOutputRequestHeadersValue {
    type Raw = string | ConvAiSecretLocator.Raw | ConvAiDynamicVariable.Raw;
}
