"use strict";
;
async function fetchCursos() {
    const resp = await fetch('https://api.origamid.dev/json/cursos.json ');
    const data = await resp.json();
    return data;
}
function getColorCurso(cursos) {
    const colorCurso = cursos.map(p => {
        if (p.nivel === 'iniciante')
            return 'blue';
        if (p.nivel === 'avancado')
            return 'red';
        else
            return null;
    });
    console.log(colorCurso);
    return colorCurso;
}
fetchCursos().then(resp => getColorCurso(resp));
