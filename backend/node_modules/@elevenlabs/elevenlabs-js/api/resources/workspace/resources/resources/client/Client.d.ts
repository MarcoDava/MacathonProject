import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../BaseClient";
import { type NormalizedClientOptions } from "../../../../../../BaseClient";
import * as core from "../../../../../../core";
import * as ElevenLabs from "../../../../../index";
export declare namespace ResourcesClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class ResourcesClient {
    protected readonly _options: NormalizedClientOptions<ResourcesClient.Options>;
    constructor(options?: ResourcesClient.Options);
    /**
     * Gets the metadata of a resource by ID.
     *
     * @param {string} resource_id - The ID of the target resource.
     * @param {ElevenLabs.workspace.ResourcesGetRequest} request
     * @param {ResourcesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.workspace.resources.get("resource_id", {
     *         resourceType: "voice"
     *     })
     */
    get(resource_id: string, request: ElevenLabs.workspace.ResourcesGetRequest, requestOptions?: ResourcesClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.ResourceMetadataResponseModel>;
    private __get;
    /**
     * Grants a role on a workspace resource to a user or a group. It overrides any existing role this user/service account/group/workspace api key has on the resource. To target a user or service account, pass only the user email. The user must be in your workspace. To target a group, pass only the group id. To target a workspace api key, pass the api key id. The resource will be shared with the service account associated with the api key. You must have admin access to the resource to share it.
     *
     * @param {string} resource_id - The ID of the target resource.
     * @param {ElevenLabs.workspace.BodyShareWorkspaceResourceV1WorkspaceResourcesResourceIdSharePost} request
     * @param {ResourcesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.workspace.resources.share("resource_id", {
     *         role: "admin",
     *         resourceType: "voice"
     *     })
     */
    share(resource_id: string, request: ElevenLabs.workspace.BodyShareWorkspaceResourceV1WorkspaceResourcesResourceIdSharePost, requestOptions?: ResourcesClient.RequestOptions): core.HttpResponsePromise<unknown>;
    private __share;
    /**
     * Removes any existing role on a workspace resource from a user, service account, group or workspace api key. To target a user or service account, pass only the user email. The user must be in your workspace. To target a group, pass only the group id. To target a workspace api key, pass the api key id. The resource will be unshared from the service account associated with the api key. You must have admin access to the resource to unshare it. You cannot remove permissions from the user who created the resource.
     *
     * @param {string} resource_id - The ID of the target resource.
     * @param {ElevenLabs.workspace.BodyUnshareWorkspaceResourceV1WorkspaceResourcesResourceIdUnsharePost} request
     * @param {ResourcesClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.workspace.resources.unshare("resource_id", {
     *         resourceType: "voice"
     *     })
     */
    unshare(resource_id: string, request: ElevenLabs.workspace.BodyUnshareWorkspaceResourceV1WorkspaceResourcesResourceIdUnsharePost, requestOptions?: ResourcesClient.RequestOptions): core.HttpResponsePromise<unknown>;
    private __unshare;
}
