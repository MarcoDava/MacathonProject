import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const ChapterContentBlockTtsNodeResponseModel: core.serialization.ObjectSchema<serializers.ChapterContentBlockTtsNodeResponseModel.Raw, ElevenLabs.ChapterContentBlockTtsNodeResponseModel>;
export declare namespace ChapterContentBlockTtsNodeResponseModel {
    interface Raw {
        voice_id: string;
        text: string;
    }
}
