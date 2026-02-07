import type * as ElevenLabs from "../../../../../../../api/index";
import * as core from "../../../../../../../core";
import type * as serializers from "../../../../../../index";
export declare const BodyDeleteExistingInvitationV1WorkspaceInvitesDelete: core.serialization.Schema<serializers.workspace.BodyDeleteExistingInvitationV1WorkspaceInvitesDelete.Raw, ElevenLabs.workspace.BodyDeleteExistingInvitationV1WorkspaceInvitesDelete>;
export declare namespace BodyDeleteExistingInvitationV1WorkspaceInvitesDelete {
    interface Raw {
        email: string;
    }
}
