import type * as ElevenLabs from "../../../../../../api/index";
import * as core from "../../../../../../core";
import type * as serializers from "../../../../../index";
export declare const BodyShareWorkspaceResourceV1WorkspaceResourcesResourceIdSharePostRole: core.serialization.Schema<serializers.workspace.BodyShareWorkspaceResourceV1WorkspaceResourcesResourceIdSharePostRole.Raw, ElevenLabs.workspace.BodyShareWorkspaceResourceV1WorkspaceResourcesResourceIdSharePostRole>;
export declare namespace BodyShareWorkspaceResourceV1WorkspaceResourcesResourceIdSharePostRole {
    type Raw = "admin" | "editor" | "commenter" | "viewer";
}
