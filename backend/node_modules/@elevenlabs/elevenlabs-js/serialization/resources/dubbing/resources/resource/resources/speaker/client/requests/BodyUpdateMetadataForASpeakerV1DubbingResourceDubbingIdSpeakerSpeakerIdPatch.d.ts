import type * as ElevenLabs from "../../../../../../../../../api/index";
import * as core from "../../../../../../../../../core";
import type * as serializers from "../../../../../../../../index";
export declare const BodyUpdateMetadataForASpeakerV1DubbingResourceDubbingIdSpeakerSpeakerIdPatch: core.serialization.Schema<serializers.dubbing.resource.BodyUpdateMetadataForASpeakerV1DubbingResourceDubbingIdSpeakerSpeakerIdPatch.Raw, ElevenLabs.dubbing.resource.BodyUpdateMetadataForASpeakerV1DubbingResourceDubbingIdSpeakerSpeakerIdPatch>;
export declare namespace BodyUpdateMetadataForASpeakerV1DubbingResourceDubbingIdSpeakerSpeakerIdPatch {
    interface Raw {
        speaker_name?: string | null;
        voice_id?: string | null;
        voice_stability?: number | null;
        voice_similarity?: number | null;
        voice_style?: number | null;
        languages?: string[] | null;
    }
}
