let alfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']; 

$("#entradaCriptografar").on('keyup', function (event) {
    console.log(event.key); 

    if(alfabeto.indexOf(event.key.toUpperCase()) != -1)
    {
        index = alfabeto.indexOf(event.key.toUpperCase()); 
        index = index + 3;
        index = index % alfabeto.length;  

        console.log(index); 

        $("#saidaCriptografar").val($("#saidaCriptografar").val() + alfabeto[index]); 
    }  else if(event.key === "Backspace"){
        saidaString = $("#saidaCriptografar").val()
        saidaString = saidaString.slice(0,saidaString.length-1); 
        $("#saidaCriptografar").val(saidaString); 
    }

    if($("#entradaCriptografar").val() === '')
    {
        $("#saidaCriptografar").val(''); 
    }
})


$("#entradaDescriptografar").on('keyup', function (event) {
    console.log(event.key); 

    if(alfabeto.indexOf(event.key.toUpperCase()) != -1)
    {
        index = alfabeto.indexOf(event.key.toUpperCase()); 
        index = index - 3; 
        index = index % alfabeto.length;  
        console.log(alfabeto[index]); 
        $("#saidaDescriptografar").val($("#saidaDescriptografar").val() + alfabeto[index]); 
    }  else if(event.key === "Backspace"){
        saidaString = $("#saidaDescriptografar").val()
        saidaString = saidaString.slice(0,saidaString.length-1); 
        $("#saidaDescriptografar").val(saidaString); 
    }

    if($("#entradaDescriptografar").val() === '')
    {
        $("#saidaDescriptografar").val(''); 
    }
})
 