import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const UpdateWorkspaceMemberResponseModel: core.serialization.ObjectSchema<serializers.UpdateWorkspaceMemberResponseModel.Raw, ElevenLabs.UpdateWorkspaceMemberResponseModel>;
export declare namespace UpdateWorkspaceMemberResponseModel {
    interface Raw {
        status: string;
    }
}
