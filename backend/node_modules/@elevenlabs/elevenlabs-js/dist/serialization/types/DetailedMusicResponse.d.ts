import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { MusicPrompt } from "./MusicPrompt";
import { SongMetadata } from "./SongMetadata";
import { WordTimestamp } from "./WordTimestamp";
export declare const DetailedMusicResponse: core.serialization.ObjectSchema<serializers.DetailedMusicResponse.Raw, ElevenLabs.DetailedMusicResponse>;
export declare namespace DetailedMusicResponse {
    interface Raw {
        composition_plan: MusicPrompt.Raw;
        song_metadata: SongMetadata.Raw;
        words_timestamps?: WordTimestamp.Raw[] | null;
    }
}
