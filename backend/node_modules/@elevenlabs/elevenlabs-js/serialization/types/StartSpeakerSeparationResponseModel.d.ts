import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const StartSpeakerSeparationResponseModel: core.serialization.ObjectSchema<serializers.StartSpeakerSeparationResponseModel.Raw, ElevenLabs.StartSpeakerSeparationResponseModel>;
export declare namespace StartSpeakerSeparationResponseModel {
    interface Raw {
        status: string;
    }
}
