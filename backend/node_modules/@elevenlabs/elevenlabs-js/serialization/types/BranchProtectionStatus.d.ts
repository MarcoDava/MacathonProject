import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const BranchProtectionStatus: core.serialization.Schema<serializers.BranchProtectionStatus.Raw, ElevenLabs.BranchProtectionStatus>;
export declare namespace BranchProtectionStatus {
    type Raw = "writer_perms_required" | "admin_perms_required";
}
