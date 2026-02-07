import type * as ElevenLabs from "../../../../../../../../../api/index";
import * as core from "../../../../../../../../../core";
import type * as serializers from "../../../../../../../../index";
import { BranchProtectionStatus } from "../../../../../../../../types/BranchProtectionStatus";
export declare const BodyUpdateAgentBranchV1ConvaiAgentsAgentIdBranchesBranchIdPatch: core.serialization.Schema<serializers.conversationalAi.agents.BodyUpdateAgentBranchV1ConvaiAgentsAgentIdBranchesBranchIdPatch.Raw, ElevenLabs.conversationalAi.agents.BodyUpdateAgentBranchV1ConvaiAgentsAgentIdBranchesBranchIdPatch>;
export declare namespace BodyUpdateAgentBranchV1ConvaiAgentsAgentIdBranchesBranchIdPatch {
    interface Raw {
        name?: string | null;
        is_archived?: boolean | null;
        protection_status?: BranchProtectionStatus.Raw | null;
    }
}
