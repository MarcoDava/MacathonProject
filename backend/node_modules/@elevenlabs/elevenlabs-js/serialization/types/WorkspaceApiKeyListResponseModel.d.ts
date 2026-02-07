import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { WorkspaceApiKeyResponseModel } from "./WorkspaceApiKeyResponseModel";
export declare const WorkspaceApiKeyListResponseModel: core.serialization.ObjectSchema<serializers.WorkspaceApiKeyListResponseModel.Raw, ElevenLabs.WorkspaceApiKeyListResponseModel>;
export declare namespace WorkspaceApiKeyListResponseModel {
    interface Raw {
        "api-keys": WorkspaceApiKeyResponseModel.Raw[];
    }
}
