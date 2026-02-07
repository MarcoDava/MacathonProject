import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const PostWorkspaceSecretResponseModel: core.serialization.ObjectSchema<serializers.PostWorkspaceSecretResponseModel.Raw, ElevenLabs.PostWorkspaceSecretResponseModel>;
export declare namespace PostWorkspaceSecretResponseModel {
    interface Raw {
        type: "stored";
        secret_id: string;
        name: string;
    }
}
