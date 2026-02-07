import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import * as serializers from "../index";
export declare const ArrayJsonSchemaPropertyInput: core.serialization.ObjectSchema<serializers.ArrayJsonSchemaPropertyInput.Raw, ElevenLabs.ArrayJsonSchemaPropertyInput>;
export declare namespace ArrayJsonSchemaPropertyInput {
    interface Raw {
        type?: "array" | null;
        description?: string | null;
        items: serializers.ArrayJsonSchemaPropertyInputItems.Raw;
    }
}
