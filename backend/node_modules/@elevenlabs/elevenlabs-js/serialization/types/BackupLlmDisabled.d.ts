import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const BackupLlmDisabled: core.serialization.ObjectSchema<serializers.BackupLlmDisabled.Raw, ElevenLabs.BackupLlmDisabled>;
export declare namespace BackupLlmDisabled {
    interface Raw {
        preference?: "disabled" | null;
    }
}
