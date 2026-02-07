import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const SortDirection: core.serialization.Schema<serializers.SortDirection.Raw, ElevenLabs.SortDirection>;
export declare namespace SortDirection {
    type Raw = "asc" | "desc";
}
