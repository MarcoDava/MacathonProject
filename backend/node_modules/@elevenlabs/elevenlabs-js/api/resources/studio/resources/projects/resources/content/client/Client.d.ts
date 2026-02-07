import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../../../BaseClient";
import { type NormalizedClientOptions } from "../../../../../../../../BaseClient";
import * as core from "../../../../../../../../core";
import * as ElevenLabs from "../../../../../../../index";
export declare namespace ContentClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class ContentClient {
    protected readonly _options: NormalizedClientOptions<ContentClient.Options>;
    constructor(options?: ContentClient.Options);
    /**
     * Updates Studio project content.
     *
     * @param {string} project_id
     * @param {ElevenLabs.studio.projects.BodyUpdateStudioProjectContentV1StudioProjectsProjectIdContentPost} request
     * @param {ContentClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     import { createReadStream } from "fs";
     *     await client.studio.projects.content.update("21m00Tcm4TlvDq8ikWAM", {})
     */
    update(project_id: string, request: ElevenLabs.studio.projects.BodyUpdateStudioProjectContentV1StudioProjectsProjectIdContentPost, requestOptions?: ContentClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.EditProjectResponseModel>;
    private __update;
}
