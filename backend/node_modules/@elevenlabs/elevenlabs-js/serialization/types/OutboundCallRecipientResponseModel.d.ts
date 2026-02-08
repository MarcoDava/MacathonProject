import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { BatchCallRecipientStatus } from "./BatchCallRecipientStatus";
import { ConversationInitiationClientDataInternal } from "./ConversationInitiationClientDataInternal";
export declare const OutboundCallRecipientResponseModel: core.serialization.ObjectSchema<serializers.OutboundCallRecipientResponseModel.Raw, ElevenLabs.OutboundCallRecipientResponseModel>;
export declare namespace OutboundCallRecipientResponseModel {
    interface Raw {
        id: string;
        phone_number?: string | null;
        whatsapp_user_id?: string | null;
        status: BatchCallRecipientStatus.Raw;
        created_at_unix: number;
        updated_at_unix: number;
        conversation_id?: string | null;
        conversation_initiation_client_data?: ConversationInitiationClientDataInternal.Raw | null;
    }
}
