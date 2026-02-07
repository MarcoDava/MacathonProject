import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const ChapterContentParagraphTtsNodeInputModel: core.serialization.ObjectSchema<serializers.ChapterContentParagraphTtsNodeInputModel.Raw, ElevenLabs.ChapterContentParagraphTtsNodeInputModel>;
export declare namespace ChapterContentParagraphTtsNodeInputModel {
    interface Raw {
        type: "tts_node";
        text: string;
        voice_id: string;
    }
}
