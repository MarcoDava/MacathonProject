import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { ConvAiSecretLocator } from "./ConvAiSecretLocator";
export declare const McpServerConfigOutputUrl: core.serialization.Schema<serializers.McpServerConfigOutputUrl.Raw, ElevenLabs.McpServerConfigOutputUrl>;
export declare namespace McpServerConfigOutputUrl {
    type Raw = string | ConvAiSecretLocator.Raw;
}
