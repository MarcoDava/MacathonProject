import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { ChapterContentBlockResponseModel } from "./ChapterContentBlockResponseModel";
export declare const ChapterContentResponseModel: core.serialization.ObjectSchema<serializers.ChapterContentResponseModel.Raw, ElevenLabs.ChapterContentResponseModel>;
export declare namespace ChapterContentResponseModel {
    interface Raw {
        blocks: ChapterContentBlockResponseModel.Raw[];
    }
}
