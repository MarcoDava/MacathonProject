import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import * as serializers from "../index";
import { LiteralOverride } from "./LiteralOverride";
export declare const ObjectOverrideOutputPropertiesValue: core.serialization.Schema<serializers.ObjectOverrideOutputPropertiesValue.Raw, ElevenLabs.ObjectOverrideOutputPropertiesValue>;
export declare namespace ObjectOverrideOutputPropertiesValue {
    type Raw = LiteralOverride.Raw | serializers.ObjectOverrideOutput.Raw;
}
