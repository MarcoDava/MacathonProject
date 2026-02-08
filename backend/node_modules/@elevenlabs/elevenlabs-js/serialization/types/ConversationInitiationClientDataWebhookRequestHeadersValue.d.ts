import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { ConvAiSecretLocator } from "./ConvAiSecretLocator";
export declare const ConversationInitiationClientDataWebhookRequestHeadersValue: core.serialization.Schema<serializers.ConversationInitiationClientDataWebhookRequestHeadersValue.Raw, ElevenLabs.ConversationInitiationClientDataWebhookRequestHeadersValue>;
export declare namespace ConversationInitiationClientDataWebhookRequestHeadersValue {
    type Raw = string | ConvAiSecretLocator.Raw;
}
