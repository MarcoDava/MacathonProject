import type * as ElevenLabs from "../../../../../../../api/index";
import * as core from "../../../../../../../core";
import type * as serializers from "../../../../../../index";
export declare const BodyTranscribesSegmentsV1DubbingResourceDubbingIdTranscribePost: core.serialization.Schema<serializers.dubbing.BodyTranscribesSegmentsV1DubbingResourceDubbingIdTranscribePost.Raw, ElevenLabs.dubbing.BodyTranscribesSegmentsV1DubbingResourceDubbingIdTranscribePost>;
export declare namespace BodyTranscribesSegmentsV1DubbingResourceDubbingIdTranscribePost {
    interface Raw {
        segments: string[];
    }
}
