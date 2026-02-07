import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const SongMetadata: core.serialization.ObjectSchema<serializers.SongMetadata.Raw, ElevenLabs.SongMetadata>;
export declare namespace SongMetadata {
    interface Raw {
        title?: string | null;
        description?: string | null;
        genres: string[];
        languages: string[];
        is_explicit?: boolean | null;
    }
}
