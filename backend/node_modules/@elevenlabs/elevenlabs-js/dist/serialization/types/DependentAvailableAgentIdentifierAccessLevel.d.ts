import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const DependentAvailableAgentIdentifierAccessLevel: core.serialization.Schema<serializers.DependentAvailableAgentIdentifierAccessLevel.Raw, ElevenLabs.DependentAvailableAgentIdentifierAccessLevel>;
export declare namespace DependentAvailableAgentIdentifierAccessLevel {
    type Raw = "admin" | "editor" | "commenter" | "viewer";
}
