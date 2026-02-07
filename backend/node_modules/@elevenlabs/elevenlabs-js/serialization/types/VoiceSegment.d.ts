import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const VoiceSegment: core.serialization.ObjectSchema<serializers.VoiceSegment.Raw, ElevenLabs.VoiceSegment>;
export declare namespace VoiceSegment {
    interface Raw {
        voice_id: string;
        start_time_seconds: number;
        end_time_seconds: number;
        character_start_index: number;
        character_end_index: number;
        dialogue_input_index: number;
    }
}
