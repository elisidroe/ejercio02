document.getElementById('cambioColor').addEventListener('click',
    function () {
        const frases = [
            '#b9322b',
            '#00fb10',
            '#00fba4',
            '#b800ff',
            '#ffd600',
        ];        
        const random = frases [Math.floor(Math.random() * frases.length)];
        document.getElementById('mensaje').style.color = random;
        
    });

    document.getElementById('cambioColor').addEventListener('click',
    function () {
        const colores = [
            'que tengas un buen dia',
            'van a reprobar en programacion',
            'hoy va a llover',
            'mañana saldra el sol',
            'hoy comere rico',
        ];        
        const random = colores [Math.floor(Math.random() * colores.length)];
        document.getElementById('mensaje').textContent = random;
        
    });    
