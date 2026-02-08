import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { ChapterContentBlockInputModel } from "./ChapterContentBlockInputModel";
export declare const ChapterContentInputModel: core.serialization.ObjectSchema<serializers.ChapterContentInputModel.Raw, ElevenLabs.ChapterContentInputModel>;
export declare namespace ChapterContentInputModel {
    interface Raw {
        blocks: ChapterContentBlockInputModel.Raw[];
    }
}
