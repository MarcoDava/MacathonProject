import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { DependentAvailableToolIdentifier } from "./DependentAvailableToolIdentifier";
import { DependentUnknownToolIdentifier } from "./DependentUnknownToolIdentifier";
export declare const ConvAiStoredSecretDependenciesToolsItem: core.serialization.Schema<serializers.ConvAiStoredSecretDependenciesToolsItem.Raw, ElevenLabs.ConvAiStoredSecretDependenciesToolsItem>;
export declare namespace ConvAiStoredSecretDependenciesToolsItem {
    type Raw = ConvAiStoredSecretDependenciesToolsItem.Available | ConvAiStoredSecretDependenciesToolsItem.Unknown;
    interface Available extends DependentAvailableToolIdentifier.Raw {
        type: "available";
    }
    interface Unknown extends DependentUnknownToolIdentifier.Raw {
        type: "unknown";
    }
}
