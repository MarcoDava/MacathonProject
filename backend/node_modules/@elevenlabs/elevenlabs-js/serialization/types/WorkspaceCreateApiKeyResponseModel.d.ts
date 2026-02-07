import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const WorkspaceCreateApiKeyResponseModel: core.serialization.ObjectSchema<serializers.WorkspaceCreateApiKeyResponseModel.Raw, ElevenLabs.WorkspaceCreateApiKeyResponseModel>;
export declare namespace WorkspaceCreateApiKeyResponseModel {
    interface Raw {
        "xi-api-key": string;
        key_id: string;
    }
}
