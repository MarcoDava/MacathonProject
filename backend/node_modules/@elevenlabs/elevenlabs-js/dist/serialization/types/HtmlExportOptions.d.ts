import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const HtmlExportOptions: core.serialization.ObjectSchema<serializers.HtmlExportOptions.Raw, ElevenLabs.HtmlExportOptions>;
export declare namespace HtmlExportOptions {
    interface Raw {
        include_speakers?: boolean | null;
        include_timestamps?: boolean | null;
        segment_on_silence_longer_than_s?: number | null;
        max_segment_duration_s?: number | null;
        max_segment_chars?: number | null;
    }
}
