import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const DeleteChapterResponseModel: core.serialization.ObjectSchema<serializers.DeleteChapterResponseModel.Raw, ElevenLabs.DeleteChapterResponseModel>;
export declare namespace DeleteChapterResponseModel {
    interface Raw {
        status: string;
    }
}
