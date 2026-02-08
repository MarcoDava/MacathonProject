import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const ForcedAlignmentCharacterResponseModel: core.serialization.ObjectSchema<serializers.ForcedAlignmentCharacterResponseModel.Raw, ElevenLabs.ForcedAlignmentCharacterResponseModel>;
export declare namespace ForcedAlignmentCharacterResponseModel {
    interface Raw {
        text: string;
        start: number;
        end: number;
    }
}
