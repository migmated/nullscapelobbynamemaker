// Getting the form info
lobbyname = document.getElementById("lobbyname").value
textcolor = document.getElementById("textColor").value
textTr = document.getElementById("textTr").value
fontFace = document.getElementById("fontFace").value

bold = document.getElementById("boldCheckbox")
italic = document.getElementById("italicCheckbox")
underline = document.getElementById("underlCheckbox")
strikethrough = document.getElementById("strikeCheckbox")

strokecolor = document.getElementById("strokeColor").value
strokeTr = document.getElementById("strokeTr").value

// preview is the visual thing shown in the site
preview = document.getElementById("finalLobbyname")

// finaltext is the copy&paste thing.
finaltext = ""
copy_paste = document.getElementById("result")

// popup things
popup = document.getElementById("popup-bg")
popupTitle = document.querySelector(".popup-title")
popupBody = document.querySelector("#popup-body")

// makes the page dont reload.
const form = document.getElementById('makerForm');
form.addEventListener('submit', function(event) {
    event.preventDefault();
});

// Scripting
function hexToRgb(hex) {
    // Removes the "#"
    hex = hex.replace(/^#/, '');

    // Splits in pairs of 2
    let bigint = parseInt(hex, 16);
    let r = (bigint >> 16) & 255;
    let g = (bigint >> 8) & 255;
    let b = bigint & 255;

    return `${r}, ${g}, ${b},`;
}

function setFont(font) {
    preview.className = ''
    preview.classList.add(font)
}

function createFinaltext(){
    information = []
    // Opening Markdown
        if(bold.checked){
            information.push("<b>")
        }
        if(italic.checked){
            information.push("<i>")
        }
        if(underline.checked){
            information.push("<u>")
        }
        if(strikethrough.checked){
            information.push("<s>")
        }
    // Opening Stroke
        if(strokeTr != 0){
            information.push(`<stroke color="${strokecolor}" tr="-${strokeTr}">`)
        } else {
            information.push(`<stroke color="${strokecolor}" tr="1">`)
        }
    // Opening Font
        if(fontFace != "Default"){
            if(textTr != 0){
                information.push(`<font face="${fontFace}" color="${textcolor}" transparency="-${textTr}">`)
            } else {
                information.push(`<font face="${fontFace}" color="${textcolor}" transparency="1`)
            }
        } else{
            if(textTr != 0){
                information.push(`<font color="${textcolor}" transparency="-${textTr}">`)
            } else {
                information.push(`<font color="${textcolor}" transparency="1">`)
            }
        }

    // Lobby name
        information.push(lobbyname)
    // Closing everything
        information.push("</font>")
        information.push("</stroke>")
        if(bold.checked){
            information.push("</b>")
        }
        if(italic.checked){
            information.push("</i>")
        }
        if(underline.checked){
            information.push("</u>")
        }
        if(strikethrough.checked){
            information.push("</s>")
        }
    // Returns the copy&paste
        return information.join("")
}

function logfinaltext(){
    finaltext = createFinaltext()
    copy_paste.innerText = finaltext
    console.log(finaltext)
}

// Presets
function loadPreset(presetName){
    if(presetName == "" || presetName == "reset"){
        document.getElementById("lobbyname").value = "Hello, World!"
        document.getElementById("textColor").value = "#c0c0c0"
        document.getElementById("textTr").value = "1"
        // no font face because im STUPID and cant code it to work simultaneously to the preview
        document.getElementById("boldCheckbox").checked = false
        document.getElementById("italicCheckbox").checked = false
        document.getElementById("underlCheckbox").checked = false
        document.getElementById("strikeCheckbox").checked = false
        document.getElementById("strokeColor").value = "#000000"
        document.getElementById("strokeTr").value = "0"

    } else if(presetName == "nullscape") {
        randomName = ["NULLSCAPE", "NULL AND VOID", "DECAYING (FOR REAL)", "INSURMONTABLE ABYSS", "THERE IS NO ESCAPE."]
        randomIndex = Math.floor(Math.random() * randomName.length)

        document.getElementById("lobbyname").value = randomName[randomIndex]
        document.getElementById("textColor").value = "#0f0e0e"
        document.getElementById("textTr").value = "1"
        // no font face because im STUPID and cant code it to work simultaneously to the preview
        document.getElementById("boldCheckbox").checked = true
        document.getElementById("italicCheckbox").checked = false
        document.getElementById("underlCheckbox").checked = false
        document.getElementById("strikeCheckbox").checked = false
        document.getElementById("strokeColor").value = "#ffffff"
        document.getElementById("strokeTr").value = "0.2"
    }else if(presetName == "mart") {
        randomName = ["Mart, the waterimp!", "Five. Hundred. Marts.", "Mart Orbit", "Mart... SLIDE!!!!", "The marts... they're coming..."]
        randomIndex = Math.floor(Math.random() * randomName.length)

        document.getElementById("lobbyname").value = randomName[randomIndex]
        document.getElementById("textColor").value = "#1aaedf"
        document.getElementById("textTr").value = "1"
        // no font face because im STUPID and cant code it to work simultaneously to the preview
        document.getElementById("boldCheckbox").checked = bold
        document.getElementById("italicCheckbox").checked = true
        document.getElementById("underlCheckbox").checked = false
        document.getElementById("strikeCheckbox").checked = false
        document.getElementById("strokeColor").value = "#000000"
        document.getElementById("strokeTr").value = "0" 
    }else if(presetName == "husk") {
        randomName = ["Skinwalker... huh?", "Conga Line", "IT CAN FIRE LASERS?????"]
        randomIndex = Math.floor(Math.random() * randomName.length)

        document.getElementById("lobbyname").value = randomName[randomIndex]
        document.getElementById("textColor").value = "#190030"
        document.getElementById("textTr").value = "1"
        // no font face because im STUPID and cant code it to work simultaneously to the preview
        document.getElementById("boldCheckbox").checked = false
        document.getElementById("italicCheckbox").checked = false
        document.getElementById("underlCheckbox").checked = true
        document.getElementById("strikeCheckbox").checked = false
        document.getElementById("strokeColor").value = "#5e1d97"
        document.getElementById("strokeTr").value = "0.5"
    }else if(presetName == "flesh") {
        randomName = ["fleshy flesh", "*comedic slipping sfx*", "Mass Infection"]
        randomIndex = Math.floor(Math.random() * randomName.length)

        document.getElementById("lobbyname").value = randomName[randomIndex]
        document.getElementById("textColor").value = "#ff0000"
        document.getElementById("textTr").value = "1"
        // no font face because im STUPID and cant code it to work simultaneously to the preview
        document.getElementById("boldCheckbox").checked = true
        document.getElementById("italicCheckbox").checked = true
        document.getElementById("underlCheckbox").checked = false
        document.getElementById("strikeCheckbox").checked = false
        document.getElementById("strokeColor").value = "#920000"
        document.getElementById("strokeTr").value = "0.5"
    }else if(presetName == "telefragger") {
        randomName = ["telestabber", "unfair game design", "he's hitting the moves!!", "getting telefragged"]
        randomIndex = Math.floor(Math.random() * randomName.length)

        document.getElementById("lobbyname").value = randomName[randomIndex]
        document.getElementById("textColor").value = "#404040"
        document.getElementById("textTr").value = "1"
        // no font face because im STUPID and cant code it to work simultaneously to the preview
        document.getElementById("boldCheckbox").checked = false
        document.getElementById("italicCheckbox").checked = false
        document.getElementById("underlCheckbox").checked = false
        document.getElementById("strikeCheckbox").checked = false
        document.getElementById("strokeColor").value = "#e70000"
        document.getElementById("strokeTr").value = "0.2"
    }else if(presetName == "guardian") {
        randomName = ["you hear a faint 'NYEHEHEH!'...", "wdym it enrages with passage altar?", "BOOM! headshot!"]
        randomIndex = Math.floor(Math.random() * randomName.length)

        document.getElementById("lobbyname").value = randomName[randomIndex]
        document.getElementById("textColor").value = "#fc70e3"
        document.getElementById("textTr").value = "1"
        // no font face because im STUPID and cant code it to work simultaneously to the preview
        document.getElementById("boldCheckbox").checked = false
        document.getElementById("italicCheckbox").checked = true
        document.getElementById("underlCheckbox").checked = false
        document.getElementById("strikeCheckbox").checked = false
        document.getElementById("strokeColor").value = "#3466bc"
        document.getElementById("strokeTr").value = "0.3"
    }else if(presetName == "voidbreaker") {
        randomName = ["blade bombardment lowk easy", "ROARING KNIGHT?????", "they're spinning..."]
        randomIndex = Math.floor(Math.random() * randomName.length)

        document.getElementById("lobbyname").value = randomName[randomIndex]
        document.getElementById("textColor").value = "#69125f"
        document.getElementById("textTr").value = "1"
        // no font face because im STUPID and cant code it to work simultaneously to the preview
        document.getElementById("boldCheckbox").checked = true
        document.getElementById("italicCheckbox").checked = false
        document.getElementById("underlCheckbox").checked = false
        document.getElementById("strikeCheckbox").checked = true
        document.getElementById("strokeColor").value = "#e211ca"
        document.getElementById("strokeTr").value = "0.2"
    }else if(presetName == "cadence") {
        randomName = ["collect my instuments.", "Cadence x Bell yuri real?!?!?!?!", "The clock is ticking...", "Such a deadly melody indeed...", "Running out of time, are we?", "Hey, what time is it?"]
        randomIndex = Math.floor(Math.random() * randomName.length)

        document.getElementById("lobbyname").value = randomName[randomIndex]
        document.getElementById("textColor").value = "#8b8b8b"
        document.getElementById("textTr").value = "1"
        // no font face because im STUPID and cant code it to work simultaneously to the preview
        document.getElementById("boldCheckbox").checked = true
        document.getElementById("italicCheckbox").checked = false
        document.getElementById("underlCheckbox").checked = true
        document.getElementById("strikeCheckbox").checked = false
        document.getElementById("strokeColor").value = "#333333"
        document.getElementById("strokeTr").value = "0.2"
    }else if(presetName == "voidbound") {
        randomName = ["Voidbound Fox Run", "Voidbound Scarf Run", "Voidbound... idk man", "VB Scarf Run but I lowk get carried", "VB Fox Run but I lowk get carried!!!"]
        randomIndex = Math.floor(Math.random() * randomName.length)

        document.getElementById("lobbyname").value = randomName[randomIndex]
        document.getElementById("textColor").value = "#9889c0"
        document.getElementById("textTr").value = "1"
        // no font face because im STUPID and cant code it to work simultaneously to the preview
        document.getElementById("boldCheckbox").checked = true
        document.getElementById("italicCheckbox").checked = false
        document.getElementById("underlCheckbox").checked = false
        document.getElementById("strikeCheckbox").checked = false
        document.getElementById("strokeColor").value = "#250869"
        document.getElementById("strokeTr").value = "0.5"
    }else if(presetName == "subspace") {
        randomName = ["Subspace Scarf Run", "boom💥💥💥", "SS Run but I lowk get carried!!!", "isnt this taph from forsaken? 🤓"]
        randomIndex = Math.floor(Math.random() * randomName.length)

        document.getElementById("lobbyname").value = randomName[randomIndex]
        document.getElementById("textColor").value = "#360016"
        document.getElementById("textTr").value = "1"
        // no font face because im STUPID and cant code it to work simultaneously to the preview
        document.getElementById("boldCheckbox").checked = true
        document.getElementById("italicCheckbox").checked = true
        document.getElementById("underlCheckbox").checked = true
        document.getElementById("strikeCheckbox").checked = false
        document.getElementById("strokeColor").value = "#e90b77"
        document.getElementById("strokeTr").value = "0.5"
    }else if(presetName == "blossom") {
        randomName = ["TO MAKE THINGS EVEN.", "UNWORTHY.", "YOU FOUGHT IN VAIN.", "FAREWELL.", "MERELY MORTAL.", "FRAGILE.", "DEATH IN BLOOM.", "WILT IN THIS DANCE WITH ME."]
        randomIndex = Math.floor(Math.random() * randomName.length)

        document.getElementById("lobbyname").value = randomName[randomIndex]
        document.getElementById("textColor").value = "#d05e8b"
        document.getElementById("textTr").value = "1"
        // no font face because im STUPID and cant code it to work simultaneously to the preview
        document.getElementById("boldCheckbox").checked = false
        document.getElementById("italicCheckbox").checked = false
        document.getElementById("underlCheckbox").checked = false
        document.getElementById("strikeCheckbox").checked = false
        document.getElementById("strokeColor").value = "#000000"
        document.getElementById("strokeTr").value = "0"
    } else{
        alert("Preset not found.")
    }
}

// Popups
function closePopup(){
    popup.className = ''
    popup.classList.add("hide-popup")

    popupTitle.innerHTML = ""
    popupBody.innerHTML = ""
}

function openPopup(type){
    popup.className = ''
    popup.classList.add("show-popup")

    if(type == "preview"){
        popupTitle.innerText = "About the Preview"
        popupBody.innerHTML = '<p>The Nullscape Lobby Name Maker includes a preview feature that lets you see how your lobby name will look. However, this preview isn’t entirely accurate compared to how it appears in-game. A good example is the text stroke: on the site, it’s displayed as an “inline” stroke, while in Nullscape it’s rendered as an “outline” stroke.</p> <div id="popup-image"><img src="assets/popup-images/preview1.png" style="width: 500px;">Previewing in the site with a Voidbreaker preset.</div> <div id="popup-image"><img style="width: 500px;" src="assets/popup-images/preview2.png">How it appears ingame.</div>'

    } else if(type == "presets"){
        popupTitle.innerText = "About the Presets"
        popupBody.innerHTML = '<p>Presets change both the lobby name and all text settings (except for the Font Face). The line of text displayed right below the preset name shows the font face that we (Migmated & Or3o) believe best matches the preset. So if you’re running out of ideas, just try out some presets and see what works!</p>'

    } else if(type == "text-tr"){
        popupTitle.innerText = "Text Transparency"
        popupBody.innerHTML = "<p>This setting controls how visible your text is by adjusting its opacity. A lower transparency value makes the text more see‑through, blending it with the background, while a higher value keeps the text solid and fully visible. It’s useful for creating subtle effects or making text stand out less against busy visuals.</p>"   

    } else if(type == "stroke-tr"){
        popupTitle.innerText = "Stroke Alpha Value"
        popupBody.innerHTML = "<p>The stroke alpha value determines the opacity of the text’s outline (stroke). Lower values make the stroke lighter and more transparent, while higher values give it a bold, solid outline. This is especially helpful for improving readability when text overlaps complex backgrounds, or for adding stylistic emphasis.</p><br><p style='color:yellow;'>Disclaimer: the Stroke Alpha Value that I personally recommend is between 0.2 and 0.5, because it makes the stroke cleaner, and less screaming against the text, the images below show examples of stroke alpha values:</p> <div id='popup-image'><img style='width: 500px;' src='assets/popup-images/stroke-tr_1.png'>Text with a Stroke Alpha Value of 0.3</div> <div id='popup-image'><img style='width: 500px;' src='assets/popup-images/stroke-tr_2.png'>Text with a Stroke Alpha Value of 0 (fully visible stroke)</div> <hr> <div id='popup-image'><img style='width: 500px;' src='assets/popup-images/stroke-tr_3.png'><p style='color:lime;'>Fun fact: You can actually make a text with only the stroke visible, but ingame it will look like the text is bold.</p></div>"

    } else if(type == "font-face"){
        popupTitle.innerText = "Font Face"
        popupBody.innerHTML = "<p>The Font Face setting allows you to change the look of the text in your lobby name, all of the available fonts were tested and works ingame, <span style='color:red;'>despite some of them not being able to work in the site preview due to license (they cost money) or just being Roblox exclusive</span>. In that case, the fonts that are not available will be shown as the <span class='arial'>Arial</span> font here in the site.</p> <br> <p style='color:yellow;'>The images below show how these fonts look ingame.</p>"
        popupBody.innerHTML += "<div id='img-table'><div id='popup-image'><img style='width: 350px;' src='assets/popup-images/fontface_1.png'></div> <div id='popup-image'><img style='width: 350px;' src='assets/popup-images/fontface_2.png'></div> <div id='popup-image'><img style='width: 350px;' src='assets/popup-images/fontface_3.png'></div> <div id='popup-image'><img style='width: 350px;' src='assets/popup-images/fontface_4.png'></div> <div id='popup-image'><img style='width: 350px;' src='assets/popup-images/fontface_5.png'></div> <div id='popup-image'><img style='width: 350px;' src='assets/popup-images/fontface_6.png'></div> <div id='popup-image'><img style='width: 350px;' src='assets/popup-images/fontface_7.png'></div> <div id='popup-image'><img style='width: 350px;' src='assets/popup-images/fontface_8.png'></div></div>"

    } else if(type == "credits"){
        popupTitle.innerText = "Credits"
        popupBody.innerHTML = "<div id='credits-sect'><img style='border: solid 3px #ff6a00; width: 250px; pointer-events:none;' src='assets/popup-images/credits/dancing_me.gif' style='width:250px;'><div id='credits-p'> <h1>Migmated</h1><p style='font-size: 15pt; font-style: italic; opacity:0.5;'>Developer of the project, also, made the icons for presets.</p><br><p>I didn't knew most of the things I implemented on this, so I had to research a lot, and im happy with the result, I feel that this project helped me to improve a lot of my coding skills in general, while having fun with something that I built a care for a time now, Nullscape! Thank you for reading and principally, for using Nullscape Lobby Name Maker ❤</p></div></div>"
        popupBody.innerHTML += "<div id='credits-sect'><img style='border: solid 3px #e600ff; height: 250px; width: 250px; pointer-events:none;' src='assets/popup-images/credits/niko.webp'><div id='credits-p'> <h1>Or3o</h1><p style='font-size: 15pt; font-style: italic; opacity:0.5;'>My friend, helped with the presets.</p><br><p>Or3o who discovered and taught me how to do the cool thing on the lobby names, he's helping me since I began coding the first things of it. Or3o also was who encouraged me the most to start this project, so this wouldn't even exist if it wasn't him. He also helped me with some of the preset ideas and icons.</p></div></div>"
        popupBody.innerHTML += "<div id='credits-sect'><img style='border: solid 3px #7b00ff; width: 250px; pointer-events:none;' src='assets/popup-images/credits/nullscape-icon.png' alt='Nullscape Discord Server Icon' style='width:250px;'><div id='credits-p'> <h1>Nullscape Wiki & Nullscape Discord</h1><p style='font-size: 15pt; font-style: italic; opacity:0.5;'>Everything that I didn't made by myself.</p><br><p>The mart slide cursor follower; the site background from <b>her</b> fight; the teledancer easter egg; death quotes and ideas for the presets; references for drawing the preset icons; the colors for the borders on the preset icons; the 'NULLSCAPE' logo in the NLNM own logo.</p> <br> <a style='color: #5084ce; text-decoration: none;' target='_blank' rel='noopener noreferrer' href='https://nullscape.wiki'><p>> Click here to be redirectioned to the Nullscape Wiki!</p></a> <br> <a style='color: #5084ce; text-decoration: none;' target='_blank' rel='noopener noreferrer' href='https://discord.gg/nullscape'><p>> Click here to be redirectioned to the Nullscape Discord Server!</p></a></div></div>"
        popupBody.innerHTML += "<hr style='border: white 1px solid;'> <h1 style='font-size: 35pt; margin-bottom: 15px;'>Special Thanks</h1>"
        popupBody.innerHTML += "<div id='credits-sect'><div id='credits-p'> <h1>Sticks</h1><p style='font-size: 15pt; font-style: italic; opacity:0.5;'>The creator of Nullscape Shop Calculator</p><br><p>Another main inspiration of mine to create the project, I hope to help the community (somehow) as much as they helped with their own project, I find myself using it frequently when playing with my friends, you should check it whenever you have the chance!</p> <br> <a style='color: #5084ce; text-decoration: none;' target='_blank' rel='noopener noreferrer' href='https://stickstetris.github.io/NullscapeShopCalculator/'><p>> Click here to be redirectioned to the Nullscape Shop Calculator!</p></a></div></div> <hr>"
        popupBody.innerHTML += "<div id='credits-sect'><div id='credits-p'> <h1>MartWaterimp</h1><p style='font-size: 15pt; font-style: italic; opacity:0.5;'>The goat.</p><br><p>The creator of Nullscape, thanks for creating an amazing game, Nullscape quickly became one of my favorite games in the platform, Doom and Bloom (Patch 5) just made me even more in love with the game and im SO excited to see the upcoming updates of this game!</p> <br></p> <a style='color: #5084ce; text-decoration: none;' target='_blank' rel='noopener noreferrer' href='https://www.roblox.com/share?code=3fc36f2add2aae4584f5fa870cebcdfa&type=ExperienceDetails&stamp=1784336729204'><p>> Click here to be redirectioned to the Nullscape Roblox page!</p></a></div></div> <hr>"
        popupBody.innerHTML += "<div id='popup-image'><img style='border: none; width: 250px; pointer-events:none;' src='assets/popup-images/credits/bye_bye_mart.gif'>bye bye mart >:D</div>"

    } else if(type == "teledancer"){
        popupTitle.innerHTML = "<video src='assets/Teledancer.webm' width='50px' loop autoplay></video>"
        popupBody.innerHTML = '<div id="img-table"><video src="assets/Teledancer.webm" width="250px" loop muted autoplay></video> <video src="assets/Teledancer.webm" width="250px" loop muted autoplay></video><video src="assets/Teledancer.webm" width="250px" loop muted autoplay></video> <video src="assets/Teledancer.webm" width="250px" loop muted autoplay></video><video src="assets/Teledancer.webm" width="250px" loop muted autoplay></video><video src="assets/Teledancer.webm" width="250px" loop muted autoplay></video><video src="assets/Teledancer.webm" width="250px" loop muted autoplay></video><video src="assets/Teledancer.webm" width="250px" loop muted autoplay></video><video src="assets/Teledancer.webm" width="250px" loop muted autoplay></video><video src="assets/Teledancer.webm" width="250px" loop muted autoplay></video><video src="assets/Teledancer.webm" width="250px" loop muted autoplay></video><video src="assets/Teledancer.webm" width="250px" loop muted autoplay></video><video src="assets/Teledancer.webm" width="250px" loop muted autoplay></video><video src="assets/Teledancer.webm" width="250px" loop muted autoplay></video><video src="assets/Teledancer.webm" width="250px" loop muted autoplay></video><video src="assets/Teledancer.webm" width="250px" loop muted autoplay></video><video src="assets/Teledancer.webm" width="250px" loop muted autoplay></video><video src="assets/Teledancer.webm" width="250px" loop muted autoplay></video><video src="assets/Teledancer.webm" width="250px" loop muted autoplay></video><video src="assets/Teledancer.webm" width="250px" loop muted autoplay></video><video src="assets/Teledancer.webm" width="250px" loop muted autoplay></video><video src="assets/Teledancer.webm" width="250px" loop muted autoplay></video><video src="assets/Teledancer.webm" width="250px" loop muted autoplay></video><video src="assets/Teledancer.webm" width="250px" loop muted autoplay></video><video src="assets/Teledancer.webm" width="250px" loop muted autoplay></video><video src="assets/Teledancer.webm" width="250px" loop muted autoplay></video><video src="assets/Teledancer.webm" width="250px" loop muted autoplay></video></div>'

    }  else{
        popupTitle.innerText = "Placeholder"
        popupBody.innerHTML = "<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex quidem libero dolor est nobis nisi illo deserunt, accusantium beatae ipsam? Saepe id explicabo eaque suscipit? Libero rem dicta enim placeat?</p>"
    }
}

// Preview
setInterval(() => {
    // Repeating because it needs to get checked every instance.
    lobbyname = document.getElementById("lobbyname").value
    textcolor = document.getElementById("textColor").value
    textTr = document.getElementById("textTr").value

    fontFace = document.getElementById("fontFace").value

    bold = document.getElementById("boldCheckbox")
    italic = document.getElementById("italicCheckbox")
    underline = document.getElementById("underlCheckbox")
    strikethrough = document.getElementById("strikeCheckbox")

    strokecolor = document.getElementById("strokeColor").value
    strokeTr = document.getElementById("strokeTr").value


    // Lobby name
        preview.innerText = `${lobbyname}`;
        if (document.getElementById("finalLobbyname").textContent === "he's hitting the moves!!") {
            document.getElementById("finalLobbyname").style.cursor = "pointer";
        } else{
            document.getElementById("finalLobbyname").style.cursor = "auto";
        }

    // Text color and transparency
        preview.style.color = textcolor
        preview.style.opacity = textTr

    // Font Face
    if(fontFace != ""){
        setFont(fontFace.toLowerCase())
    }

    // Markdown
        if(bold.checked){
            preview.style.fontWeight = "900"
        }else{
            preview.style.fontWeight = "500"
        }

        if(italic.checked){
            preview.style.fontStyle = 'italic'
        } else{
            preview.style.fontStyle = ''
        }

        if(underline.checked && strikethrough.checked){
            preview.style.textDecoration = 'underline line-through'
        } else if(underline.checked){
            preview.style.textDecoration = 'underline'
        } else if (strikethrough.checked){
            preview.style.textDecoration = 'line-through'
        } else {
            preview.style.textDecoration = ''
        }  

    // Stroke
        preview.style.webkitTextStrokeColor = `rgba(${hexToRgb(strokecolor)} ${strokeTr})`
        preview.style.webkitTextStrokeWidth = '1px'
}, 500);

// 👀
function easteregg(){
    if(
        document.getElementById("lobbyname").value == "he's hitting the moves!!" &&
        document.getElementById("textColor").value == "#404040" &&
        document.getElementById("textTr").value == "1" &&
        document.getElementById("strokeColor").value == "#e70000" &&
        document.getElementById("strokeTr").value == "0.2"
    ){
        openPopup('teledancer')
        document.getElementById("lobbyname").value = "must've been the wind 👀"
        document.getElementById("textColor").value = "#c0c0c0"
        document.getElementById("textTr").value = "1"
        document.getElementById("boldCheckbox").checked = false
        document.getElementById("italicCheckbox").checked = false
        document.getElementById("underlCheckbox").checked = false
        document.getElementById("strikeCheckbox").checked = false
        document.getElementById("strokeColor").value = "#000000"
        document.getElementById("strokeTr").value = "0"
    } else{

    }
    
}
