import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const ChapterSnapshotResponse: core.serialization.ObjectSchema<serializers.ChapterSnapshotResponse.Raw, ElevenLabs.ChapterSnapshotResponse>;
export declare namespace ChapterSnapshotResponse {
    interface Raw {
        chapter_snapshot_id: string;
        project_id: string;
        chapter_id: string;
        created_at_unix: number;
        name: string;
    }
}
