import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { ResourceAccessInfoRole } from "./ResourceAccessInfoRole";
export declare const ResourceAccessInfo: core.serialization.ObjectSchema<serializers.ResourceAccessInfo.Raw, ElevenLabs.ResourceAccessInfo>;
export declare namespace ResourceAccessInfo {
    interface Raw {
        is_creator: boolean;
        creator_name: string;
        creator_email: string;
        role: ResourceAccessInfoRole.Raw;
    }
}
