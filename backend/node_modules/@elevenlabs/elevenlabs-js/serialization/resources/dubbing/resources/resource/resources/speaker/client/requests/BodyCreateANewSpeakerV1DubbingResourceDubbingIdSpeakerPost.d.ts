import type * as ElevenLabs from "../../../../../../../../../api/index";
import * as core from "../../../../../../../../../core";
import type * as serializers from "../../../../../../../../index";
export declare const BodyCreateANewSpeakerV1DubbingResourceDubbingIdSpeakerPost: core.serialization.Schema<serializers.dubbing.resource.BodyCreateANewSpeakerV1DubbingResourceDubbingIdSpeakerPost.Raw, ElevenLabs.dubbing.resource.BodyCreateANewSpeakerV1DubbingResourceDubbingIdSpeakerPost>;
export declare namespace BodyCreateANewSpeakerV1DubbingResourceDubbingIdSpeakerPost {
    interface Raw {
        speaker_name?: string | null;
        voice_id?: string | null;
        voice_stability?: number | null;
        voice_similarity?: number | null;
        voice_style?: number | null;
    }
}
