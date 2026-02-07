import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { ConversationInitiationClientDataRequestInput } from "./ConversationInitiationClientDataRequestInput";
export declare const OutboundCallRecipient: core.serialization.ObjectSchema<serializers.OutboundCallRecipient.Raw, ElevenLabs.OutboundCallRecipient>;
export declare namespace OutboundCallRecipient {
    interface Raw {
        id?: string | null;
        phone_number?: string | null;
        whatsapp_user_id?: string | null;
        conversation_initiation_client_data?: ConversationInitiationClientDataRequestInput.Raw | null;
    }
}
