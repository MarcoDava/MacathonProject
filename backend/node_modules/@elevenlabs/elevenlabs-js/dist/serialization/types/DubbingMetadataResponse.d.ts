import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { DubbingMediaMetadata } from "./DubbingMediaMetadata";
export declare const DubbingMetadataResponse: core.serialization.ObjectSchema<serializers.DubbingMetadataResponse.Raw, ElevenLabs.DubbingMetadataResponse>;
export declare namespace DubbingMetadataResponse {
    interface Raw {
        dubbing_id: string;
        name: string;
        status: string;
        source_language?: string | null;
        target_languages: string[];
        editable?: boolean | null;
        created_at: string;
        media_metadata?: DubbingMediaMetadata.Raw | null;
        error?: string | null;
    }
}
