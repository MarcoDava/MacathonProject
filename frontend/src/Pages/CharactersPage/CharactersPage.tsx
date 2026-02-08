import { useNavigate } from "react-router-dom";

const CHARACTERS = [
  { name: "Skibidi Toilet", id: "JBFqnCBsd6RMkjVDRZzb", description: "Professional and direct." },
  { name: "Trump", id: "ErXwobaYiN019PkySvjV", description: "Bold and energetic." },
  { name: "Tung Tung Tung Sahur", id: "EXAVITQu4vr4xnSDxMaL", description: "Kind and encouraging." }
];

const CharactersPage = () => {
  const navigate = useNavigate();

  const selectCharacter = (id: string) => {
    localStorage.setItem("selectedVoiceId", id);
    navigate("/"); // Go back to start to enter job description
  };

  return (
    <div className="p-10 text-center">
      <h1 className="text-3xl font-bold mb-8">Choose Your Interviewer</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {CHARACTERS.map((char) => (
          <div key={char.id} className="p-6 border rounded-xl bg-gray-900 hover:border-blue-500 transition cursor-pointer"
               onClick={() => selectCharacter(char.id)}>
            <h2 className="text-xl font-bold">{char.name}</h2>
            <p className="text-gray-400 mt-2">{char.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharactersPage;