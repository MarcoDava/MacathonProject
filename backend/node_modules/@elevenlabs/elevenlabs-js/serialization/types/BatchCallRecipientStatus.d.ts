import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const BatchCallRecipientStatus: core.serialization.Schema<serializers.BatchCallRecipientStatus.Raw, ElevenLabs.BatchCallRecipientStatus>;
export declare namespace BatchCallRecipientStatus {
    type Raw = "pending" | "dispatched" | "initiated" | "in_progress" | "completed" | "failed" | "cancelled" | "voicemail";
}
