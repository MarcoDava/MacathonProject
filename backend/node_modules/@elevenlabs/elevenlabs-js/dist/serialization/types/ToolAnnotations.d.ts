import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const ToolAnnotations: core.serialization.ObjectSchema<serializers.ToolAnnotations.Raw, ElevenLabs.ToolAnnotations>;
export declare namespace ToolAnnotations {
    interface Raw {
        title?: string | null;
        readOnlyHint?: boolean | null;
        destructiveHint?: boolean | null;
        idempotentHint?: boolean | null;
        openWorldHint?: boolean | null;
        [key: string]: any;
    }
}
