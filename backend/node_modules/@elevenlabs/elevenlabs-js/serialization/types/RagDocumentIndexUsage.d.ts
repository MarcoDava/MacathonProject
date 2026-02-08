import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const RagDocumentIndexUsage: core.serialization.ObjectSchema<serializers.RagDocumentIndexUsage.Raw, ElevenLabs.RagDocumentIndexUsage>;
export declare namespace RagDocumentIndexUsage {
    interface Raw {
        used_bytes: number;
    }
}
