import type * as ElevenLabs from "../index";
export interface ObjectOverrideOutput {
    description?: string;
    properties?: Record<string, ElevenLabs.ObjectOverrideOutputPropertiesValue | undefined>;
    required?: string[];
}
