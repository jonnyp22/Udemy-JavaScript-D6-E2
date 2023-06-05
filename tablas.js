function prueba(){

        let iUno = +document.getElementById("iUno").value;
        if(iUno>0 && iUno<11){
            
            document.write("<h1>Resultados</h1>");
                for(x=0; x<=10; x++){
                    
                    
                    document.write("<p>"+iUno+" por "+ x + " es igual a: "+(iUno*x)+" </p>");
                    
    
                }  
        }else {
    
            alert("Ingrse un valor válido 1-10");
        }
    
        
}
function suma(){

    let iDos = +document.getElementById("iUno").value;
    let tabla = +document.getElementById("listaTabla").value;

    if(iDos>0 && iDos<11){
        
        document.write("<h1>Resultados</h1>");
            
            for(x=1; x<=10; x++){
                
                let numeroResultado = (iDos+x);
                document.write("<p>"+iDos+" más "+ x + " es igual a: "+(iDos+x)+" </p>");

               
                

            }  
    }else {

        alert("Ingrse un valor válido 1-10");
    }

}

function sumaDos(){

    let iDos = +document.getElementById("iUno").value;
    let tabla = +document.getElementById("listaTabla");

    if(iDos>0 && iDos<11){
        
        document.write("<h1>Resultados</h1>");
            
            for(x=1; x<=10; x++){
                
                let resultado = "la suma de "+iDos+ " más " +x+" es igual a "+(iDos+x);

                alert("Funcions");


                let itemLista = document.createElement("li");

                itemLista.innerText= resultado;
        
                tabla.appendChild(itemLista);  
                document.write("<p> "+resultado+" </p>");

               
                              

            }  
    }else {

        alert("Ingrse un valor válido 1-10");
    }

}

