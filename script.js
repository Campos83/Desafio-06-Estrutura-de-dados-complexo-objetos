let sobreMim = {
    nome: "Willian",
    idade: 38,
    profissao: "Grafico"
 }
 sobreMim.time = "Flamengo"
 
 console.log();
 
 delete sobreMin.idade
 
 console.log(sobreMin);
 
 let cadastro = [{
     nome: "Willian",
     idade: 38,
     telefone: 1111-2222,
     amigos: ["Claudia", "Paula", "Leone", "Glauber"]
 },
 {
     nome: "Claudia",
     idade: 33,
     telefone: 2222-1111,
     amigos: ["Willian", "Paula", "Leone", "Glauber"]
 },
 {
     nome: "Paula",
     idade: 27,
     telefone: 3333-4444,
     amigos: ["Willian", "Claudia", "Leone", "Glauber"]
 },
 {
     nome: "Leone",
     idade: 34,
     telefone: 4444-3333,
     amigos: ["Willian", "Claudia", "Paula", "Glauber"]
 },
 {
     nome: "Glauber",
     idade: 35,
     telefone: 5555-4444,
     amigos: ["Willian", "Claudia", "Paula", "Leone"]
 }]
 
 console.log(cadastro[0].amigos[1])
 console.log(cadastro[1].amigos[0])
 console.log(cadastro[2].amigos[3])
 console.log(cadastro[3].amigos[2])
 console.log(cadastro[4].amigos[1])