import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { BackupLlmDefault } from "./BackupLlmDefault";
import { BackupLlmDisabled } from "./BackupLlmDisabled";
import { BackupLlmOverride } from "./BackupLlmOverride";
export declare const PromptAgentApiModelInputBackupLlmConfig: core.serialization.Schema<serializers.PromptAgentApiModelInputBackupLlmConfig.Raw, ElevenLabs.PromptAgentApiModelInputBackupLlmConfig>;
export declare namespace PromptAgentApiModelInputBackupLlmConfig {
    type Raw = PromptAgentApiModelInputBackupLlmConfig.Default | PromptAgentApiModelInputBackupLlmConfig.Disabled | PromptAgentApiModelInputBackupLlmConfig.Override;
    interface Default extends BackupLlmDefault.Raw {
        preference: "default";
    }
    interface Disabled extends BackupLlmDisabled.Raw {
        preference: "disabled";
    }
    interface Override extends BackupLlmOverride.Raw {
        preference: "override";
    }
}
