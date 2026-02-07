import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const ResourceAccessInfoRole: core.serialization.Schema<serializers.ResourceAccessInfoRole.Raw, ElevenLabs.ResourceAccessInfoRole>;
export declare namespace ResourceAccessInfoRole {
    type Raw = "admin" | "editor" | "commenter" | "viewer";
}
