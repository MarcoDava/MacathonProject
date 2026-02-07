import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const DependentAvailableToolIdentifierAccessLevel: core.serialization.Schema<serializers.DependentAvailableToolIdentifierAccessLevel.Raw, ElevenLabs.DependentAvailableToolIdentifierAccessLevel>;
export declare namespace DependentAvailableToolIdentifierAccessLevel {
    type Raw = "admin" | "editor" | "commenter" | "viewer";
}
