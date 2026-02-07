import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { WorkspaceApiKeyResponseModel } from "./WorkspaceApiKeyResponseModel";
export declare const WorkspaceServiceAccountResponseModel: core.serialization.ObjectSchema<serializers.WorkspaceServiceAccountResponseModel.Raw, ElevenLabs.WorkspaceServiceAccountResponseModel>;
export declare namespace WorkspaceServiceAccountResponseModel {
    interface Raw {
        service_account_user_id: string;
        name: string;
        created_at_unix?: number | null;
        "api-keys": WorkspaceApiKeyResponseModel.Raw[];
    }
}
