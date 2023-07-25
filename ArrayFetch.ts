//terminar código
interface Curso {
	nome: string,
    horas: number,
    aulas: number,
    gratuito: boolean,
    tags: string[],
    idAulas: number[],
    nivel: string
};

async function fetchCursos () {
	const resp = await fetch('https://api.origamid.dev/json/cursos.json ');
	const data = await resp.json();

	return data;
}

function getColorCurso (cursos: Curso[]) {
	const colorCurso = cursos.map(p => {
		if (p.nivel === 'iniciante') return 'blue';
		if (p.nivel === 'avancado') return 'red';
		else return null;
	});

	return colorCurso;
}

const cursos: Promise<Curso[]> = fetchCursos().then(p => p);
