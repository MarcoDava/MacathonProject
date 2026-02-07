import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const ConversationConfigOverrideConfig: core.serialization.ObjectSchema<serializers.ConversationConfigOverrideConfig.Raw, ElevenLabs.ConversationConfigOverrideConfig>;
export declare namespace ConversationConfigOverrideConfig {
    interface Raw {
        text_only?: boolean | null;
    }
}
