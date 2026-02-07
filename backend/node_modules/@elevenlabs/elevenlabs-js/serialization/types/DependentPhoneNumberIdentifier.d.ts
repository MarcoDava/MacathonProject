import type * as ElevenLabs from "../../api/index";
import * as core from "../../core";
import type * as serializers from "../index";
import { TelephonyProvider } from "./TelephonyProvider";
export declare const DependentPhoneNumberIdentifier: core.serialization.ObjectSchema<serializers.DependentPhoneNumberIdentifier.Raw, ElevenLabs.DependentPhoneNumberIdentifier>;
export declare namespace DependentPhoneNumberIdentifier {
    interface Raw {
        phone_number_id: string;
        phone_number: string;
        label: string;
        provider: TelephonyProvider.Raw;
    }
}
