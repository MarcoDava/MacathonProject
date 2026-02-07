import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { AsrInputFormat } from "./AsrInputFormat";
import { AsrProvider } from "./AsrProvider";
import { AsrQuality } from "./AsrQuality";
export declare const AsrConversationalConfigWorkflowOverride: core.serialization.ObjectSchema<serializers.AsrConversationalConfigWorkflowOverride.Raw, ElevenLabs.AsrConversationalConfigWorkflowOverride>;
export declare namespace AsrConversationalConfigWorkflowOverride {
    interface Raw {
        quality?: AsrQuality.Raw | null;
        provider?: AsrProvider.Raw | null;
        user_input_audio_format?: AsrInputFormat.Raw | null;
        keywords?: string[] | null;
    }
}
