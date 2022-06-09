setTimeout(function(){ 
    var myModalEl = document.getElementById('exampleModalToggleLabel')
        myModalEl.addEventListener('hidden.bs.modal', function (event) {
            document.getElementById('MyForm').reset();
    })
     }, 100);