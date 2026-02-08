import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const ToolSortBy: core.serialization.Schema<serializers.ToolSortBy.Raw, ElevenLabs.ToolSortBy>;
export declare namespace ToolSortBy {
    type Raw = "name" | "created_at";
}
