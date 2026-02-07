import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { AgentMetadataResponseModel } from "./AgentMetadataResponseModel";
import { AgentPlatformSettingsResponseModel } from "./AgentPlatformSettingsResponseModel";
import { AgentWorkflowResponseModel } from "./AgentWorkflowResponseModel";
import { ConversationalConfig } from "./ConversationalConfig";
import { GetAgentResponseModelPhoneNumbersItem } from "./GetAgentResponseModelPhoneNumbersItem";
import { GetWhatsAppAccountResponse } from "./GetWhatsAppAccountResponse";
import { ResourceAccessInfo } from "./ResourceAccessInfo";
export declare const GetAgentResponseModel: core.serialization.ObjectSchema<serializers.GetAgentResponseModel.Raw, ElevenLabs.GetAgentResponseModel>;
export declare namespace GetAgentResponseModel {
    interface Raw {
        agent_id: string;
        name: string;
        conversation_config: ConversationalConfig.Raw;
        metadata: AgentMetadataResponseModel.Raw;
        platform_settings?: AgentPlatformSettingsResponseModel.Raw | null;
        phone_numbers?: GetAgentResponseModelPhoneNumbersItem.Raw[] | null;
        whatsapp_accounts?: GetWhatsAppAccountResponse.Raw[] | null;
        workflow?: AgentWorkflowResponseModel.Raw | null;
        access_info?: ResourceAccessInfo.Raw | null;
        tags?: string[] | null;
        version_id?: string | null;
        branch_id?: string | null;
        main_branch_id?: string | null;
    }
}
