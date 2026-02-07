import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { SectionSource } from "./SectionSource";
export declare const SongSection: core.serialization.ObjectSchema<serializers.SongSection.Raw, ElevenLabs.SongSection>;
export declare namespace SongSection {
    interface Raw {
        section_name: string;
        positive_local_styles: string[];
        negative_local_styles: string[];
        duration_ms: number;
        lines: string[];
        source_from?: SectionSource.Raw | null;
    }
}
