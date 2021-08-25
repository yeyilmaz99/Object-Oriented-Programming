



function question(hobby){

    switch(hobby){
        case 'car':
            return function(name){
                console.log(`${name} do you have a car ?`);
            }

        break;

        case 'book':
            return function(name){
                console.log(`${name} what is your favourite book?`);
            }

        break;

        case 'software':
            return function(name,type){
                console.log(`${name} are you interested in ${type} ?`);
            }

        break;

        default:
            return function(name){
                console.log(`${name} how are you ?`);
            }
    
    }
}

var carQuestion = question('car');

carQuestion('Yunus')

var bookQuestion= question('book');

bookQuestion('yunus')

var softwareQuestion = question('software')

softwareQuestion('yunus','javascript')