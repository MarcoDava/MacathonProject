import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const StartPvcVoiceTrainingResponseModel: core.serialization.ObjectSchema<serializers.StartPvcVoiceTrainingResponseModel.Raw, ElevenLabs.StartPvcVoiceTrainingResponseModel>;
export declare namespace StartPvcVoiceTrainingResponseModel {
    interface Raw {
        status: string;
    }
}
