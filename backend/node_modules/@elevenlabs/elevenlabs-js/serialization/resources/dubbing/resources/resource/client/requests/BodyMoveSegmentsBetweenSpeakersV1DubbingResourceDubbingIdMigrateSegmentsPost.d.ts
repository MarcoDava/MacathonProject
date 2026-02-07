import type * as ElevenLabs from "../../../../../../../api/index";
import * as core from "../../../../../../../core";
import type * as serializers from "../../../../../../index";
export declare const BodyMoveSegmentsBetweenSpeakersV1DubbingResourceDubbingIdMigrateSegmentsPost: core.serialization.Schema<serializers.dubbing.BodyMoveSegmentsBetweenSpeakersV1DubbingResourceDubbingIdMigrateSegmentsPost.Raw, ElevenLabs.dubbing.BodyMoveSegmentsBetweenSpeakersV1DubbingResourceDubbingIdMigrateSegmentsPost>;
export declare namespace BodyMoveSegmentsBetweenSpeakersV1DubbingResourceDubbingIdMigrateSegmentsPost {
    interface Raw {
        segment_ids: string[];
        speaker_id: string;
    }
}
