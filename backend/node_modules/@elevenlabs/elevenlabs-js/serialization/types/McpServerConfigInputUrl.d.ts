import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { ConvAiSecretLocator } from "./ConvAiSecretLocator";
export declare const McpServerConfigInputUrl: core.serialization.Schema<serializers.McpServerConfigInputUrl.Raw, ElevenLabs.McpServerConfigInputUrl>;
export declare namespace McpServerConfigInputUrl {
    type Raw = string | ConvAiSecretLocator.Raw;
}
