import {Subject} from './subject';

export const SUBJECTS: Subject[] = [
  { id: 1, name: 'Diskret Matematik',
    courseNumber: '01017',
    description: 'At tilvejebringe en del af det matematiske grundlag, der er nødvendigt for den moderne ingeniørvidenskab og at illustrere anvendelser heraf.\n',
  helperPrograms: [
    {title: 'Titel 1', description: 'Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. Pellentesque sapien ac quam. Lorem ipsum dolor sit nullam.\n' +
        '\n'},
    {title: 'Titel 2', description: 'amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. Pellentesque sapien ac quam. Lorem ipsum dolor sit nullam.\n' +
        '\n'},
    {title: 'Titel 3', description: 'Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. Pellentesque sapien ac quam. Lorem ipsum dolor sit nullam.\n' +
        '\n'},
    {title: 'Titel 4', description: 'Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. Pellentesque sapien ac quam. Lorem ipsum dolor sit nullam.\n' +
        '\n'},
    {title: 'Titel 5', description: 'Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. Pellentesque sapien ac quam. Lorem ipsum dolor sit nullam.\n' +
        '\n'},
    {title: 'Titel 6', description: 'Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. Pellentesque sapien ac quam. Lorem ipsum dolor sit nullam.\n' +
        '\n'},
  ]},
  { id: 12, name: 'Indledende progammering', courseNumber: '02101', description: 'At tilegne sig forståelse af basale begreber for imperative og objekt-orienterede programmeringssprog.\n' +
      'At kunne udtrykke disse begreber med anvendelse af gængse imperative og objekt-orienterede programmeringssprog.\n' +
      'At kunne udvikle mindre objekt-orienterede programmer og kunne dokumentere det udførte arbejde i en rapport.\n' +
      'At kunne læse og forstå programkode, samt analysere dets opførsel uafhængigt af en implementation.'},
  { id: 13, name: 'Introduktion til softwareteknologi', courseNumber: '02121', description: 'At stifte bekendtskab med indhold, metoder og udfordringer i studiet og efterfølgende ingeniørmæssige arbejde indenfor softwareteknologi og være i stand til dokumentere arbejdet og resultaterne.\n' },
];
