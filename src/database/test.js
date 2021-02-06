const Database = require('./db.js');
const creatProffy = require('./createProffy.js');

Database.then(async (db) => {
  // Inserir dados

  proffyValue = {
    name: 'Vinicius Euleoterio',
    avatar:
      'https://avatars3.githubusercontent.com/u/46050068?s=400&u=1497e818c3ac663f176141326920d96a574f6ad1&v=4',
    whatsapp: '51982895068',
    bio:
      'Entusiasta do mundo da tecnologia e da música.<br><br>Apaixonado por TI, ama programação e desafios. Conhecimento e Java, JavaScript, NodeJs, React.',
  };

  classValue = {
    subject: 1,
    cost: '40',
    // proffy_id virá pelo banco de dados
  };

  classScheduleValues = [
    // class_id virá pelo banco de dados, após cadastramos a class
    {
      weekday: 1,
      time_from: 720,
      time_to: 1220,
    },
    {
      weekday: 5,
      time_from: 520,
      time_to: 1520,
    },
  ];

  // await creatProffy(db, {proffyValue, classValue, classScheduleValues});

  // Consultar os dados inseridos

  // todos os proffys
  const selectedProffys = await db.all('SELECT * FROM proffys');
  // console.log(selectedProffys)

  // consultar classes de um prf
  //  trazer junto dados do professor

  // SELECT classes.*, proffys.*  = quero tudo da tabela classes e também da tablema proffys
  // JOIN classes ON (classes.proffy_id = proffy_id) = une classes pelo classes.proffy_id = proffy_id(tabela proffys)
  // WHERE classes.proffy_id = 1; = qual id pegar

  const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.* 
        FROM proffys 
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `);

  // console.log(selectClassesAndProffys)

  // time_from precisar ser <= ao horário solicitado
  // time_to precisa ser > ao horário solicitado
  const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"    
        AND class_schedule.weekday = "1"
        AND class_schedule.time_from <= "820"
        AND class_schedule.time_to > "820"
    `);

  console.log(selectClassesSchedules);
});
