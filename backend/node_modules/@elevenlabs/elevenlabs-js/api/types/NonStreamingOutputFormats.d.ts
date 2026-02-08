export declare const NonStreamingOutputFormats: {
    readonly Wav8000: "wav_8000";
    readonly Wav16000: "wav_16000";
    readonly Wav22050: "wav_22050";
    readonly Wav24000: "wav_24000";
    readonly Wav32000: "wav_32000";
    readonly Wav44100: "wav_44100";
    readonly Wav48000: "wav_48000";
};
export type NonStreamingOutputFormats = (typeof NonStreamingOutputFormats)[keyof typeof NonStreamingOutputFormats];
