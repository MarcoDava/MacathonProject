import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { TimeRange } from "./TimeRange";
export declare const SectionSource: core.serialization.ObjectSchema<serializers.SectionSource.Raw, ElevenLabs.SectionSource>;
export declare namespace SectionSource {
    interface Raw {
        song_id: string;
        range: TimeRange.Raw;
        negative_ranges?: TimeRange.Raw[] | null;
    }
}
