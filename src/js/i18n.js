const translations = {
  english: {
    'tel-display': '+33 6 23 93 85 86',
    'tel': '+33623938586',
    'mail': 'lohinski.nikola@free.fr',
    'address': '26 Rue des Changes, 31000 Toulouse FRANCE',
    'github': 'https://github.com/nikolalohinski',
    'datetime': {
      'april': 'April',
      'now': 'Current',
      'january': 'January',
      'december': 'December',
      'july': 'July'
    },
    'pro-experience': {
      'title': 'Professional experience',
      'thales-avs': {
        'name': 'Thales AVS'
      },
      'thales-avionics': {
        'name': 'Thales Avionics',
        'desc-1': 'Improved **C** and **JavaScript** taxirouting algorithms for airport operation functions',
        'desc-2': 'Prototyped an **AngularJS** app skeleton'
      },
      'sfara': {
        'name': 'Sfara Inc.',
        'desc-1': 'Developed front-end web services and data visualization tools for a user portal using **Vue.js**',
        'desc-2': 'Enhanced remote data storage and processing on **Python** servers through **Flask** and **Luigi**',
        'desc-3': 'Improved log handling using **ElasticSearch**, **Kibana** and **Logstash**'
      },
      'toulouse-france': 'Toulouse, France',
      'new-york-usa': 'New York, USA',
      'internship-gap-year': 'Internship - Gap year',
      'end-of-course-internship': 'End-of-course internship'
    },
    'education': {
      'title': 'Education',
      'supaero': {
        'name': 'ISAE - Supaéro',
        'degree': 'Masters of engineering in data science',
        'desc-1': 'Specialized in **data science** and **data mining** technologies',
        'desc-2': 'Followed **Autonomous Systems** course applied to **robotics**'
      },
      'lycee-parc': {
        'name': 'Lycéee du Parc',
        'degree': 'Preparatory school MPSI/PSI*',
        'desc-1': 'Competitive examination “Mines-Ponts” **top 3%**'
      }
    },
    'it-skills': {
      'title': 'IT Skills',
      'labels': {
        'beginner': 'Beginner',
        'basics': 'Basics',
        'intermediate': 'Intermediate',
        'experienced': 'Experienced',
        'expert': 'Expert'
      }
    },
    'other': {
      'title': 'Other experiences'
    },
    'languages': {
      'title': 'Languages'
    }
  },
  french: {
    'tel-display': '06 23 93 85 86',
    'tel': '+33623938586',
    'mail': 'lohinski.nikola@free.fr',
    'address': '26 Rue des Changes, 31000 Toulouse',
    'github': 'https://github.com/nikolalohinski',
    'datetime': {
      'april': 'Avril',
      'january': 'Janvier',
      'july': 'Juillet',
      'december': 'Décembre',
      'now': 'Actuellement'
    },
    'pro-experience': {
      'title': 'Expérience professionnelle',
      'thales-avs': {
        'name': 'Thales AVS'
      },
      'thales-avionics': {
        'name': 'Thales Avionics',
        'desc-1': 'Amélioration d’algorithmes en langage **C** et **JavaScript** pour la navigation aéroportuaire',
        'desc-2': 'Prototypage d’un squelette d’application **AngularJS**'
      },
      'sfara': {
        'name': 'Sfara Inc.',
        'desc-1': 'Développement "front-end" de moyens de visualisation de données en utilisant **Vue.js**',
        'desc-2': 'Amélioration des processus de traitement de données côté serveur **Python** à l\'aide de ' +
        '**Flask** et **Luigi**',
        'desc-3': 'Amélioration en utilisant **ElasticSearch**, **Kibana** et **Logstash** de la gestion des ' +
        'évènements serveur'
      },
      'new-york-usa': 'New York, USA',
      'toulouse-france': 'Toulouse',
      'internship-gap-year': 'Stage - Césure',
      'end-of-course-internship': 'Stage de fin d\'études'
    },
    'education': {
      'title': 'Formation',
      'supaero': {
        'name': 'ISAE - Supaéro',
        'degree': 'Formation ingénieur en Data Science',
        'desc-1': 'Spécialisation en **science des données** et **Data mining**',
        'desc-2': 'Domaine **Systèmes Autonomes** en parcours **robotique**'
      },
      'lycee-parc': {
        'name': 'Lycéee du Parc',
        'degree': 'Classe préparatoire MPSI/PSI*',
        'desc-1': 'Classé **76ème** au Concours Commun Mines-Ponts'
      }
    },
    'it-skills': {
      'title': 'Informatique',
      'labels': {
        'beginner': 'Débutant',
        'basics': 'Initié',
        'intermediate': 'Intermédiaire',
        'experienced': 'Confirmé',
        'expert': 'Avancé'
      }
    },
    'other': {
      'title': 'Autres expériences'
    },
    'languages': {
      'title': 'Langues'
    }
  }
};

export default (vue, defaultLanguage) => {
  // Add languages
  vue.i18n.add('english', translations.english);
  vue.i18n.add('french', translations.french);
  // Set default
  vue.i18n.set(defaultLanguage);
};
