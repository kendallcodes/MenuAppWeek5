class Chicken { 
    constructor(name, gender, breed, age) { 
        this.name = name; 
        this.gender = gender; 
        this.breed = breed; 
        this.age = age; 
    }

    describe(){ 
        return `Name: ${this.name} 
        Gender: ${this.gender} 
        Breed: ${this.breed} 
        Age: ${this.age}
        `; 
        }
    }

    let chicken1 = new Chicken("Baby", "male", "Orpington", "7 months"); 

//Flock contains an array of chickens
class Flock { 
    constructor(flockName) { 
        this.flockName = flockName; 
        this.chickens = []; 
        
    }
//if an instance of chicken is an instance of the the class Chicken, it pushes into the chickens array
addChicken(chicken) { 
    if (chicken instanceof Chicken) { 
        this.chickens.push(chicken); 
    } else throw new Error(`You can only add a chicken. Sorry`); }


flockRoster() { 
    return `This flock has ${this.chickens.length} chickens`;
} 
}

class Menu { 

    constructor() { 
        this.flocks = []; 
        this.selectedFlock = null; 
    }

    startMenu() { 
        let selection = this.showMainMenu(); 
        while (selection != 0) { 
            switch (selection) { 
                case '1': 
                this.createFlock(); 
                break;
                case '2': 
                this.deleteFlock(); 
                break;
                case '3': 
                this.viewFlock();
                break;
                case '4': 
                this.showFlocks();
                default:
                    selection = 0;
            }
            selection = this.showMainMenu()
        }
    }
    
   showMainMenu(){ 
        return prompt(`

    0) Exit
    1) Create Flock
    2) Delete Flock
    3) View Flock
    4) View All Flocks`); 
    }

    showFlockMenu(flockInfo) { 
        return prompt(`
        1) Add Chicken
        2) Remove Chicken
        0) Go Back
        ----------
        ${flockInfo}
        `); 
    }
    
 
    createFlock() { 
        let flockName = prompt('Enter the name of this flock'); 
        this.flocks.push(new Flock(flockName)); 
    }

    //index equals the number entered into the prompt box
    //if its a valid index, the flock at that index is removed using splice()
  deleteFlock() { 
        let index = prompt("Enter the index of the chicken you want to remove.")
        if (index > -1 && index < this.flocks.length) { 
        this.flocks.splice(index, 1); 
        }
    }

    //create a string to hold flocks. Iterate to add them. 
    showFlocks() { 
        let flockString = ''; 
        for (let i = 0; i < this.flocks.length; i++) { 
            flockString += i + ") " + this.flocks[i].flockName + '\n'; 
        }
        alert(flockString);
    }
//make sure that the index is more than -1 and less than flocks. 
//selectedflock index is this index of flocks
//description = flock flockName 
//iterate over selected flock's chickens, 
//
//
    viewFlock() { 
        let index = prompt('Enter the index of the flock you would like to view.');
        if (index > -1 && index < this.flocks.length) { 
            this.selectedFlock = this.flocks[index];
            let description = "Flock Name: " + this.selectedFlock.flockName + '\n';
    
            for (let i = 0; i < this.selectedFlock.chickens.length; i++) { 
                description += i + " | " + this.selectedFlock.chickens[i].name + 
                " | " + this.selectedFlock.chickens[i].gender + " | " + this.selectedFlock.chickens[i].breed 
                + " | " + this.selectedFlock.chickens[i].age + '\n';  
        }

        let selection = this.showFlockMenu(description);
        switch (selection) { 
            case '1':
                this.createChicken();
                break; 
                case '2': 
                this.removeChicken();
        }
    }
}

createChicken() { 
    let name = prompt('Enter the name of the chicken.'); 
    let gender = prompt('Enter the gender of the chicken.')
    let breed = prompt('Enter the breed of the chicken.'); 
    let age = prompt('Enter the age of the chicken.');
    this.selectedFlock.chickens.push(new Chicken(name, gender, breed, age)); 
}

removeChicken() { 
    let index = prompt('Enter the index of the chicken you want to remove:'); 
    if (index > -1 && index < this.selectedFlock.chickens.length) { 
        this.selectedFlock.chickens.splice(index, 1);
        }
    }
}
let menu = new Menu(); 
menu.startMenu();

