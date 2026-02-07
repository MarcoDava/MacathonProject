import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const RagChunkMetadata: core.serialization.ObjectSchema<serializers.RagChunkMetadata.Raw, ElevenLabs.RagChunkMetadata>;
export declare namespace RagChunkMetadata {
    interface Raw {
        document_id: string;
        chunk_id: string;
        vector_distance: number;
    }
}
