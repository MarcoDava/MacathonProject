import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { WorkspaceServiceAccountResponseModel } from "./WorkspaceServiceAccountResponseModel";
export declare const WorkspaceServiceAccountListResponseModel: core.serialization.ObjectSchema<serializers.WorkspaceServiceAccountListResponseModel.Raw, ElevenLabs.WorkspaceServiceAccountListResponseModel>;
export declare namespace WorkspaceServiceAccountListResponseModel {
    interface Raw {
        "service-accounts": WorkspaceServiceAccountResponseModel.Raw[];
    }
}
