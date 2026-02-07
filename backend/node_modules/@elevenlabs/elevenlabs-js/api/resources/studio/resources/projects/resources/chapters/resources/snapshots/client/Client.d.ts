import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../../../../../BaseClient";
import { type NormalizedClientOptions } from "../../../../../../../../../../BaseClient";
import * as core from "../../../../../../../../../../core";
import * as ElevenLabs from "../../../../../../../../../index";
export declare namespace SnapshotsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class SnapshotsClient {
    protected readonly _options: NormalizedClientOptions<SnapshotsClient.Options>;
    constructor(options?: SnapshotsClient.Options);
    /**
     * Gets information about all the snapshots of a chapter. Each snapshot can be downloaded as audio. Whenever a chapter is converted a snapshot will automatically be created.
     *
     * @param {string} project_id - The ID of the project to be used. You can use the [List projects](/docs/api-reference/studio/get-projects) endpoint to list all the available projects.
     * @param {string} chapter_id - The ID of the chapter to be used. You can use the [List project chapters](/docs/api-reference/studio/get-chapters) endpoint to list all the available chapters.
     * @param {SnapshotsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.studio.projects.chapters.snapshots.list("21m00Tcm4TlvDq8ikWAM", "21m00Tcm4TlvDq8ikWAM")
     */
    list(project_id: string, chapter_id: string, requestOptions?: SnapshotsClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.ChapterSnapshotsResponse>;
    private __list;
    /**
     * Returns the chapter snapshot.
     *
     * @param {string} project_id - The ID of the Studio project.
     * @param {string} chapter_id - The ID of the chapter.
     * @param {string} chapter_snapshot_id - The ID of the chapter snapshot.
     * @param {SnapshotsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.studio.projects.chapters.snapshots.get("21m00Tcm4TlvDq8ikWAM", "21m00Tcm4TlvDq8ikWAM", "21m00Tcm4TlvDq8ikWAM")
     */
    get(project_id: string, chapter_id: string, chapter_snapshot_id: string, requestOptions?: SnapshotsClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.ChapterSnapshotExtendedResponseModel>;
    private __get;
    /**
     * Stream the audio from a chapter snapshot. Use `GET /v1/studio/projects/{project_id}/chapters/{chapter_id}/snapshots` to return the snapshots of a chapter.
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     */
    stream(project_id: string, chapter_id: string, chapter_snapshot_id: string, request?: ElevenLabs.studio.projects.chapters.BodyStreamChapterAudioV1StudioProjectsProjectIdChaptersChapterIdSnapshotsChapterSnapshotIdStreamPost, requestOptions?: SnapshotsClient.RequestOptions): core.HttpResponsePromise<ReadableStream<Uint8Array>>;
    private __stream;
}
