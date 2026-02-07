import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { ChapterState } from "./ChapterState";
import { ChapterStatisticsResponse } from "./ChapterStatisticsResponse";
export declare const ChapterResponse: core.serialization.ObjectSchema<serializers.ChapterResponse.Raw, ElevenLabs.ChapterResponse>;
export declare namespace ChapterResponse {
    interface Raw {
        chapter_id: string;
        name: string;
        last_conversion_date_unix?: number | null;
        conversion_progress?: number | null;
        can_be_downloaded: boolean;
        state: ChapterState.Raw;
        has_video?: boolean | null;
        voice_ids?: string[] | null;
        statistics?: ChapterStatisticsResponse.Raw | null;
        last_conversion_error?: string | null;
    }
}
