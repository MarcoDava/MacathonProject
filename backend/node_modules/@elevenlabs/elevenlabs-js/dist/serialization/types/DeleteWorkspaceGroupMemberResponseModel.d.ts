import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const DeleteWorkspaceGroupMemberResponseModel: core.serialization.ObjectSchema<serializers.DeleteWorkspaceGroupMemberResponseModel.Raw, ElevenLabs.DeleteWorkspaceGroupMemberResponseModel>;
export declare namespace DeleteWorkspaceGroupMemberResponseModel {
    interface Raw {
        status: string;
    }
}
