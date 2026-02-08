import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import * as serializers from "../index";
import { LiteralOverride } from "./LiteralOverride";
export declare const ObjectOverrideInputPropertiesValue: core.serialization.Schema<serializers.ObjectOverrideInputPropertiesValue.Raw, ElevenLabs.ObjectOverrideInputPropertiesValue>;
export declare namespace ObjectOverrideInputPropertiesValue {
    type Raw = LiteralOverride.Raw | serializers.ObjectOverrideInput.Raw;
}
