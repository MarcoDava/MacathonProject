import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const SpeakerAudioResponseModel: core.serialization.ObjectSchema<serializers.SpeakerAudioResponseModel.Raw, ElevenLabs.SpeakerAudioResponseModel>;
export declare namespace SpeakerAudioResponseModel {
    interface Raw {
        audio_base_64: string;
        media_type: string;
        duration_secs: number;
    }
}
