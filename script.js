const gameContainer = document.querySelector('.container')
const userResult = document.querySelector('.user_result img')
const cpuResult = document.querySelector('.cpu_result img')
const result = document.querySelector('.result')
const optionImages = document.querySelectorAll('.option_image')


optionImages.forEach((image, index) => {
    image.addEventListener("click", (e) => {
        image.classList.add("active")

        //Pour avoir les mêmes images en début de manche
        userResult.src = cpuResult.src = "images/rock.png"
        result.textContent = "Patientez..."

        optionImages.forEach((image2, index2) => {
            if(index !== index2 ) image2.classList.remove("active")
        })
        gameContainer.classList.add('start')
        
        setTimeout(() => {

            gameContainer.classList.remove('start')

            let imageSrc = e.target.querySelector("img").src;
            //affichage de ce que choisi le joueur
            userResult.src = imageSrc
            
            let randomNumber = Math.floor(Math.random() * 3)
            // console.log(randomNumber);
            //Tableau d'image de l'adversaire (l'ordinateur)
            let cpuImages = ["images/rock.png", "images/paper.png","images/scissors.png"]
            cpuResult.src = cpuImages[randomNumber]

            let userValue = ["R", "P", "S"][index]// On assigne un index aux items du joueur

            //On assigne un tableu aléatoire à l'ordinateur 
            //R: pierre, P: feuille, S: sciseaux
            let cpuValue = ["R", "P", "S"][randomNumber]// On assigne des chiffre aléatoire à l'adversaire

            //Objet du resultat
            let outcomes = {
                RR: 'Nul',
                RP: 'Perdu😭',
                RS: "Gagné🎉",
                PP: 'Null',
                PR: 'Gagné🎉',
                PS: 'Perdu😭',
                SS: 'Null',
                SR: 'Perdu😭',
                SP: 'Gagné🎉',
            }

            let outComeValue = outcomes[userValue + cpuValue]

            result.textContent = userValue === cpuValue ? "Match null😅" : `${outComeValue}`;
            console.log(cpuValue, userValue);

        }, 2500)
    })
})