import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { DependentAvailableAgentIdentifierAccessLevel } from "./DependentAvailableAgentIdentifierAccessLevel";
export declare const DependentAvailableAgentIdentifier: core.serialization.ObjectSchema<serializers.DependentAvailableAgentIdentifier.Raw, ElevenLabs.DependentAvailableAgentIdentifier>;
export declare namespace DependentAvailableAgentIdentifier {
    interface Raw {
        referenced_resource_ids?: string[] | null;
        id: string;
        name: string;
        created_at_unix_secs: number;
        access_level: DependentAvailableAgentIdentifierAccessLevel.Raw;
    }
}
