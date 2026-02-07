import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const BackupLlmDefault: core.serialization.ObjectSchema<serializers.BackupLlmDefault.Raw, ElevenLabs.BackupLlmDefault>;
export declare namespace BackupLlmDefault {
    interface Raw {
        preference?: "default" | null;
    }
}
