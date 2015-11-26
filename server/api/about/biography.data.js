exports = module.exports = [
  // Name
  {
    type: 'name',
    data: 'Anna Antonets'
  },
  // Current occupation
  {
    type: 'occupation',
    data: 'Geneticist at the Laboratory of Medical Genetics, Rostov State Medical University'
  },
  // Contact details
  {
    type: 'contact',
    data: [
      {
        type: 'website',
        data: 'localhost'
      },
      {
        type: 'email',
        data: 'a.antnts@gmail.com'
      },
      {
        type: 'phone',
        data: '+7(928) 7705538'
      },
      {
        type: 'skype',
        data: 'anna.antonets'
      }
    ]
  },
  // Location
  {
    type: 'location',
    data: [
      {
        type: 'city',
        data: 'Rostov-on-Don'
      },
      {
        type: 'country',
        data: 'Russia'
      }
    ]
  },
  // About
  {
    type: 'about',
    data: [
      'More than five years of medical research and laboratory experience with strong analytical skills and a broad range of knowledge of congenital diseases, inherited metabolic disorders, oncology and oncohaematology, genetics and molecular biology of myeloproliferative diseases',
      'Excellent knowledge of genetics, laboratory genetics, clinical oncological genetics, molecular oncology, laboratory diagnostic technologies',
      'Currently working mainly at oncoheamatology, genetics and molecular biology of myeloproliferative diseases (CML, CMPD)',
      'An experienced researcher with excellent communication and interpersonal skills who has the ability to work independently under pressure'
    ]
  },
  // Skills
  {
    type: 'skills',
    data: [
      {
        type: 'Laboratory Techniques',
        data: [
          'Isolations of the nucleic acid (DNA, RNA) from various biological samples',
          'PCR, Real-time PCR, MLPA',
          'Agarose gel electrophoresis',
          'Pyrosequencing',
          'Sanger sequencing',
          'Mass spectrometry/Liquid chromatography',
        ]
      },
      {
        type: 'Tools',
        data: [
          'Thermocyclers: Rotor-Gene Q QIAGEN, BioRad CFX96',
          'PyroMark Q24 QIAGEN',
          'Tandem mass-spectrometer Agilent 6410',
          'Genetic analyzers: ABI 3130xl, Beckman Coulter CEQ-8000',
          'System of gel electrophoresis',
        ]
      },
      {
        type: 'Clinical skills',
        data: [
          'Genetics consultations in accordance with the laboratory results for the patients with inherited metabolic disorders, congenital diseases, oncological and oncohaematological diseases',
        ]
      },
    ]
  },
  // Education
  {
    type: 'education',
    data: [
      {
        type: 'Ph.D. (Candidate of Medical Science)',
        area: 'Genetics',
        university: 'Rostov State Medical University',
        country: 'Russia',
        startDate: '2009-10-01',
        endDate: '2012-09-01'
      },
      {
        type: 'B.S. Physician',
        area: 'Clinical Medicine, Diploma with High Distinction',
        university: 'Rostov State Medical University',
        country: 'Russia',
        startDate: '2001-09-01',
        endDate: '2005-07-01'
      }
    ]
  },
  // Languages
  {
    type: 'languages',
    data: [
      {name: 'English', level: 'Full Professional Proficiency'},
      {name: 'Russian', level: 'Native Proficiency'}
    ]
  },
  // Profiles
  {
    type: 'profiles',
    data: [
      {
        type: 'linkedin',
        url: 'https://ru.linkedin.com/in/anna-antonets-33956059/en'
      },
    ]
  },
  // Interests
  {
    type: 'interests',
    data: ['Hiking', 'Dancing']
  },
  // TODO: Certificates
  {
    type: 'certificates',
    data: [
      {
        name: 'Medical Laboratory Scientist, assessment #627/14-2.15',
        authority: 'Australian Institute of Medical Scientists (AIMS)',
      },
      {
        name: 'Certificate of registration as a specialist in the field of Genetics',
        authority: 'Rostov State Medical University',
        // TODO: add scan of certificate
        // url: 'https://s3.amazonaws.com/edu-cert.10gen.com/downloads/e34d6cf0f98e44a59a858e34ecb6bb84/Certificate.pdf?_ga=1.111168589.890038900.1393937110'
      },
      {
        name: 'Certificate of professional development “Application of real-time PCR to genetic diagnostics of somatic mutations”',
        authority: 'Central Research Institute of Epidemiology of the Federal Agency of Consumer Affairs of Russian Federation',
        // TODO: add scan of certificate
        // url: 'https://s3.amazonaws.com/edu-cert.10gen.com/downloads/e34d6cf0f98e44a59a858e34ecb6bb84/Certificate.pdf?_ga=1.111168589.890038900.1393937110'
      },
      {
        name: 'Certificate of professional development in “Laboratory diagnostic techniques, Foundation of public health system, Clinical genetics of hereditary diseases, Emergency medicine”',
        authority: 'Rostov State Medical University',
        // TODO: add scan of certificate
        // url: 'https://s3.amazonaws.com/edu-cert.10gen.com/downloads/e34d6cf0f98e44a59a858e34ecb6bb84/Certificate.pdf?_ga=1.111168589.890038900.1393937110'
      },
    ]
  },
  // Pubications
  {
    type: 'publications',
    data: [
      {
        name: 'Frequency of EGFR gene mutations in patients with lung adenocarcinoma in the southwestern region of Russia',
        authors: 'Sergey N. Kabanov, Liubov Yu Vladimirova, Evgeniya M. Nepomnyashchaya, Dmitriy I. Vodolazhskiy, Konstantin V. Dvadnenko, Anna V. Antonets',
        publisher: '2014 ASCO Annual Meeting, J Clin Oncol 32, 2014 (suppl; abstr e22209)'
      },
      {
        name: 'Clinical manifestations of EGFR gene mutations in patients with adenocarcinoma of the lung among inhabitants of the South Russian region',
        authors: 'D.Vodolazhskii D.I., I. Leyman, A. Antonets, Yu. Lazutin, K. Dvadnenko K.V., L. Vladimirova',
        publisher: 'Annals of Oncology (2014) 25 (suppl_4): iv546-iv563.10.1093/annonc/mdu358'
      },
      {
        name: 'Correlation of mutations of the KRAS gene and the clinical and pathological peculiarities of colorectal cancer in patients in Southern Russia',
        authors: 'Vodolazhskii D.I., Antonets A.V., Dvadnenko K.V., Vladimirova L.Yu., Gevorkyan Yu.A., Kasatkin V.F., Maksimov A.Yu.',
        publisher: 'International Journal of Experimental Education, issue 1, 2014',
      },
      {
        name: 'The relashionship between EGFR mutation and clinico-pathological features of lung adenocarcinoma in rsidents of Southern Russia',
        authors: 'Vodolazhskii D.I., Kit O.I., Maksimov A.Yu.,  Antonets A.V., Dvadnenko K.V., Vladimirova L.Yu., Leiman I.A., Lazutin Yu.N.',
        publisher: 'Clinical Medicine  2014, N7, С. 22-27',
      },
      {
        name: 'Detection of Human papillomavirus in vulva cancer tissue',
        authors: 'Anna Antonets, Galina Nerodo, Konstantin Dvodnenko, Tatyana Zykova, Natalya Ohremenko, Ekaterina Nerodo',
        publisher: '2013 ASCO Annual Meeting: J. Clin. Oncol. 31, 2013 (Suppl.; Abstract e16514)',
      },
      {
        name: 'Viral DNA in patients with cancer of the vulva',
        authors: 'T. Zykov, Ekaterina Nerodo, Anna Antonets, Konstantin Dvodnenko',
        publisher: 'Abstract book. EJC: European Journal of Cancer. 17th ECCO, 2013 p. 733, abstract 3070',
      },
      {
        name: 'Retrospective diagnostics of hereditary metabolic diseases using tandem mass-spectrometry',
        authors: 'Baidakova G.V., Antonets A.V., Golikhina T.A., Matulevich S.A., Amelina S.S., Kutsev S.I.',
        publisher: 'Contemporary problems in science and education, issue 2, 2013',
      },
      {
        name: 'Reference concentration values of amino acids and acylcarnitines  for large-scale screening of neonates for hereditary metabolic diseases using tandem mass-spectrometry',
        authors: 'Antonets A.V., Oksenyuk O.S., Amelina S.S., Kutsev S.I.',
        publisher: 'Diagnostic topics in pediatrics, issue 2, 2013',
      }
    ]
  },
  // Conferences
  {
    type: 'conferences',
    data: [
      {
        name: 'XVIII National Scientific and Applied Conference “Analytic reliability and diagnostic significance of laboratory medicine”',
        place: 'Moscow, 2013',
        role: 'delegate',
      },
      {
        name: 'XVII Russian Oncological Congress',
        place: 'Moscow, 2013',
        role: 'speaker',
      },
      {
        name: 'V International Scientific and Applied Conference “Topical problems in biology, nanotechnology and medicine”',
        place: 'Rostov-on-Don, 2013',
        role: 'speaker',
      },
      {
        name: 'All-Russian scientific practical conference with international participation "The genetics of tumors of the hematopoietic system"',
        place: 'St. Petersburg, 19-20 May, 2015',
        role: 'delegate',
      },
      {
        name: 'VII Congress of the Russian Society of Medical Genetics',
        place: 'St. Petersburg, 19-23 May 2015',
        role: 'delegate',
      }
    ]
  }
  // TODO: Experience
  // TODO: References
];
