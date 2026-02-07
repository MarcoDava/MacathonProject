import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const AudioNativeCreateProjectResponseModel: core.serialization.ObjectSchema<serializers.AudioNativeCreateProjectResponseModel.Raw, ElevenLabs.AudioNativeCreateProjectResponseModel>;
export declare namespace AudioNativeCreateProjectResponseModel {
    interface Raw {
        project_id: string;
        converting: boolean;
        html_snippet: string;
    }
}
