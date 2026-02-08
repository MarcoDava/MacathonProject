import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { BackupLlmDefault } from "./BackupLlmDefault";
import { BackupLlmDisabled } from "./BackupLlmDisabled";
import { BackupLlmOverride } from "./BackupLlmOverride";
export declare const PromptAgentApiModelOutputBackupLlmConfig: core.serialization.Schema<serializers.PromptAgentApiModelOutputBackupLlmConfig.Raw, ElevenLabs.PromptAgentApiModelOutputBackupLlmConfig>;
export declare namespace PromptAgentApiModelOutputBackupLlmConfig {
    type Raw = PromptAgentApiModelOutputBackupLlmConfig.Default | PromptAgentApiModelOutputBackupLlmConfig.Disabled | PromptAgentApiModelOutputBackupLlmConfig.Override;
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
