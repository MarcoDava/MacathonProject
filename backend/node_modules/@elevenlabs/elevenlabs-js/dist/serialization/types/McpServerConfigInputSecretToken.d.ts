import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { ConvAiSecretLocator } from "./ConvAiSecretLocator";
import { ConvAiUserSecretDbModel } from "./ConvAiUserSecretDbModel";
export declare const McpServerConfigInputSecretToken: core.serialization.Schema<serializers.McpServerConfigInputSecretToken.Raw, ElevenLabs.McpServerConfigInputSecretToken>;
export declare namespace McpServerConfigInputSecretToken {
    type Raw = ConvAiSecretLocator.Raw | ConvAiUserSecretDbModel.Raw;
}
