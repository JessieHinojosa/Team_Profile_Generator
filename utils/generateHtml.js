const generateEngineerCard = (employeeData) => {
    return `
    <div class="card col-1.5 p-1 shadow p-3 mb-5 bg-body rounded-3" style="width: 18rem;">
     <div class="bg-info p-1 rounded-3">
      <h3 class="card-title my-1">${employeeData.name}</h3>
      <h5 class="card-subtitle mb-2">${employeeData.role}</h5>
     </div>
      <ul class="pl-1 list-unstyled">
        <li>Id: ${employeeData.id}</li>
        <li>Email: ${employeeData.email}</li>
        <li>Github: <a href="https://github.com/${employeeData.github}/">${employeeData.github}</a></li>
        </ul>
    </div>
        `
}
const generateInternCard = (employeeData) => {
    return `
    <div class="card col-1.5 p-1 shadow p-3 mb-5 bg-body rounded-3" style="width: 18rem;">
     <div class="bg-info p-1 rounded-3">
      <h3 class="card-title my-1">${employeeData.name}</h3>
      <h5 class="card-subtitle mb-2 ">${employeeData.role}</h5>
     </div>
        <ul class="pl-1 list-unstyled">
        <li>Id: ${employeeData.id}</li>
        <li>Email: ${employeeData.email}</li>
        <li>School: ${employeeData.school}</li>
        </ul>
    </div>
    `
}
const generateManagaerCard = (employeeData) => {
    return `
    <div class="card col-1.5 p-1 shadow p-3 mb-5 bg-body rounded-3" style="width: 18rem;">
     <div class="bg-info p-1 rounded-3">
    <h3 class="card-title my-1">${employeeData.name}</h3>
    <h5 class="card-subtitle mb-2 ">${employeeData.role}</h5>
     </div>
    <ul class="pl-1 list-unstyled">
    <li>Id: ${employeeData.id}</li>
    <li>Email: <a href="mailto:${employeeData.email}">${employeeData.email}</a></li>
    <li>Office: ${employeeData.officeNumber}</li>
    </ul>
    </div>
    `
}

const generateHtml = (teamArray) => {
    const employeeCards = [];
    // create employee bootstrap cards
    teamArray.forEach( item => {
        if(item.role === 'Engineer') {
            employeeCards.push(generateEngineerCard(item));
        }
        if(item.role === 'Intern') {
            employeeCards.push(generateInternCard(item));
        }
        if(item.role === "Manager") {
            employeeCards.push(generateManagaerCard(item));
        }

    });

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
        <title>Team</title>
    </head>
    <body>
     <header class="bg-primary">
       <h1 class="py-4 text-center">Team</h1>
     </header>
     <main class="mt-5">
     <section class="container-fluid">
      <div class="row justify-content-around">
        ${employeeCards.join('')}
     </section>
     </main>
    </body>
    </html>
    `
}


module.exports = generateHtml;