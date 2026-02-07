import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const HistoryItemResponse: core.serialization.ObjectSchema<serializers.HistoryItemResponse.Raw, ElevenLabs.HistoryItemResponse>;
export declare namespace HistoryItemResponse {
    interface Raw {
        state?: unknown | null;
        voice_category?: unknown | null;
    }
}
