import photo01 from '../assets/photo01.jpg';

export interface TimelineItem {
  title: string;
  description: string;
  image?: string;
}

export const timeline: TimelineItem[] = [
  {
    title: 'Hoy se cumple un año más',
    description:
      'Un año más, de las muchas historias que guardamos y de los que pocas evidencias hay de lo que hemos compartido. Para mi, eres el ejemplo de lo que quiero ser y el recuerdo que lo que aún me falta para llegar a ser como tú. Hoy, más que tu cumpleaño quiero recordarte lo valioso que es tenerte como papá.',
    image: photo01,
  },
  {
    title: '',
    description:
      'Gracias por estar conmigo en todo momento, y no soltarme la mano nunca. Aún cuando no la merecía. Gracias por ser nuestro apoyo constante y la fortaleza que necesitamos cuando la hemos necesitado. Gracias por permitirme ver que aún cansados debemos seguir dando lo mejor por los que amamos. Gracias por enseñarme todo lo que sé, desde lo más básico hasta lo que mejor se me da que es jugar fútbol, viene de ti. Eres un pilar en mi vida y todo lo que soy y en lo que me convertiré, es por ti. Aprendí de ti, desde la manera de mirar, hasta la manera de jugar. ',
  },
  {
    title: 'Mi orgullo eres tú',
    description:
      'Tal vez no te lo haya dicho nunca. Pero no puedo estar más orgulloso del papá que tengo. Ojalá pudiera expresar y hacerte ver que no hay persona que admire más que a ti.',
  },
];
