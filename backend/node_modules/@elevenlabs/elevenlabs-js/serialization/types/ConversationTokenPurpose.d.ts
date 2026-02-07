import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const ConversationTokenPurpose: core.serialization.Schema<serializers.ConversationTokenPurpose.Raw, ElevenLabs.ConversationTokenPurpose>;
export declare namespace ConversationTokenPurpose {
    type Raw = "signed_url" | "shareable_link";
}
