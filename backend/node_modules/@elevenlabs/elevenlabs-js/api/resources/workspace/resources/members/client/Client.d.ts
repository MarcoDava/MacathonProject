import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../BaseClient";
import { type NormalizedClientOptions } from "../../../../../../BaseClient";
import * as core from "../../../../../../core";
import * as ElevenLabs from "../../../../../index";
export declare namespace MembersClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class MembersClient {
    protected readonly _options: NormalizedClientOptions<MembersClient.Options>;
    constructor(options?: MembersClient.Options);
    /**
     * Updates attributes of a workspace member. Apart from the email identifier, all parameters will remain unchanged unless specified. This endpoint may only be called by workspace administrators.
     *
     * @param {ElevenLabs.workspace.UpdateMemberRequest} request
     * @param {MembersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.workspace.members.update({
     *         email: "email"
     *     })
     */
    update(request: ElevenLabs.workspace.UpdateMemberRequest, requestOptions?: MembersClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.UpdateWorkspaceMemberResponseModel>;
    private __update;
}
