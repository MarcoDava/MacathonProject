import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import * as serializers from "../index";
export declare const ArrayJsonSchemaPropertyOutput: core.serialization.ObjectSchema<serializers.ArrayJsonSchemaPropertyOutput.Raw, ElevenLabs.ArrayJsonSchemaPropertyOutput>;
export declare namespace ArrayJsonSchemaPropertyOutput {
    interface Raw {
        type?: "array" | null;
        description?: string | null;
        items: serializers.ArrayJsonSchemaPropertyOutputItems.Raw;
    }
}
