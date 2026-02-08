import type * as ElevenLabs from "../../../../../../../../../../../api/index";
import * as core from "../../../../../../../../../../../core";
import type * as serializers from "../../../../../../../../../../index";
export declare const BodyStreamChapterAudioV1StudioProjectsProjectIdChaptersChapterIdSnapshotsChapterSnapshotIdStreamPost: core.serialization.Schema<serializers.studio.projects.chapters.BodyStreamChapterAudioV1StudioProjectsProjectIdChaptersChapterIdSnapshotsChapterSnapshotIdStreamPost.Raw, ElevenLabs.studio.projects.chapters.BodyStreamChapterAudioV1StudioProjectsProjectIdChaptersChapterIdSnapshotsChapterSnapshotIdStreamPost>;
export declare namespace BodyStreamChapterAudioV1StudioProjectsProjectIdChaptersChapterIdSnapshotsChapterSnapshotIdStreamPost {
    interface Raw {
        convert_to_mpeg?: boolean | null;
    }
}
