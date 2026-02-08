export let chosenCharacter = {
  character: 'TungTungTungSahur',
};
const CharactersPage=()=>
{
    return(
        <div>
            <h1>Characters Page</h1>
            <p>This is the characters page where users can select their interview character.</p>
            <div className="flex flex-col flex-wrap gap-4 h-[70vh]">
                <div>
                    <img />
                    <p>Tung Tung Tung Sahur</p>
                </div>
                <div>
                    <img />
                    <p>Skibidi Toilet</p>
                </div>
                <div>
                    <img />
                    <p>Donald Trump</p>
                </div>

            </div>
        </div>
    );
}

export default CharactersPage;