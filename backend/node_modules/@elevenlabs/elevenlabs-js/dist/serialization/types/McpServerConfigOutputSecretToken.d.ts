import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { ConvAiSecretLocator } from "./ConvAiSecretLocator";
import { ConvAiUserSecretDbModel } from "./ConvAiUserSecretDbModel";
export declare const McpServerConfigOutputSecretToken: core.serialization.Schema<serializers.McpServerConfigOutputSecretToken.Raw, ElevenLabs.McpServerConfigOutputSecretToken>;
export declare namespace McpServerConfigOutputSecretToken {
    type Raw = ConvAiSecretLocator.Raw | ConvAiUserSecretDbModel.Raw;
}
