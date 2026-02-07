import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const DialogueInputResponseModel: core.serialization.ObjectSchema<serializers.DialogueInputResponseModel.Raw, ElevenLabs.DialogueInputResponseModel>;
export declare namespace DialogueInputResponseModel {
    interface Raw {
        text: string;
        voice_id: string;
        voice_name: string;
    }
}
