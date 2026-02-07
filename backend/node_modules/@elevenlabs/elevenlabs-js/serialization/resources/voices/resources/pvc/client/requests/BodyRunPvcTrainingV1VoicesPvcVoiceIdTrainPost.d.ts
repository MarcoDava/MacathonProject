import type * as ElevenLabs from "../../../../../../../api/index";
import * as core from "../../../../../../../core";
import type * as serializers from "../../../../../../index";
export declare const BodyRunPvcTrainingV1VoicesPvcVoiceIdTrainPost: core.serialization.Schema<serializers.voices.BodyRunPvcTrainingV1VoicesPvcVoiceIdTrainPost.Raw, ElevenLabs.voices.BodyRunPvcTrainingV1VoicesPvcVoiceIdTrainPost>;
export declare namespace BodyRunPvcTrainingV1VoicesPvcVoiceIdTrainPost {
    interface Raw {
        model_id?: string | null;
    }
}
