import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { DialogueInputResponseModel } from "./DialogueInputResponseModel";
import { FeedbackItem } from "./FeedbackItem";
import { HistoryAlignmentsResponseModel } from "./HistoryAlignmentsResponseModel";
import { SpeechHistoryItemResponseModelSource } from "./SpeechHistoryItemResponseModelSource";
import { SpeechHistoryItemResponseModelVoiceCategory } from "./SpeechHistoryItemResponseModelVoiceCategory";
export declare const SpeechHistoryItemResponse: core.serialization.ObjectSchema<serializers.SpeechHistoryItemResponse.Raw, ElevenLabs.SpeechHistoryItemResponse>;
export declare namespace SpeechHistoryItemResponse {
    interface Raw {
        history_item_id: string;
        request_id?: string | null;
        voice_id?: string | null;
        model_id?: string | null;
        voice_name?: string | null;
        voice_category?: SpeechHistoryItemResponseModelVoiceCategory.Raw | null;
        text?: string | null;
        date_unix: number;
        character_count_change_from: number;
        character_count_change_to: number;
        content_type: string;
        state?: unknown;
        settings?: Record<string, unknown> | null;
        feedback?: FeedbackItem.Raw | null;
        share_link_id?: string | null;
        source?: SpeechHistoryItemResponseModelSource.Raw | null;
        alignments?: HistoryAlignmentsResponseModel.Raw | null;
        dialogue?: DialogueInputResponseModel.Raw[] | null;
    }
}
