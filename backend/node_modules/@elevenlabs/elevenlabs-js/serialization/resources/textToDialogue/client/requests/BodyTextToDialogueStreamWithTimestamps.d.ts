import type * as ElevenLabs from "../../../../../api/index";
import * as core from "../../../../../core";
import type * as serializers from "../../../../index";
import { DialogueInput } from "../../../../types/DialogueInput";
import { ModelSettingsResponseModel } from "../../../../types/ModelSettingsResponseModel";
import { PronunciationDictionaryVersionLocator } from "../../../../types/PronunciationDictionaryVersionLocator";
import { BodyTextToDialogueStreamWithTimestampsApplyTextNormalization } from "../../types/BodyTextToDialogueStreamWithTimestampsApplyTextNormalization";
export declare const BodyTextToDialogueStreamWithTimestamps: core.serialization.Schema<serializers.BodyTextToDialogueStreamWithTimestamps.Raw, Omit<ElevenLabs.BodyTextToDialogueStreamWithTimestamps, "outputFormat">>;
export declare namespace BodyTextToDialogueStreamWithTimestamps {
    interface Raw {
        inputs: DialogueInput.Raw[];
        model_id?: string | null;
        language_code?: string | null;
        settings?: ModelSettingsResponseModel.Raw | null;
        pronunciation_dictionary_locators?: PronunciationDictionaryVersionLocator.Raw[] | null;
        seed?: number | null;
        apply_text_normalization?: BodyTextToDialogueStreamWithTimestampsApplyTextNormalization.Raw | null;
    }
}
