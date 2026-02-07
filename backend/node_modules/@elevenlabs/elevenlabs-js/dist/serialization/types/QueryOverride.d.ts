import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { LiteralOverride } from "./LiteralOverride";
export declare const QueryOverride: core.serialization.ObjectSchema<serializers.QueryOverride.Raw, ElevenLabs.QueryOverride>;
export declare namespace QueryOverride {
    interface Raw {
        properties?: Record<string, LiteralOverride.Raw | null | undefined> | null;
        required?: string[] | null;
    }
}
