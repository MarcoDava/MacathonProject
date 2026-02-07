import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const ConvertChapterResponseModel: core.serialization.ObjectSchema<serializers.ConvertChapterResponseModel.Raw, ElevenLabs.ConvertChapterResponseModel>;
export declare namespace ConvertChapterResponseModel {
    interface Raw {
        status: string;
    }
}
