import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { ConversationInitiationClientDataWebhookRequestHeadersValue } from "./ConversationInitiationClientDataWebhookRequestHeadersValue";
export declare const ConversationInitiationClientDataWebhook: core.serialization.ObjectSchema<serializers.ConversationInitiationClientDataWebhook.Raw, ElevenLabs.ConversationInitiationClientDataWebhook>;
export declare namespace ConversationInitiationClientDataWebhook {
    interface Raw {
        url: string;
        request_headers: Record<string, ConversationInitiationClientDataWebhookRequestHeadersValue.Raw>;
    }
}
