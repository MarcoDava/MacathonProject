import type * as ElevenLabs from "../index";
export interface OutboundCallRecipient {
    id?: string;
    phoneNumber?: string;
    whatsappUserId?: string;
    conversationInitiationClientData?: ElevenLabs.ConversationInitiationClientDataRequestInput;
}
