import type * as ElevenLabs from "../../../../../api/index";
import * as core from "../../../../../core";
import type * as serializers from "../../../../index";
import { DialogueInput } from "../../../../types/DialogueInput";
import { ModelSettingsResponseModel } from "../../../../types/ModelSettingsResponseModel";
import { PronunciationDictionaryVersionLocator } from "../../../../types/PronunciationDictionaryVersionLocator";
import { BodyTextToDialogueFullWithTimestampsApplyTextNormalization } from "../../types/BodyTextToDialogueFullWithTimestampsApplyTextNormalization";
export declare const BodyTextToDialogueFullWithTimestamps: core.serialization.Schema<serializers.BodyTextToDialogueFullWithTimestamps.Raw, Omit<ElevenLabs.BodyTextToDialogueFullWithTimestamps, "outputFormat">>;
export declare namespace BodyTextToDialogueFullWithTimestamps {
    interface Raw {
        inputs: DialogueInput.Raw[];
        model_id?: string | null;
        language_code?: string | null;
        settings?: ModelSettingsResponseModel.Raw | null;
        pronunciation_dictionary_locators?: PronunciationDictionaryVersionLocator.Raw[] | null;
        seed?: number | null;
        apply_text_normalization?: BodyTextToDialogueFullWithTimestampsApplyTextNormalization.Raw | null;
    }
}
