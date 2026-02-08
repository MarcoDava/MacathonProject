import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { SpeechHistoryItemResponse } from "./SpeechHistoryItemResponse";
export declare const GetSpeechHistoryResponse: core.serialization.ObjectSchema<serializers.GetSpeechHistoryResponse.Raw, ElevenLabs.GetSpeechHistoryResponse>;
export declare namespace GetSpeechHistoryResponse {
    interface Raw {
        history: SpeechHistoryItemResponse.Raw[];
        last_history_item_id?: string | null;
        has_more: boolean;
        scanned_until?: number | null;
    }
}
