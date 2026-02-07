import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { ForcedAlignmentCharacterResponseModel } from "./ForcedAlignmentCharacterResponseModel";
import { ForcedAlignmentWordResponseModel } from "./ForcedAlignmentWordResponseModel";
export declare const ForcedAlignmentResponseModel: core.serialization.ObjectSchema<serializers.ForcedAlignmentResponseModel.Raw, ElevenLabs.ForcedAlignmentResponseModel>;
export declare namespace ForcedAlignmentResponseModel {
    interface Raw {
        characters: ForcedAlignmentCharacterResponseModel.Raw[];
        words: ForcedAlignmentWordResponseModel.Raw[];
        loss: number;
    }
}
