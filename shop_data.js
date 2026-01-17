let shop_data = {};

fetch('./stuff.json')
  .then(response => response.json()) 
  .then(data => {
    shop_data = data;
    console.log(data);
    render_cards();
  })
  .catch(error => console.error('Error fetching JSON'));

let codeline = document.querySelector("#code_line");
const texts = [
  "GET std::vector FOR FREE!", "cout - 50% OFF!", "new/delete - BUY 1 GET 1!", "SmartPointer Deluxe - LIMITED!", "Lambda Express - FAST DELIVERY!", "Template Metaprogramming - MASTER IT!", "RAII Starter Pack - OWN IT NOW!", "Move Constructor - FREE UPGRADE!", "Copy Constructor - BUY 1 GET 1!", "Virtual Functions - UNLOCK TODAY!", "Inline Optimizer - 100% FASTER!", "Constexpr Magic - SALE 70%!", "Operator Overload Pack - 2$ ONLY!", "Iterator Pack - LOOP UNTIL YOU DROP!", "Reference Mastery - OWN IT!", "Friend Class Access - NOW UNLOCKED!", "Namespace Organizer - SALE 40%!", "Header Guards - FREE PROTECTION!", "Macro Madness - BUY ONE GET TEN!", "Dynamic Array Deal - BUY 1 GET 1!", "LinkedList Love - NOW CHEAP!", "Hash Map Special - FREE HASH!", "GLFW - OPEN WINDOWS FOR FREE!", "SDL2 - GAME DEV SALE 50%!", "zlib - COMPRESS YOUR LIFE!", "stb_image - LOAD IMAGES NOW!", "Boost - UNLOCK POWERFUL TOOLS!", "Eigen - MATRIX MASTER PACK!", "OpenCV - SEE EVERYTHING!", "GLEW - EXTEND YOUR OPENGL!", "Assimp - IMPORT 3D MODELS!", "Dear ImGui - GUI MADE EASY!", "GLM - MATH FOR GAMERS!", "FreeType - FONT MAGIC!", "Bullet Physics - COLLIDE NOW!", "FMOD - SOUND EXPLOSION!", "OpenAL - HEAR IT ALL!", "GLFW - WINDOW SALE 40%!", "SDL2 - FAST RENDERING DEAL!", "zlib - ZIP YOUR CODE!", "stb_image - 2 FOR 1!", "Boost - TEMPLATE MADNESS!", "Eigen - MATRIX BOOSTER!", "OpenCV - IMAGE POWER!", "GLEW - EXTEND GRAPHICS!", "Assimp - 3D IMPORTER!", "Dear ImGui - GUI HERO!", "GLM - VECTOR MAGIC!", "FreeType - FONT DELIGHT!", "Bullet Physics - CRASH TESTED!", "FMOD - SOUND BLASTER!", "OpenAL - 3D AUDIO SALE!"
];

let index = 0;

if (codeline) {
    setInterval(() => {
        codeline.innerHTML = texts[index];
        index++;
        if (index >= texts.length) {
            index = 0;
        }
    }, 3000);
}