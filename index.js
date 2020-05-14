const { promisify } = require('util')
const { prompt } = require('inquirer')
const { writeFile, appendFile } = require('fs')
const axios = require('axios')
const username = ''
const name = ''

const writeFileSync = promisify(writeFile)
const appendFileSync = promisify(appendFile)

// axios.get('https://api.github.com/users/username', {
//     headers: {
//         'Authorization': 'PERSONAL_ACCESS_TOKEN'
//     }
// })

// writeFileSync('README.md', )

let answers = prompt([
    {
        type: 'input',
        name: 'username',
        message: 'Enter your GitHub username:'
    },
    {
        type: 'input',
        name: 'title',
        message: 'Enter project\'s title:'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project',
    },
    {
        type: 'input',
        name: 'contents',
        message: 'Enter the sections to create your table of contents:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter any instructions needed for installation'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter the usage guidelines for your project'
    },
    {
        type: 'input', 
        name: 'license',
        message: 'Enter any licenses used for this project'
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Enter the name of any contributors'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Did you run any tests? How\'d they go?'
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Questions?'
    }
])
    
.then(answers => {
    console.log(answers)
    // axios.get('https://api.github.com/')
    const readMe = data => {
    return `
    # ${answers.title}

    -----------------------------------------

    ## Description
    -----------------------------------------
    ${answers.description}

    ## Table of Contents
    ------------------------------------------


    `
    .then(data => writeFileSync('README.md', readMe(data)))
    .then(() => {
        console.log('You did it!')
    })
    .catch(err => console.log(err))
    }
})

