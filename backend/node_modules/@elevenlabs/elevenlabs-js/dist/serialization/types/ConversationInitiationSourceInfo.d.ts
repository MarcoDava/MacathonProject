import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { ConversationInitiationSource } from "./ConversationInitiationSource";
export declare const ConversationInitiationSourceInfo: core.serialization.ObjectSchema<serializers.ConversationInitiationSourceInfo.Raw, ElevenLabs.ConversationInitiationSourceInfo>;
export declare namespace ConversationInitiationSourceInfo {
    interface Raw {
        source?: ConversationInitiationSource.Raw | null;
        version?: string | null;
    }
}
