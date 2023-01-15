let empleados=[];

function limpiarFormulario(){
    let campos=document.querySelectorAll("input[type='text'],input[type='number']");
    for (let i=0; i<campos.length; i++){
        campos[i].value='';
    }
}

function mostrarEmpleados(){
    let llenarTabla=document.getElementById('tbDatos');
    llenarTabla.innerHTML="";
    for (let i=0; i<empleados.length; i++){
        tr=document.createElement('tr');
        personal=empleados[i];

        for (let y=0; personal.length; y++){
            celda=personal[y];
            td=document.createElement('td');
            td.innerHTML=celda;
            tr.appendChild(td);
        }
        llenarTabla.appendChild(tr);
    }
}

function agregarEmpleado() {
    let personal=[];
    personal.push(document.getElementById('txtNombre').value);
    personal.push(document.getElementById('txtApellido').value);
    personal.push(document.getElementById('intEdad').value);
    personal.push(document.getElementById('sueldo').value);
    
    let validarFormulario=true;
    for (let i=0; i<personal.length; i++){
        if(personal[i]==""){
            validarFormulario=false;
        }
    }

    if(validarFormulario){
        empleados.push(personal);
        let datos=JSON.stringify(empleados);
        localStorage.setItem('listadoEmpleados',datos);
        limpiarFormulario();
        mostrarEmpleados();
    } else {alert("Por favor llenar los campos requeridos");}
}

datos=localStorage.getItem('listadoEmpleados');
if (datos!=""){
    empleados=JSON.parse(datos);
    mostrarEmpleados();
}