import type * as ElevenLabs from "../../../../../../../api/index";
import * as core from "../../../../../../../core";
import type * as serializers from "../../../../../../index";
export declare const PatchWorkspaceSecretRequest: core.serialization.Schema<serializers.conversationalAi.PatchWorkspaceSecretRequest.Raw, ElevenLabs.conversationalAi.PatchWorkspaceSecretRequest>;
export declare namespace PatchWorkspaceSecretRequest {
    interface Raw {
        name: string;
        value: string;
    }
}
