import type * as ElevenLabs from "../../../../../../../api/index";
import * as core from "../../../../../../../core";
import type * as serializers from "../../../../../../index";
export declare const PostWorkspaceSecretRequest: core.serialization.Schema<serializers.conversationalAi.PostWorkspaceSecretRequest.Raw, ElevenLabs.conversationalAi.PostWorkspaceSecretRequest>;
export declare namespace PostWorkspaceSecretRequest {
    interface Raw {
        name: string;
        value: string;
    }
}
