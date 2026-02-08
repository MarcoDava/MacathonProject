import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const CreateAgentBranchResponseModel: core.serialization.ObjectSchema<serializers.CreateAgentBranchResponseModel.Raw, ElevenLabs.CreateAgentBranchResponseModel>;
export declare namespace CreateAgentBranchResponseModel {
    interface Raw {
        created_branch_id: string;
        created_version_id: string;
    }
}
