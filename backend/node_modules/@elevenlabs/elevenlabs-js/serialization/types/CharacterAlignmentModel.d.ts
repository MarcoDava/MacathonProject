import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const CharacterAlignmentModel: core.serialization.ObjectSchema<serializers.CharacterAlignmentModel.Raw, ElevenLabs.CharacterAlignmentModel>;
export declare namespace CharacterAlignmentModel {
    interface Raw {
        characters: string[];
        character_start_times_seconds: number[];
        character_end_times_seconds: number[];
    }
}
