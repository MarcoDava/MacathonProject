import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const UtteranceResponseModel: core.serialization.ObjectSchema<serializers.UtteranceResponseModel.Raw, ElevenLabs.UtteranceResponseModel>;
export declare namespace UtteranceResponseModel {
    interface Raw {
        start: number;
        end: number;
    }
}
