import { useNavigate } from "react-router-dom";

// Define the data here locally so the frontend can access it
export const CHARACTERS = [
  { 
    id: "JBFqnCBsd6RMkjVDRZzb", 
    name: "Skibidi Toilet", 
    key: "skibidi",
    img: "https://images-ext-1.discordapp.net/external/Hap2lryvnginFongsyxwLoApIFGpEy9DQhWLM49y65Q/%3Fw%3D1600%26h%3D1600%26fit%3Dcrop/https/static0.thegamerimages.com/wordpress/wp-content/uploads/2025/11/a-screenshot-from-skibidi-toilet-showing-giant-toilets-with-a-mans-head-poking-out-3.jpg?format=webp&width=1221&height=1221", // Make sure this is in your frontend/public folder
    description: "High energy brainrot. Very rizz-focused." 
  },
  { 
    id: "ErXwobaYiN019PkySvjV", 
    name: "Trump", 
    key: "trump",
    img: "https://images-ext-1.discordapp.net/external/O-fnPVcZNp2xui2WCKT9F4eVBV8Lm20lb3IwNsgfLdY/%3Fcrop%3D0.646xw%3A0.969xh%3B0.148xw%2C0%26resize%3D640%3A%2A/https/hips.hearstapps.com/hmg-prod/images/gettyimages-2194420718-67d9b4e326598.jpg?format=webp&width=960&height=960",
    description: "The best interviewer. Huge questions. Tremendous." 
  },
  { 
    id: "EXAVITQu4vr4xnSDxMaL", 
    name: "Tung Tung Tung Sahur", 
    key: "sahur",
    img: "https://play-lh.googleusercontent.com/blFJnPG3FC5gqUmZOMPT9cAY6T2dfteTNK5KlKnEoQKgXk1xJF9_pKqPy_vVKyjo_h9l=w240-h480-rw",
    description: "Wake up! Energy-filled Indonesian brainrot." 
  }
];

const CharactersPage = () => {
  const navigate = useNavigate();

  const selectCharacter = (char: typeof CHARACTERS[0]) => {
  // Save the ID specifically for API calls
  localStorage.setItem("selectedVoiceId", char.id);
  // Save the full object for UI (images/names)
  localStorage.setItem("selectedCharacter", JSON.stringify(char));
  
  navigate("/"); 
};
  const previewVoice = async (id: string, name: string) => {
  const res = await fetch("http://localhost:3000/api/ask-question", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ 
      question: `Hello! I am ${name}. Are you ready for the best interview of your life?`, 
      voiceId: id 
    }),
  });
  const blob = await res.blob();
  new Audio(URL.createObjectURL(blob)).play();
};


  return (
    <div className="p-10 text-center bg-black min-h-screen text-white">
      <h1 className="text-4xl font-bold mb-10">Select Your Interviewer</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {CHARACTERS.map((char) => (
          <div 
            key={char.id} 
            onClick={() => selectCharacter(char)}
            className="p-6 border-2 border-gray-800 rounded-2xl hover:border-blue-500 cursor-pointer transition-all bg-gray-900 group"
          >
            <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-700 overflow-hidden group-hover:scale-110 transition-transform">
               {/* Image placeholder */}
               <img src={char.img} alt={char.name} className="w-full h-full object-cover" />
            </div>
            <h2 className="text-2xl font-bold">{char.name}</h2>
            <p className="text-gray-400 mt-2">{char.description}</p>
            <button 
            onClick={(e) => { e.stopPropagation(); previewVoice(char.id, char.name); }}
            className="text-blue-400 underline mt-2 text-sm"
            >
              Preview Voice
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharactersPage;
