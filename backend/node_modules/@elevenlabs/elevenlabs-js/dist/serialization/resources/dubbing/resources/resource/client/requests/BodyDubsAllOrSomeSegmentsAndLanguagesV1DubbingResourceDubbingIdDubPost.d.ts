import type * as ElevenLabs from "../../../../../../../api/index";
import * as core from "../../../../../../../core";
import type * as serializers from "../../../../../../index";
export declare const BodyDubsAllOrSomeSegmentsAndLanguagesV1DubbingResourceDubbingIdDubPost: core.serialization.Schema<serializers.dubbing.BodyDubsAllOrSomeSegmentsAndLanguagesV1DubbingResourceDubbingIdDubPost.Raw, ElevenLabs.dubbing.BodyDubsAllOrSomeSegmentsAndLanguagesV1DubbingResourceDubbingIdDubPost>;
export declare namespace BodyDubsAllOrSomeSegmentsAndLanguagesV1DubbingResourceDubbingIdDubPost {
    interface Raw {
        segments: string[];
        languages?: string[] | null;
    }
}
