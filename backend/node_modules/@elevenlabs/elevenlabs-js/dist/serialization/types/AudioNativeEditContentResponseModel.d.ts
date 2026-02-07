import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const AudioNativeEditContentResponseModel: core.serialization.ObjectSchema<serializers.AudioNativeEditContentResponseModel.Raw, ElevenLabs.AudioNativeEditContentResponseModel>;
export declare namespace AudioNativeEditContentResponseModel {
    interface Raw {
        project_id: string;
        converting: boolean;
        publishing: boolean;
        html_snippet: string;
    }
}
