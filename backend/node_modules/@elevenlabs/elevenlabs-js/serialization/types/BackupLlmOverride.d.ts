import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { Llm } from "./Llm";
export declare const BackupLlmOverride: core.serialization.ObjectSchema<serializers.BackupLlmOverride.Raw, ElevenLabs.BackupLlmOverride>;
export declare namespace BackupLlmOverride {
    interface Raw {
        preference?: "override" | null;
        order: Llm.Raw[];
    }
}
