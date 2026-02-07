import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { ChapterWithContentResponseModel } from "./ChapterWithContentResponseModel";
export declare const EditChapterResponseModel: core.serialization.ObjectSchema<serializers.EditChapterResponseModel.Raw, ElevenLabs.EditChapterResponseModel>;
export declare namespace EditChapterResponseModel {
    interface Raw {
        chapter: ChapterWithContentResponseModel.Raw;
    }
}
