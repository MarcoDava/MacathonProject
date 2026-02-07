import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import * as serializers from "../index";
export declare const ObjectJsonSchemaPropertyInput: core.serialization.ObjectSchema<serializers.ObjectJsonSchemaPropertyInput.Raw, ElevenLabs.ObjectJsonSchemaPropertyInput>;
export declare namespace ObjectJsonSchemaPropertyInput {
    interface Raw {
        type?: "object" | null;
        required?: string[] | null;
        description?: string | null;
        properties?: Record<string, serializers.ObjectJsonSchemaPropertyInputPropertiesValue.Raw> | null;
    }
}
