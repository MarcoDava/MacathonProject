import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const ChapterStatisticsResponse: core.serialization.ObjectSchema<serializers.ChapterStatisticsResponse.Raw, ElevenLabs.ChapterStatisticsResponse>;
export declare namespace ChapterStatisticsResponse {
    interface Raw {
        characters_unconverted: number;
        characters_converted: number;
        paragraphs_converted: number;
        paragraphs_unconverted: number;
    }
}
