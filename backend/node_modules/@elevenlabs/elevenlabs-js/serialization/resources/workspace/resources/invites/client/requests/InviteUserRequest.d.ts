import type * as ElevenLabs from "../../../../../../../api/index";
import * as core from "../../../../../../../core";
import type * as serializers from "../../../../../../index";
import { SeatType } from "../../../../../../types/SeatType";
export declare const InviteUserRequest: core.serialization.Schema<serializers.workspace.InviteUserRequest.Raw, ElevenLabs.workspace.InviteUserRequest>;
export declare namespace InviteUserRequest {
    interface Raw {
        email: string;
        workspace_permission?: string | null;
        seat_type?: SeatType.Raw | null;
        group_ids?: string[] | null;
    }
}
