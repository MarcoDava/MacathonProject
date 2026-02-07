import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { ConvAiStoredSecretDependenciesAgentsItem } from "./ConvAiStoredSecretDependenciesAgentsItem";
import { ConvAiStoredSecretDependenciesToolsItem } from "./ConvAiStoredSecretDependenciesToolsItem";
import { DependentPhoneNumberIdentifier } from "./DependentPhoneNumberIdentifier";
import { SecretDependencyType } from "./SecretDependencyType";
export declare const ConvAiStoredSecretDependencies: core.serialization.ObjectSchema<serializers.ConvAiStoredSecretDependencies.Raw, ElevenLabs.ConvAiStoredSecretDependencies>;
export declare namespace ConvAiStoredSecretDependencies {
    interface Raw {
        tools: ConvAiStoredSecretDependenciesToolsItem.Raw[];
        agents: ConvAiStoredSecretDependenciesAgentsItem.Raw[];
        others: SecretDependencyType.Raw[];
        phone_numbers?: DependentPhoneNumberIdentifier.Raw[] | null;
    }
}
