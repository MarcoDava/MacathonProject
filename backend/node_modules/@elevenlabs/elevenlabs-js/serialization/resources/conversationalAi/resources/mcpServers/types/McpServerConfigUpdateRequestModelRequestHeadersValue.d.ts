import type * as ElevenLabs from "../../../../../../api/index";
import * as core from "../../../../../../core";
import type * as serializers from "../../../../../index";
import { ConvAiDynamicVariable } from "../../../../../types/ConvAiDynamicVariable";
import { ConvAiSecretLocator } from "../../../../../types/ConvAiSecretLocator";
export declare const McpServerConfigUpdateRequestModelRequestHeadersValue: core.serialization.Schema<serializers.conversationalAi.McpServerConfigUpdateRequestModelRequestHeadersValue.Raw, ElevenLabs.conversationalAi.McpServerConfigUpdateRequestModelRequestHeadersValue>;
export declare namespace McpServerConfigUpdateRequestModelRequestHeadersValue {
    type Raw = string | ConvAiSecretLocator.Raw | ConvAiDynamicVariable.Raw;
}
