import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const EditVoiceResponseModel: core.serialization.ObjectSchema<serializers.EditVoiceResponseModel.Raw, ElevenLabs.EditVoiceResponseModel>;
export declare namespace EditVoiceResponseModel {
    interface Raw {
        status: string;
    }
}
