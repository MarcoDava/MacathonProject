import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const DeleteVoiceResponseModel: core.serialization.ObjectSchema<serializers.DeleteVoiceResponseModel.Raw, ElevenLabs.DeleteVoiceResponseModel>;
export declare namespace DeleteVoiceResponseModel {
    interface Raw {
        status: string;
    }
}
