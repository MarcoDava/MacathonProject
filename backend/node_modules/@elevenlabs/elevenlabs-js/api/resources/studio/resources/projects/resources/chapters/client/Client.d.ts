import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../../../BaseClient";
import { type NormalizedClientOptions } from "../../../../../../../../BaseClient";
import * as core from "../../../../../../../../core";
import * as ElevenLabs from "../../../../../../../index";
import { SnapshotsClient } from "../resources/snapshots/client/Client";
export declare namespace ChaptersClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class ChaptersClient {
    protected readonly _options: NormalizedClientOptions<ChaptersClient.Options>;
    protected _snapshots: SnapshotsClient | undefined;
    constructor(options?: ChaptersClient.Options);
    get snapshots(): SnapshotsClient;
    /**
     * Returns a list of a Studio project's chapters.
     *
     * @param {string} project_id - The ID of the Studio project.
     * @param {ChaptersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.studio.projects.chapters.list("21m00Tcm4TlvDq8ikWAM")
     */
    list(project_id: string, requestOptions?: ChaptersClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.GetChaptersResponse>;
    private __list;
    /**
     * Creates a new chapter either as blank or from a URL.
     *
     * @param {string} project_id - The ID of the Studio project.
     * @param {ElevenLabs.studio.projects.BodyCreateChapterV1StudioProjectsProjectIdChaptersPost} request
     * @param {ChaptersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.studio.projects.chapters.create("21m00Tcm4TlvDq8ikWAM", {
     *         name: "Chapter 1"
     *     })
     */
    create(project_id: string, request: ElevenLabs.studio.projects.BodyCreateChapterV1StudioProjectsProjectIdChaptersPost, requestOptions?: ChaptersClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.AddChapterResponseModel>;
    private __create;
    /**
     * Returns information about a specific chapter.
     *
     * @param {string} project_id - The ID of the project to be used. You can use the [List projects](/docs/api-reference/studio/get-projects) endpoint to list all the available projects.
     * @param {string} chapter_id - The ID of the chapter to be used. You can use the [List project chapters](/docs/api-reference/studio/get-chapters) endpoint to list all the available chapters.
     * @param {ChaptersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.studio.projects.chapters.get("21m00Tcm4TlvDq8ikWAM", "21m00Tcm4TlvDq8ikWAM")
     */
    get(project_id: string, chapter_id: string, requestOptions?: ChaptersClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.ChapterWithContentResponseModel>;
    private __get;
    /**
     * Updates a chapter.
     *
     * @param {string} project_id - The ID of the project to be used. You can use the [List projects](/docs/api-reference/studio/get-projects) endpoint to list all the available projects.
     * @param {string} chapter_id - The ID of the chapter to be used. You can use the [List project chapters](/docs/api-reference/studio/get-chapters) endpoint to list all the available chapters.
     * @param {ElevenLabs.studio.projects.BodyUpdateChapterV1StudioProjectsProjectIdChaptersChapterIdPost} request
     * @param {ChaptersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.studio.projects.chapters.update("21m00Tcm4TlvDq8ikWAM", "21m00Tcm4TlvDq8ikWAM")
     */
    update(project_id: string, chapter_id: string, request?: ElevenLabs.studio.projects.BodyUpdateChapterV1StudioProjectsProjectIdChaptersChapterIdPost, requestOptions?: ChaptersClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.EditChapterResponseModel>;
    private __update;
    /**
     * Deletes a chapter.
     *
     * @param {string} project_id - The ID of the project to be used. You can use the [List projects](/docs/api-reference/studio/get-projects) endpoint to list all the available projects.
     * @param {string} chapter_id - The ID of the chapter to be used. You can use the [List project chapters](/docs/api-reference/studio/get-chapters) endpoint to list all the available chapters.
     * @param {ChaptersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.studio.projects.chapters.delete("21m00Tcm4TlvDq8ikWAM", "21m00Tcm4TlvDq8ikWAM")
     */
    delete(project_id: string, chapter_id: string, requestOptions?: ChaptersClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.DeleteChapterResponseModel>;
    private __delete;
    /**
     * Starts conversion of a specific chapter.
     *
     * @param {string} project_id - The ID of the project to be used. You can use the [List projects](/docs/api-reference/studio/get-projects) endpoint to list all the available projects.
     * @param {string} chapter_id - The ID of the chapter to be used. You can use the [List project chapters](/docs/api-reference/studio/get-chapters) endpoint to list all the available chapters.
     * @param {ChaptersClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.studio.projects.chapters.convert("21m00Tcm4TlvDq8ikWAM", "21m00Tcm4TlvDq8ikWAM")
     */
    convert(project_id: string, chapter_id: string, requestOptions?: ChaptersClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.ConvertChapterResponseModel>;
    private __convert;
}
