import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { LiteralJsonSchemaPropertyConstantValue } from "./LiteralJsonSchemaPropertyConstantValue";
import { LiteralJsonSchemaPropertyType } from "./LiteralJsonSchemaPropertyType";
export declare const LiteralJsonSchemaProperty: core.serialization.ObjectSchema<serializers.LiteralJsonSchemaProperty.Raw, ElevenLabs.LiteralJsonSchemaProperty>;
export declare namespace LiteralJsonSchemaProperty {
    interface Raw {
        type: LiteralJsonSchemaPropertyType.Raw;
        description?: string | null;
        enum?: string[] | null;
        is_system_provided?: boolean | null;
        dynamic_variable?: string | null;
        constant_value?: LiteralJsonSchemaPropertyConstantValue.Raw | null;
    }
}
