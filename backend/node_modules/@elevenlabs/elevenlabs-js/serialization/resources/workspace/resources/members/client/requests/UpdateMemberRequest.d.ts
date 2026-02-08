import type * as ElevenLabs from "../../../../../../../api/index";
import * as core from "../../../../../../../core";
import type * as serializers from "../../../../../../index";
import { SeatType } from "../../../../../../types/SeatType";
export declare const UpdateMemberRequest: core.serialization.Schema<serializers.workspace.UpdateMemberRequest.Raw, ElevenLabs.workspace.UpdateMemberRequest>;
export declare namespace UpdateMemberRequest {
    interface Raw {
        email: string;
        is_locked?: boolean | null;
        workspace_role?: SeatType.Raw | null;
        workspace_seat_type?: SeatType.Raw | null;
    }
}
