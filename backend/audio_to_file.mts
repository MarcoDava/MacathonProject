// import { ElevenLabsClient } from '@elevenlabs/elevenlabs-js';
// import * as dotenv from 'dotenv';
// import { createWriteStream } from 'fs';
// import { v4 as uuid } from 'uuid';

// dotenv.config();

// const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY;

// const elevenlabs = new ElevenLabsClient({
//   apiKey: ELEVENLABS_API_KEY,
// });

// export const createAudioFileFromText = async (text: string): Promise<string> => {
//   // try {
//     const audio = await elevenlabs.textToSpeech.convert('JBFqnCBsd6RMkjVDRZzb', {
//       modelId: 'eleven_multilingual_v2',
//       text,
//       outputFormat: 'mp3_44100_128',
//       voiceSettings: {
//         stability: 0,
//         similarityBoost: 0,
//         useSpeakerBoost: true,
//         speed: 1.0,
//       },
//     });

//     const fileName = `${uuid()}.mp3`;
//     const fileStream = createWriteStream(fileName);

//     // Write each chunk to the file stream
//     for await (const chunk of audio) {
//       fileStream.write(chunk);
//     }

//     // Close the stream and wait for it to finish
//     fileStream.end();

//     // Return a promise that resolves when the file is written
//     return new Promise((resolve, reject) => {
//       fileStream.on('finish', () => resolve(fileName));
//       fileStream.on('error', reject);
//     });
//   } catch (error) {
//     throw error;
//   }
// };

// await createAudioFileFromText('Hello World');
