import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import * as serializers from "../index";
export declare const ObjectOverrideOutput: core.serialization.ObjectSchema<serializers.ObjectOverrideOutput.Raw, ElevenLabs.ObjectOverrideOutput>;
export declare namespace ObjectOverrideOutput {
    interface Raw {
        description?: string | null;
        properties?: Record<string, serializers.ObjectOverrideOutputPropertiesValue.Raw | null | undefined> | null;
        required?: string[] | null;
    }
}
