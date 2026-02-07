import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const AsyncConversationMetadataDeliveryStatus: core.serialization.Schema<serializers.AsyncConversationMetadataDeliveryStatus.Raw, ElevenLabs.AsyncConversationMetadataDeliveryStatus>;
export declare namespace AsyncConversationMetadataDeliveryStatus {
    type Raw = "pending" | "success" | "failed";
}
