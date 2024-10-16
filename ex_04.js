const token = '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';  


const repoOwner = 'venuscyr';  
const repoName = 'day11';      
const url = `https://api.github.com/repos/${repoOwner}/${repoName}/commits`;


fetch(url, {
    method: 'GET',
    headers: {
        'Authorization': `token ${token}`,  
        'Accept': 'application/vnd.github.v3+json'
    }
})
    .then(response => response.json())  
    .then(data => {
       
        data.slice(0, 3).forEach((commit, index) => {
            console.log(`Commit ${index + 1}: ${commit.commit.message}`);
        });
    })
    .catch(error => {
        console.error('Erreur lors de la récupération des commits :', error);
    });
