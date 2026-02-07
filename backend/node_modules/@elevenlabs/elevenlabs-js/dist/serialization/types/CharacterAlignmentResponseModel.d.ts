import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const CharacterAlignmentResponseModel: core.serialization.ObjectSchema<serializers.CharacterAlignmentResponseModel.Raw, ElevenLabs.CharacterAlignmentResponseModel>;
export declare namespace CharacterAlignmentResponseModel {
    interface Raw {
        characters: string[];
        character_start_times_seconds: number[];
        character_end_times_seconds: number[];
    }
}
