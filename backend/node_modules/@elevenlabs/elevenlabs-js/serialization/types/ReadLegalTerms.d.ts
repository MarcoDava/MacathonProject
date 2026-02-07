import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
export declare const ReadLegalTerms: core.serialization.ObjectSchema<serializers.ReadLegalTerms.Raw, ElevenLabs.ReadLegalTerms>;
export declare namespace ReadLegalTerms {
    interface Raw {
        terms?: string | null;
        start_date?: string | null;
        end_date?: string | null;
    }
}
