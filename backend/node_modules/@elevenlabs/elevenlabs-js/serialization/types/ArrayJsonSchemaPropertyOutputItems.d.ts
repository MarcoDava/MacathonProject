import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import * as serializers from "../index";
import { LiteralJsonSchemaProperty } from "./LiteralJsonSchemaProperty";
export declare const ArrayJsonSchemaPropertyOutputItems: core.serialization.Schema<serializers.ArrayJsonSchemaPropertyOutputItems.Raw, ElevenLabs.ArrayJsonSchemaPropertyOutputItems>;
export declare namespace ArrayJsonSchemaPropertyOutputItems {
    type Raw = LiteralJsonSchemaProperty.Raw | serializers.ObjectJsonSchemaPropertyOutput.Raw | serializers.ArrayJsonSchemaPropertyOutput.Raw;
}
