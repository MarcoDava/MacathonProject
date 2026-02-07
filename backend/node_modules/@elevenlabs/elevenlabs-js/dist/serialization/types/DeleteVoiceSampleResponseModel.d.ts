import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const DeleteVoiceSampleResponseModel: core.serialization.ObjectSchema<serializers.DeleteVoiceSampleResponseModel.Raw, ElevenLabs.DeleteVoiceSampleResponseModel>;
export declare namespace DeleteVoiceSampleResponseModel {
    interface Raw {
        status: string;
    }
}
