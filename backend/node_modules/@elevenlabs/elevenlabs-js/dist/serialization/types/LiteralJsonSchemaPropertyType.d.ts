import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const LiteralJsonSchemaPropertyType: core.serialization.Schema<serializers.LiteralJsonSchemaPropertyType.Raw, ElevenLabs.LiteralJsonSchemaPropertyType>;
export declare namespace LiteralJsonSchemaPropertyType {
    type Raw = "boolean" | "string" | "integer" | "number";
}
