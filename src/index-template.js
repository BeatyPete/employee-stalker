module.exports = templateData => {
    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
            <link rel="stylesheet" href="./test.css">
            <!-- <link rel="icon" type="image/x-icon" href="./assets/images/favicon.ico" /> -->
            <title>Team Stalker</title>
        </head>
    
        <body>
            <header>
                <h1 class="bg-danger text-center py-5 text-white">My Team</h1>
            </header>
    
            <main class="container">
                <div class="row justify-content-center">
                    ${generateEmployees(templateData)}
                </div>
    
                
            </main>
        </body>
    </html>
    `;
};

const generateEmployees = employeeData => {
    return employeeData.map(employee => {
        if (employee.role === 'Engineer') {
            var extra = 'Github'
        } else if (employee.role === 'Intern') {
            var extra = 'School'
        } else {
            var extra = 'Office number'
        }
        return `
            <div class="card shadow m-3" style="width: 18rem;">
                <div class="card-body bg-primary text-white">
                    <h3 class="card-title">${employee.name}</h3>
                    <h4 class="card-text">${employee.role}</h4>
                </div>
                <div class="bg-light">
                    <ul class="list-group p-4">
                        <li class="list-group-item">ID: ${employee.id}</li>
                        <li class="list-group-item">Email: 
                            <a href = "mailto: ${employee.email}">${employee.email}</a>
                        </li>
                        <li class="list-group-item">${extra}: ${employee.other}</li>
                    </ul>
                </div>
            </div>
        `
    }).join('');
};
