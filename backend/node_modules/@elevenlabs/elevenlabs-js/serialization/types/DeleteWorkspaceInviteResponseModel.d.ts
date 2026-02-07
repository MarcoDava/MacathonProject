import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const DeleteWorkspaceInviteResponseModel: core.serialization.ObjectSchema<serializers.DeleteWorkspaceInviteResponseModel.Raw, ElevenLabs.DeleteWorkspaceInviteResponseModel>;
export declare namespace DeleteWorkspaceInviteResponseModel {
    interface Raw {
        status: string;
    }
}
