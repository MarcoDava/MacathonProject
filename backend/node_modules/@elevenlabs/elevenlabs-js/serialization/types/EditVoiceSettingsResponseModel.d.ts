import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const EditVoiceSettingsResponseModel: core.serialization.ObjectSchema<serializers.EditVoiceSettingsResponseModel.Raw, ElevenLabs.EditVoiceSettingsResponseModel>;
export declare namespace EditVoiceSettingsResponseModel {
    interface Raw {
        status: string;
    }
}
