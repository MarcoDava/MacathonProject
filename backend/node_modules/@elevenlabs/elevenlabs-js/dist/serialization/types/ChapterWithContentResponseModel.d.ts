import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { ChapterContentResponseModel } from "./ChapterContentResponseModel";
import { ChapterStatisticsResponse } from "./ChapterStatisticsResponse";
import { ChapterWithContentResponseModelState } from "./ChapterWithContentResponseModelState";
export declare const ChapterWithContentResponseModel: core.serialization.ObjectSchema<serializers.ChapterWithContentResponseModel.Raw, ElevenLabs.ChapterWithContentResponseModel>;
export declare namespace ChapterWithContentResponseModel {
    interface Raw {
        chapter_id: string;
        name: string;
        last_conversion_date_unix?: number | null;
        conversion_progress?: number | null;
        can_be_downloaded: boolean;
        state: ChapterWithContentResponseModelState.Raw;
        has_video?: boolean | null;
        voice_ids?: string[] | null;
        statistics?: ChapterStatisticsResponse.Raw | null;
        last_conversion_error?: string | null;
        content: ChapterContentResponseModel.Raw;
    }
}
