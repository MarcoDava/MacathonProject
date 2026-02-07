import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const ConversationConfigOverride: core.serialization.ObjectSchema<serializers.ConversationConfigOverride.Raw, ElevenLabs.ConversationConfigOverride>;
export declare namespace ConversationConfigOverride {
    interface Raw {
        text_only?: boolean | null;
    }
}
