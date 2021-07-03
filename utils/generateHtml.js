

const generateHtml = (teamArray) => {
    // sort employees into role arrays
    let engineers = [];
    let interns = []
    let manager;
    teamArray.forEach( item => {
        if(item.role === 'Engineer') {
            engineers.push(item);
        }else if(item.role === 'Intern') {
            interns.push(item);
        }else {
            manager = item;

        }
        
    });
    console.log(engineers);
    console.log(interns);
    console.log(manager);
    
}

module.exports = generateHtml;