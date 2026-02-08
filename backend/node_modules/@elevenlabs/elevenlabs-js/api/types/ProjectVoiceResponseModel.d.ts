export interface ProjectVoiceResponseModel {
    voiceId: string;
    alias: string;
    stability: number;
    similarityBoost: number;
    style: number;
    isPinned: boolean;
    useSpeakerBoost: boolean;
    volumeGain: number;
    speed: number;
}
