// -----------------------------
// JavaScript Portfolio Builder
// -----------------------------

// Wait until DOM is ready
document.addEventListener('DOMContentLoaded', () => {

    // -----------------------
    // Create body styles
    // -----------------------
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.fontFamily = "'Poppins', sans-serif";
    document.body.style.textAlign = 'center';
    document.body.style.background = 'linear-gradient(135deg, pink, lightblue)';
    document.body.style.backgroundSize = '400% 400%';

    // Animate background gradient
    let bgPos = 0;
    setInterval(() => {
        bgPos += 0.5;
        document.body.style.backgroundPosition = `${bgPos}% 50%`;
    }, 50);

    // -----------------------
    // Create header
    // -----------------------
    const header = document.createElement('header');
    header.style.padding = '50px 20px';
    header.style.background = 'rgba(255,255,255,0.15)';
    header.style.backdropFilter = 'blur(12px)';
    header.style.borderRadius = '0 0 20px 20px';
    header.style.boxShadow = '0px 4px 15px rgba(0,0,0,0.3)';
    document.body.appendChild(header);

    // -----------------------
    // Name: Divyashree.I (blinking red-green inside sky-blue oval)
    // -----------------------
    const nameDiv = document.createElement('div');
    nameDiv.textContent = 'Divyashree.I';
    nameDiv.style.display = 'inline-block';
    nameDiv.style.padding = '20px 60px';
    nameDiv.style.border = '3px solid black';
    nameDiv.style.borderRadius = '50%';
    nameDiv.style.backgroundColor = 'skyblue';
    nameDiv.style.fontSize = '3em';
    nameDiv.style.fontWeight = 'bold';
    nameDiv.style.fontFamily = "'Olivai', serif";
    nameDiv.style.color = 'red';
    header.appendChild(nameDiv);

    let colors = ['red', 'green'];
    let colorIndex = 0;
    setInterval(() => {
        nameDiv.style.color = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
    }, 500);

    // -----------------------
    // Running text: Computer Science Student
    // -----------------------
    const runningDiv = document.createElement('div');
    const runningSpan = document.createElement('span');
    runningSpan.textContent = 'Computer Science Student';
    runningSpan.style.position = 'relative';
    runningSpan.style.left = '100%';
    runningSpan.style.fontFamily = "'Sophia', cursive";
    runningSpan.style.fontSize = '1.8em';
    runningSpan.style.fontWeight = 'bold';
    runningSpan.style.color = 'maroon';
    runningDiv.appendChild(runningSpan);
    runningDiv.style.overflow = 'hidden';
    runningDiv.style.width = '100%';
    header.appendChild(runningDiv);

    let position = -runningSpan.offsetWidth;
    function moveText() {
        position += 2; // speed
        if (position > runningDiv.offsetWidth) {
            position = -runningSpan.offsetWidth;
        }
        runningSpan.style.left = position + 'px';
        requestAnimationFrame(moveText);
    }
    requestAnimationFrame(moveText);

    // -----------------------
    // Function to create sections
    // -----------------------
    function createSection(id, title, text) {
        const section = document.createElement('section');
        section.id = id;

        const h2 = document.createElement('h2');
        h2.textContent = title;
        h2.style.fontFamily = "'Pacifico', cursive";
        h2.style.fontSize = '3rem';
        h2.style.fontWeight = 'bold';
        h2.style.background = 'linear-gradient(90deg, red, orange, yellow, green, cyan, blue, violet)';
        h2.style.backgroundSize = '400% auto';
        h2.style.webkitBackgroundClip = 'text';
        h2.style.webkitTextFillColor = 'transparent';
        section.appendChild(h2);

        const p = document.createElement('p');
        p.textContent = text;
        p.style.fontFamily = "'Great Vibes', cursive";
        p.style.fontSize = '1.4rem';
        p.style.color = 'black';
        section.appendChild(p);

        document.body.appendChild(section);

        // Animate heading rainbow
        let bgPosH2 = 0;
        setInterval(() => {
            bgPosH2 += 2;
            h2.style.backgroundPosition = `${bgPosH2}% 50%`;
        }, 50);
    }

    // -----------------------
    // Create About, Projects, Contact sections
    // -----------------------
    createSection('about', 'About', 'I am a passionate Computer Science student who loves designing creative websites, learning new technologies, and building projects that solve real-world problems.');
    createSection('projects', 'Projects', 'Here are some of my projects that showcase my skills and creativity.');
    createSection('contact', 'Contact', 'You can reach me at divyashree@example.com or connect on LinkedIn.');
});
