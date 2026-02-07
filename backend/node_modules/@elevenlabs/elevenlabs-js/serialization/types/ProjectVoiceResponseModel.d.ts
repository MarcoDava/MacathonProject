import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const ProjectVoiceResponseModel: core.serialization.ObjectSchema<serializers.ProjectVoiceResponseModel.Raw, ElevenLabs.ProjectVoiceResponseModel>;
export declare namespace ProjectVoiceResponseModel {
    interface Raw {
        voice_id: string;
        alias: string;
        stability: number;
        similarity_boost: number;
        style: number;
        is_pinned: boolean;
        use_speaker_boost: boolean;
        volume_gain: number;
        speed: number;
    }
}
