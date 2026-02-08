import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const ProjectSnapshotResponse: core.serialization.ObjectSchema<serializers.ProjectSnapshotResponse.Raw, ElevenLabs.ProjectSnapshotResponse>;
export declare namespace ProjectSnapshotResponse {
    interface Raw {
        project_snapshot_id: string;
        project_id: string;
        created_at_unix: number;
        name: string;
        audio_upload?: Record<string, unknown> | null;
        zip_upload?: Record<string, unknown> | null;
    }
}
