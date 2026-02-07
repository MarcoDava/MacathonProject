import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const WorkspaceGroupByNameResponseModel: core.serialization.ObjectSchema<serializers.WorkspaceGroupByNameResponseModel.Raw, ElevenLabs.WorkspaceGroupByNameResponseModel>;
export declare namespace WorkspaceGroupByNameResponseModel {
    interface Raw {
        name: string;
        id: string;
        members_emails: string[];
    }
}
