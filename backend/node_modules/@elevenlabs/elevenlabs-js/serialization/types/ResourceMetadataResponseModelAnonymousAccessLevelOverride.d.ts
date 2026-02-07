import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const ResourceMetadataResponseModelAnonymousAccessLevelOverride: core.serialization.Schema<serializers.ResourceMetadataResponseModelAnonymousAccessLevelOverride.Raw, ElevenLabs.ResourceMetadataResponseModelAnonymousAccessLevelOverride>;
export declare namespace ResourceMetadataResponseModelAnonymousAccessLevelOverride {
    type Raw = "admin" | "editor" | "commenter" | "viewer";
}
