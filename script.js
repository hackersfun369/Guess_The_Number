randomNum = Math.floor(Math.random() * 100) + 1;
        console.log(randomNum)
        let chances = 5;
        let count =0;

        function check(){
            const inputNumber = document.querySelector('.inputNumber').value;
        const btn = document.querySelector('.check');
            console.log(count)
            validateNum(inputNumber);

        }
        function validateNum(inputNumber){
            if(count<=4){
            if(inputNumber == randomNum){
                const btn = document.querySelector('.check');
                btn.style.display='none'
                const hintP = document.querySelector('.hintP');
                const chancesH3 = document.querySelector('.chancesH3');
                hintP.textContent = "Congrats! Your guess is correct.";
                console.log("The guess is correct");
                chancesH3.textContent = "You Won!";
                const playAgainbtn = document.querySelector('.playAgain')
                playAgainbtn.style.display = 'block';
                resetGame();
            }
            else if(inputNumber>randomNum){
                const hintP = document.querySelector('.hintP');
                const chancesH3 = document.querySelector('.chancesH3');
                hintP.textContent = "The Guess is Higher";
                count++;
                chancesH3.textContent = `You have ${chances-count} chances left.`
                console.log("The guess is Higher")
                console.log("count :",count)
            }
            else if(inputNumber<randomNum){
                const hintP = document.querySelector('.hintP');
                const chancesH3 = document.querySelector('.chancesH3'); 
                hintP.textContent = "The Guess is Lower";
                count++;
                chancesH3.textContent = `You have ${chances-count} chances left.`
                console.log("The guess is Lower")
                console.log("count :",count)
            }
        }
        else if(count >= 5 && inputNumber!=randomNum){
            const chancesDiv = document.querySelector('.chances');
            const hintP = document.querySelector('.hintP');
            const btn = document.querySelector('.check');
            btn.style.display='none'
            count = 0;
            console.log(count)
                chancesDiv.innerHTML = `
                <h3 class='chancesH3'>You Lost the game!</h3>
                `
                const playAgainbtn = document.querySelector('.playAgain')
                playAgainbtn.style.display = 'block';

        }
    }

        function resetGame(){
            const chancesDiv = document.querySelector('.chances');
            const hintP = document.querySelector('.hintP');
                console.log("The guess is correct");
                chancesDiv.innerHTML = `
                <h3 class='chancesH3'>You won the game!</h3>
                `


        }
        function playAgain(){
            randomNum = Math.floor(Math.random() * 100) + 1;
            console.log(randomNum)
            const playAgain = document.querySelector('.playAgain');
            playAgain.style.display='none'
            const input = document.querySelector('inputNumber')
            const inputNumber = document.querySelector('.inputNumber').value='';
            const hintP = document.querySelector('.hintP');
            hintP.innerHTML = 'Enter the number to get a hint.'
            const chancesH3 = document.querySelector('.chancesH3');
            count=0;
            const chancesDiv = document.querySelector('.chances');
            chancesDiv.innerHTML = `
             <h3 class="chancesH3">You have 5 chances left.</h3>
            `
            const btn = document.querySelector('.check');
            btn.style.display='block'
        }