import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../BaseClient";
import { type NormalizedClientOptions } from "../../../../../../BaseClient";
import * as core from "../../../../../../core";
import * as ElevenLabs from "../../../../../index";
export declare namespace InvitesClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class InvitesClient {
    protected readonly _options: NormalizedClientOptions<InvitesClient.Options>;
    constructor(options?: InvitesClient.Options);
    /**
     * Sends an email invitation to join your workspace to the provided email. If the user doesn't have an account they will be prompted to create one. If the user accepts this invite they will be added as a user to your workspace and your subscription using one of your seats. This endpoint may only be called by workspace members with the WORKSPACE_MEMBERS_INVITE permission. If the user is already in the workspace a 400 error will be returned.
     *
     * @param {ElevenLabs.workspace.InviteUserRequest} request
     * @param {InvitesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.workspace.invites.create({
     *         email: "john.doe@testmail.com"
     *     })
     */
    create(request: ElevenLabs.workspace.InviteUserRequest, requestOptions?: InvitesClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.AddWorkspaceInviteResponseModel>;
    private __create;
    /**
     * Sends email invitations to join your workspace to the provided emails. Requires all email addresses to be part of a verified domain. If the users don't have an account they will be prompted to create one. If the users accept these invites they will be added as users to your workspace and your subscription using one of your seats. This endpoint may only be called by workspace members with the WORKSPACE_MEMBERS_INVITE permission.
     *
     * @param {ElevenLabs.workspace.BodyInviteMultipleUsersV1WorkspaceInvitesAddBulkPost} request
     * @param {InvitesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.workspace.invites.createBatch({
     *         emails: ["emails"]
     *     })
     */
    createBatch(request: ElevenLabs.workspace.BodyInviteMultipleUsersV1WorkspaceInvitesAddBulkPost, requestOptions?: InvitesClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.AddWorkspaceInviteResponseModel>;
    private __createBatch;
    /**
     * Invalidates an existing email invitation. The invitation will still show up in the inbox it has been delivered to, but activating it to join the workspace won't work. This endpoint may only be called by workspace members with the WORKSPACE_MEMBERS_INVITE permission.
     *
     * @param {ElevenLabs.workspace.BodyDeleteExistingInvitationV1WorkspaceInvitesDelete} request
     * @param {InvitesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.workspace.invites.delete({
     *         email: "john.doe@testmail.com"
     *     })
     */
    delete(request: ElevenLabs.workspace.BodyDeleteExistingInvitationV1WorkspaceInvitesDelete, requestOptions?: InvitesClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.DeleteWorkspaceInviteResponseModel>;
    private __delete;
}
