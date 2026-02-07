import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { ModerationConfig } from "./ModerationConfig";
export declare const ModerationGuardrailOutput: core.serialization.ObjectSchema<serializers.ModerationGuardrailOutput.Raw, ElevenLabs.ModerationGuardrailOutput>;
export declare namespace ModerationGuardrailOutput {
    interface Raw {
        config?: ModerationConfig.Raw | null;
    }
}
