const fs = require('fs')
function read(cb) {
    fs.readFile('brandsCar.json', 'utf8', function(err, data) {
        if (err) {
            console.log('Erro ao ler o arquivo:', err);
            return;
        }
        const parsedData = JSON.parse(data);
        console.log(parsedData);
    
            cb(parsedData)
    });
}

function save(newData){
    const jsonData = JSON.stringify(newData, null, 2)

    fs.writeFile('brandsCar.json', jsonData, 'utf8', function(err){
        if(err){
            console.log('Erro ao salvar o arquivo', err);
            return
        }
        console.log('Salvo com sucesso');
        
    })
}

read(function(){
    const newData = {
        name: "Ferrari",
        car: "Ferrari F12",
        price: "$2000,00"
    }
    save(newData)
})
