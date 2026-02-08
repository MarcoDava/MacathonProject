import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../../../BaseClient";
import { type NormalizedClientOptions } from "../../../../../../../../BaseClient";
import * as core from "../../../../../../../../core";
import * as ElevenLabs from "../../../../../../../index";
export declare namespace SnapshotsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class SnapshotsClient {
    protected readonly _options: NormalizedClientOptions<SnapshotsClient.Options>;
    constructor(options?: SnapshotsClient.Options);
    /**
     * Retrieves a list of snapshots for a Studio project.
     *
     * @param {string} project_id - The ID of the Studio project.
     * @param {SnapshotsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.studio.projects.snapshots.list("21m00Tcm4TlvDq8ikWAM")
     */
    list(project_id: string, requestOptions?: SnapshotsClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.ProjectSnapshotsResponse>;
    private __list;
    /**
     * Returns the project snapshot.
     *
     * @param {string} project_id - The ID of the Studio project.
     * @param {string} project_snapshot_id - The ID of the Studio project snapshot.
     * @param {SnapshotsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.studio.projects.snapshots.get("21m00Tcm4TlvDq8ikWAM", "21m00Tcm4TlvDq8ikWAM")
     */
    get(project_id: string, project_snapshot_id: string, requestOptions?: SnapshotsClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.ProjectSnapshotExtendedResponseModel>;
    private __get;
    /**
     * Stream the audio from a Studio project snapshot.
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     */
    stream(project_id: string, project_snapshot_id: string, request?: ElevenLabs.studio.projects.BodyStreamStudioProjectAudioV1StudioProjectsProjectIdSnapshotsProjectSnapshotIdStreamPost, requestOptions?: SnapshotsClient.RequestOptions): core.HttpResponsePromise<ReadableStream<Uint8Array>>;
    private __stream;
    /**
     * Returns a compressed archive of the Studio project's audio.
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     */
    streamArchive(project_id: string, project_snapshot_id: string, requestOptions?: SnapshotsClient.RequestOptions): core.HttpResponsePromise<ReadableStream<Uint8Array>>;
    private __streamArchive;
}
