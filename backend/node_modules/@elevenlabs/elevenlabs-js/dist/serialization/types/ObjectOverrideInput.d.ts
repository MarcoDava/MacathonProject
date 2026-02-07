import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import * as serializers from "../index";
export declare const ObjectOverrideInput: core.serialization.ObjectSchema<serializers.ObjectOverrideInput.Raw, ElevenLabs.ObjectOverrideInput>;
export declare namespace ObjectOverrideInput {
    interface Raw {
        description?: string | null;
        properties?: Record<string, serializers.ObjectOverrideInputPropertiesValue.Raw | null | undefined> | null;
        required?: string[] | null;
    }
}
