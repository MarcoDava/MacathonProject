import type * as ElevenLabs from "../../../../../../../api/index";
import * as core from "../../../../../../../core";
import type * as serializers from "../../../../../../index";
import { WorkspaceResourceType } from "../../../../../../types/WorkspaceResourceType";
import { BodyShareWorkspaceResourceV1WorkspaceResourcesResourceIdSharePostRole } from "../../types/BodyShareWorkspaceResourceV1WorkspaceResourcesResourceIdSharePostRole";
export declare const BodyShareWorkspaceResourceV1WorkspaceResourcesResourceIdSharePost: core.serialization.Schema<serializers.workspace.BodyShareWorkspaceResourceV1WorkspaceResourcesResourceIdSharePost.Raw, ElevenLabs.workspace.BodyShareWorkspaceResourceV1WorkspaceResourcesResourceIdSharePost>;
export declare namespace BodyShareWorkspaceResourceV1WorkspaceResourcesResourceIdSharePost {
    interface Raw {
        role: BodyShareWorkspaceResourceV1WorkspaceResourcesResourceIdSharePostRole.Raw;
        resource_type: WorkspaceResourceType.Raw;
        user_email?: string | null;
        group_id?: string | null;
        workspace_api_key_id?: string | null;
    }
}
