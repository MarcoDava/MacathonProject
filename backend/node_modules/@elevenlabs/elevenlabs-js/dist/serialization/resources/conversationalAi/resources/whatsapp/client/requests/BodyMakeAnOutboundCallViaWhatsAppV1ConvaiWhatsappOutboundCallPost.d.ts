import type * as ElevenLabs from "../../../../../../../api/index";
import * as core from "../../../../../../../core";
import type * as serializers from "../../../../../../index";
import { ConversationInitiationClientDataRequestInput } from "../../../../../../types/ConversationInitiationClientDataRequestInput";
export declare const BodyMakeAnOutboundCallViaWhatsAppV1ConvaiWhatsappOutboundCallPost: core.serialization.Schema<serializers.conversationalAi.BodyMakeAnOutboundCallViaWhatsAppV1ConvaiWhatsappOutboundCallPost.Raw, ElevenLabs.conversationalAi.BodyMakeAnOutboundCallViaWhatsAppV1ConvaiWhatsappOutboundCallPost>;
export declare namespace BodyMakeAnOutboundCallViaWhatsAppV1ConvaiWhatsappOutboundCallPost {
    interface Raw {
        whatsapp_phone_number_id: string;
        whatsapp_user_id: string;
        whatsapp_call_permission_request_template_name: string;
        whatsapp_call_permission_request_template_language_code: string;
        agent_id: string;
        conversation_initiation_client_data?: ConversationInitiationClientDataRequestInput.Raw | null;
    }
}
