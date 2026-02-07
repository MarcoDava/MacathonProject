import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const ForcedAlignmentWordResponseModel: core.serialization.ObjectSchema<serializers.ForcedAlignmentWordResponseModel.Raw, ElevenLabs.ForcedAlignmentWordResponseModel>;
export declare namespace ForcedAlignmentWordResponseModel {
    interface Raw {
        text: string;
        start: number;
        end: number;
        loss: number;
    }
}
