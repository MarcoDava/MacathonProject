import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../../../BaseClient";
import { type NormalizedClientOptions } from "../../../../../../../../BaseClient";
import * as core from "../../../../../../../../core";
import * as ElevenLabs from "../../../../../../../index";
export declare namespace MembersClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class MembersClient {
    protected readonly _options: NormalizedClientOptions<MembersClient.Options>;
    constructor(options?: MembersClient.Options);
    /**
     * Removes a member from the specified group. Requires `group_members_manage` permission.
     *
     * @param {string} group_id - The ID of the target group.
     * @param {ElevenLabs.workspace.groups.BodyDeleteMemberFromUserGroupV1WorkspaceGroupsGroupIdMembersRemovePost} request
     * @param {MembersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.workspace.groups.members.remove("group_id", {
     *         email: "email"
     *     })
     */
    remove(group_id: string, request: ElevenLabs.workspace.groups.BodyDeleteMemberFromUserGroupV1WorkspaceGroupsGroupIdMembersRemovePost, requestOptions?: MembersClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.DeleteWorkspaceGroupMemberResponseModel>;
    private __remove;
    /**
     * Adds a member of your workspace to the specified group. Requires `group_members_manage` permission.
     *
     * @param {string} group_id - The ID of the target group.
     * @param {ElevenLabs.workspace.groups.AddMemberToGroupRequest} request
     * @param {MembersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.workspace.groups.members.add("group_id", {
     *         email: "email"
     *     })
     */
    add(group_id: string, request: ElevenLabs.workspace.groups.AddMemberToGroupRequest, requestOptions?: MembersClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.AddWorkspaceGroupMemberResponseModel>;
    private __add;
}
