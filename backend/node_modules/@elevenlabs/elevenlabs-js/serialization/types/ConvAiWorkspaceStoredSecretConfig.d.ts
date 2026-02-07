import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { ConvAiStoredSecretDependencies } from "./ConvAiStoredSecretDependencies";
export declare const ConvAiWorkspaceStoredSecretConfig: core.serialization.ObjectSchema<serializers.ConvAiWorkspaceStoredSecretConfig.Raw, ElevenLabs.ConvAiWorkspaceStoredSecretConfig>;
export declare namespace ConvAiWorkspaceStoredSecretConfig {
    interface Raw {
        type: "stored";
        secret_id: string;
        name: string;
        used_by: ConvAiStoredSecretDependencies.Raw;
    }
}
