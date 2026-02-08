import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const SecretDependencyType: core.serialization.Schema<serializers.SecretDependencyType.Raw, ElevenLabs.SecretDependencyType>;
export declare namespace SecretDependencyType {
    type Raw = "conversation_initiation_webhook";
}
