import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { ModerationConfig } from "./ModerationConfig";
export declare const ModerationGuardrailInput: core.serialization.ObjectSchema<serializers.ModerationGuardrailInput.Raw, ElevenLabs.ModerationGuardrailInput>;
export declare namespace ModerationGuardrailInput {
    interface Raw {
        config?: ModerationConfig.Raw | null;
    }
}
