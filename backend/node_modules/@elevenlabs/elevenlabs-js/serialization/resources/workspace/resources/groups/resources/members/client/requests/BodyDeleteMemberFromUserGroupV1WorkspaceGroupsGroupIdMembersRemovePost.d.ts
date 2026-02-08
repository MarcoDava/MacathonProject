import type * as ElevenLabs from "../../../../../../../../../api/index";
import * as core from "../../../../../../../../../core";
import type * as serializers from "../../../../../../../../index";
export declare const BodyDeleteMemberFromUserGroupV1WorkspaceGroupsGroupIdMembersRemovePost: core.serialization.Schema<serializers.workspace.groups.BodyDeleteMemberFromUserGroupV1WorkspaceGroupsGroupIdMembersRemovePost.Raw, ElevenLabs.workspace.groups.BodyDeleteMemberFromUserGroupV1WorkspaceGroupsGroupIdMembersRemovePost>;
export declare namespace BodyDeleteMemberFromUserGroupV1WorkspaceGroupsGroupIdMembersRemovePost {
    interface Raw {
        email: string;
    }
}
