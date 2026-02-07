import type * as ElevenLabs from "../index";
export interface ObjectOverrideInput {
    description?: string;
    properties?: Record<string, ElevenLabs.ObjectOverrideInputPropertiesValue | undefined>;
    required?: string[];
}
