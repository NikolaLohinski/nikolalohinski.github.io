<template>
  <div class="Resume">
    <div class="contact-info">
      <ul class="info">
        <li big>
          <p name>Nikola LOHINSKI</p>
        </li>
        <li small>
          <p>
            <i class="fa fa-map-marker"></i>
            <span v-html="translate('address')" class="address">
            </span>
          </p>
          <p class="birth">
            <i class="fa fa-birthday-cake"></i>
            <span v-html="translate('birth')">
            </span>
          </p>
        </li>
        <li big :title="translate('email', 'title')">
          <a :href="'mailto:' + email.value">
            <i class="fa fa-user"></i>{{email.value}}
          </a>
        </li>
        <li small :title="translate('telephone', 'title')">
          <a :href="'tel:' + telephone.value">
            <i class="fa fa-phone"></i>{{ telephone.display }}
          </a>
        </li>
      </ul>
    </div>
    <section big>
      <div class="section-title"><i class="fa fa-briefcase"></i>{{ translate('titles', 'experience') }}</div>
      <article>
        <p class="article-title">{{ translate('sfara', 'title') }}</p>
        <p class="article-sub-title">{{ translate('sfara', 'place') }}</p>
        <p class="article-date" :title="translate('sfara', 'duration')">{{ translate('sfara', 'dates') }}</p>
        <ul class="article-bullet-points">
          <li v-html="translate('sfara', 'bulletPoints', '1')"></li>
          <li v-html="translate('sfara', 'bulletPoints', '2')"></li>
          <li v-html="translate('sfara', 'bulletPoints', '3')"></li>
        </ul>
      </article>
      <article>
        <p class="article-title">{{ translate('thales', 'title') }}</p>
        <p class="article-sub-title">{{ translate('thales', 'place') }}</p>
        <p class="article-date" :title="translate('thales', 'duration')">{{ translate('thales', 'dates') }}</p>
        <ul class="article-bullet-points">
          <li v-html="translate('thales', 'bulletPoints', '1')"></li>
          <li v-html="translate('thales', 'bulletPoints', '2')"></li>
        </ul>
      </article>
    </section>
    <section small>
      <div class="section-title"><i class="fa fa-graduation-cap"></i>{{ translate('titles', 'formation') }}</div>
      <article>
        <p class="article-title">{{ translate('supaero', 'title') }}</p>
        <p class="article-sub-title">{{ translate('supaero', 'place') }}</p>
        <p class="article-date" :title="translate('supaero', 'duration')">{{ translate('supaero', 'dates') }}</p>
        <ul class="article-bullet-points">
          <li v-html="translate('supaero', 'bulletPoints', '1')"></li>
          <li v-html="translate('supaero', 'bulletPoints', '2')"></li>
        </ul>
      </article>
      <article>
        <p class="article-title">{{ translate('parc', 'title') }}</p>
        <p class="article-sub-title" v-html="translate('parc', 'place')"></p>
        <p class="article-date" :title="translate('parc', 'duration')"
           v-html="translate('parc', 'dates')"></p>
        <ul class="article-bullet-points">
          <li v-html="translate('parc', 'bulletPoints', '1')"></li>
        </ul>
      </article>
    </section>
    <section big>
      <div class="section-title"><i class="fa fa-wrench"></i>{{ translate('titles', 'otherExperiences') }}</div>
      <article>
        <p class="article-title">{{ translate('asIsae', 'title') }}</p>
        <p class="article-sub-title">{{ translate('asIsae', 'place') }}</p>
        <p class="article-date" :title="translate('asIsae', 'duration')">{{ translate('asIsae', 'dates') }}</p>
        <ul class="article-bullet-points">
          <li v-html="translate('asIsae', 'bulletPoints', '1')"></li>
          <li v-html="translate('asIsae', 'bulletPoints', '2')"></li>
        </ul>
      </article>
      <article>
        <p class="article-title">{{ translate('nebula', 'title') }}</p>
        <p class="article-sub-title" v-html="translate('nebula', 'place')"></p>
        <p class="article-date" :title="translate('nebula', 'duration')"
           v-html="translate('nebula', 'dates')"></p>
        <ul class="article-bullet-points">
          <li v-html="translate('nebula', 'bulletPoints', '1')"></li>
          <li v-html="translate('nebula', 'bulletPoints', '2')"></li>
        </ul>
      </article>
    </section>
    <section small>
      <div class="section-title"><i class="fa fa-laptop"></i>{{ translate('titles', 'info') }}</div>
      <article>
        <chart type="horizontalBar" class="chart"
               :data="itSkillsData"
               :labels="itSkillsLabels"
               :options="itOptions">
        </chart>
      </article>
    </section>
    <section big>
      <div class="section-title"><i class="fa fa-info"></i>{{ translate('titles', 'other') }}</div>
      <article>
        <ul class="article-bullet-points">
          <li v-for="(bullet, key) in other" v-html="translate('other', key)"></li>
        </ul>
      </article>
    </section>
    <section small>
      <div class="section-title"><i class="fa fa-comments-o"></i>{{ translate('titles', 'languages') }}</div>
      <article class="languages">
        <div class="language" v-for="(language, key) in languages">
          <span class="title">{{translate('languages', key, 'title')}}</span>
          <div v-for="i in 6" class="bar" :full="i<=language.level"></div>
          <span class="description">{{translate('languages', key, 'description')}}</span>
        </div>
      </article>
    </section>
  </div>
</template>
<script>
  import Chart from './Chart.vue';
  export default {
    data () {
      return {
        email: {
          value: 'lohinski.nikola@free.fr',
          title: {
            eng: 'Send email',
            fra: 'Envoyer un email'
          }
        },
        address: '26 Rue des Changes, 31000, Toulouse, FRANCE',
        birth: {
          eng: 'Born 15<exp>th</exp> September 1994, Lyon 7<exp>E</exp>',
          fra: 'Né le 15 Septembre 1994, à Lyon 7<exp>E</exp>'
        },
        telephone: {
          value: '+33623938586',
          display: '+33 6 23 93 85 86',
          title: {
            eng: 'Call',
            fra: 'Appeler'
          }
        },
        titles: {
          experience: {
            eng: 'Professional experience',
            fra: 'Expérience professionelle'
          },
          otherExperiences: {
            eng: 'Other experiences',
            fra: 'Autres expériences'
          },
          formation: {
            eng: 'Education',
            fra: 'Formation'
          },
          info: {
            eng: 'IT Skills',
            fra: 'Informatique'
          },
          other: {
            eng: 'Other',
            fra: 'Loisirs'
          },
          languages: {
            eng: 'Languages',
            fra: 'Langues'
          }
        },
        sfara: {
          title: 'Sfara - New York, USA',
          duration: { eng: '6 Months', fra: '6 Mois' },
          place: {
            eng: 'Internship - Gap year',
            fra: 'Stage - Césure'
          },
          dates: {
            eng: 'January 2017 - July 2017',
            fra: 'Janvier 2017 - Juillet 2017'
          },
          bulletPoints: {
            '1': {
              eng: 'Developed front-end web services and data visualization ' +
              'tools for a user portal using <b>Vue.js</b>',
              fra: 'Développement "front-end" de moyens de visualisation ' +
              'de données en utilisant <b>Vue.js</b>'
            },
            '2': {
              eng: 'Enhanced remote data storage and processing on <b>Python</b> servers' +
              ' through <b>Flask</b> and <b>Luigi</b>',
              fra: 'Amélioration des processus de traitement de données côté serveur <b>Python</b>' +
              ' à l\'aide de <b>Flask</b> et <b>Luigi</b>'
            },
            '3': {
              fra: 'Amélioration en utilisant <b>ElasticSearch</b>, <b>Kibana</b> et ' +
              '<b>Logstash</b> de la gestion des évènements serveur',
              eng: 'Improved log handling using <b>ElasticSearch</b>, <b>Kibana</b> and ' +
              '<b>Logstash</b>'
            }
          }
        },
        thales: {
          title: 'Thales - Toulouse, France',
          duration: { eng: '6 Months', fra: '6 Mois' },
          place: {
            eng: 'Internship - Gap year',
            fra: 'Stage - Césure'
          },
          dates: {
            eng: 'July 2016 - December 2016',
            fra: 'Juillet 2016 - Décembre 2016'
          },
          bulletPoints: {
            '1': {
              eng: 'Improved <b>C</b> and <b>JavaScript</b> taxirouting algorithms ' +
              'for airport operation functions',
              fra: 'Amélioration d’algorithmes en langage <b>C</b> et <b>JavaScript</b> ' +
              'de taxirouting pour la navigation aéroportuaire'
            },
            '2': {
              eng: 'Prototyped an <b>AngularJS</b> app skeleton',
              fra: 'Prototypage d’un squelette d’application <b>AngularJS</b>'
            }
          }
        },
        asIsae: {
          title: {
            eng: 'AS ISAE – Student sports organization',
            fra: 'AS ISAE – Association sportive étudiante'
          },
          duration: { eng: '1 Year', fra: '1 Année' },
          place: {
            eng: 'Vice-president',
            fra: 'Vice-président'
          },
          dates: {
            eng: 'February 2015 - February 2016',
            fra: 'Février 2015 - Février 2016'
          },
          bulletPoints: {
            '1': {
              eng: 'Administered 200,000€ of school’s budget',
              fra: 'Gestion d’un budget de 200 000€ pour 650 membres'
            },
            '2': {
              eng: 'Designed an <b>HTML5</b> app for an annual student’s sport ' +
              'event that enhanced news spreading and attractiveness: ' +
              '<a href="https://suponts-heros.github.io">https://suponts-heros.github.io</a>',
              fra: 'Création d’une application web <b>HTML5</b> informative ' +
              'pour un évènement sportif annuel: ' +
              '<a href="https://suponts-heros.github.io">https://suponts-heros.github.io</a>'
            }
          }
        },
        nebula: {
          title: {
            eng: 'Personal project',
            fra: 'Projet personnel'
          },
          duration: { eng: 'Visit website', fra: 'Rendez-vous sur le site' },
          place: {
            eng: 'NodeJS/Electron app development',
            fra: 'Développement d\'une app NodeJS/Electron'
          },
          dates: '<a href="http://project-nebula.github.io">' +
          'http://project-nebula.github.io</a>',
          bulletPoints: {
            '1': {
              eng: 'Designed and created a full working app to aggregate and combine ' +
              'public cloud storage services',
              fra: 'Design et création d\'une application permettant de ' +
              'combiner les services publiques de stockage en ligne'
            },
            '2': {
              eng: 'Worked with ISAE\'s researchers to implement <b>erasure codes</b> ' +
              'to achieve reliability, security and integrity of private online data',
              fra: 'Utilisation de <b>code à effacement</b> en collaboration avec des ' +
              'chercheurs de l\'ISAE pour assurer la fiabilité, la sécurité et l\'intégrité des données stockées'
            }
          }
        },
        other: [
          {
            eng: '<i>Music</i>: Clarinet, violin, guitar',
            fra: '<i>Musique</i>: Clarinette, violon, guitare'
          },
          {
            eng: '<i>Sport</i>: Volleyball (President of the Supaéro volleyball club), ' +
            'table tennis (regional level)',
            fra: '<i>Sport</i>: Volley (16<exp>E</exp> de finale coupe de France des Grandes Écoles) ' +
            'et tennis de table (niveau régional)'
          },
          {
            eng: '<i>Art</i>: Manager of the school’s TV show',
            fra: '<i>Art</i>: Président du Journal Télévisé Supaéro'
          }
        ],
        supaero: {
          title: 'ISAE - Supaéro',
          duration: { eng: '3 years of study', fra: '3 Années d\'étude' },
          place: {
            eng: 'Masters of engineering in data science',
            fra: 'Formation ingénieur en sciences des données et de la décision'
          },
          dates: {
            eng: 'September 2014 - November 2018',
            fra: 'Septembre 2014 - Novembre 2018'
          },
          bulletPoints: {
            '1': {
              eng: 'Specialized in <b>Machine Learning</b>' +
              ', <b>Deep learning</b> and Big Data.',
              fra: 'Spécialisation en <b>Machine Learning</b> ' +
              ', <b>Deep learning</b> et Big Data.'
            },
            '2': {
              eng: 'Followed <b>Autonomous Systems</b> course in the field of robotics',
              fra: 'Domaine <b>Systèmes Autonomes</b> en parcours robotique'
            }
          }
        },
        parc: {
          title: 'Lycée du parc',
          duration: { eng: '2 Years', fra: '2 Années' },
          place: {
            eng: 'Preparatory school MPSI/PSI*',
            fra: 'Classe préparatoire MPSI/PSI*'
          },
          dates: {
            eng: 'September 2012 - July 2014',
            fra: 'September 2012 - Juillet 2014'
          },
          bulletPoints: {
            '1': {
              eng: 'Competitive exam “Concours Commun Mines-Ponts”: top 3%',
              fra: 'Classé 76ème au Concours Commun Mines-Ponts'
            }
          }
        },
        languages: [
          {
            title: { eng: 'French', fra: 'Français' },
            description: { eng: 'Native language', fra: 'Langue natale' },
            level: 6
          },
          {
            title: { eng: 'English', fra: 'Anglais' },
            description: 'TOEFL ITP 610/670',
            level: 5
          },
          {
            title: { eng: 'Serbian', fra: 'Serbe' },
            description: { eng: 'Mother tongue', fra: 'Langue maternelle' },
            level: 4
          }
        ],
        itLevels: [
          { eng: 'Beginner', fra: 'Débutant' },
          { eng: 'Basics', fra: 'Initié' },
          { eng: 'Intermediate', fra: 'Intermédiaire' },
          { eng: 'Experienced', fra: 'Confirmé' },
          { eng: 'Expert', fra: 'Avancé' }
        ],
        itSkills: [
          { name: 'HTML5, CSS, JS', level: 4, moreInfo: 'VueJS, Webpack, AngularJS...' },
          { name: 'NodeJS', level: 4, moreInfo: 'Electron, Express, Laravel-elixir...' },
          { name: 'Python', level: 4, moreInfo: 'SQLAlchemy, Flask, Luigi...' },
          { name: 'MongoDB', level: 3, moreInfo: '' },
          { name: 'PostgreSQL', level: 3, moreInfo: '' },
          { name: 'R', level: 3, moreInfo: '' },
          { name: 'DynamoDB / S3', level: 2, moreInfo: '' },
          { name: 'ElasticSearch', level: 2, moreInfo: 'Kibana, Sense, Logstash' },
          { name: 'JAVA', level: 2, moreInfo: '' },
          { name: 'C/C++', level: 1, moreInfo: '' }
        ]
      };
    },
    computed: {
      itOptions () {
        const callbackLabel = (tooltipItem) => {
          return this.translate('itLevels', tooltipItem.xLabel);
        };
        const callbackFooter = (tooltipItem) => {
          return this.translate('itSkills', tooltipItem[0].index, 'moreInfo');
        };
        return {
          elements: {
            rectangle: {
              borderWidth: 1
            }
          },
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              ticks: {
                beginAtZero: true,
                display: false,
                max: 4.5
              },
              gridLines: {
                color: 'rgba(0, 0, 0, 0)'
              }
            }]
          },
          tooltips: {
            callbacks: {
              label: callbackLabel,
              footer: callbackFooter
            },
            displayColors: false
          }
        };
      },
      itSkillsLabels () {
        return this.itSkills.map((e) => e.name);
      },
      itSkillsData () {
        const dataSet = {
          backgroundColor: 'rgba(160,209,245,0.3)',
          borderColor: '#0070c9',
          data: []
        };
        this.itSkills.forEach((e) => {
          dataSet.data.push(e.level);
        });
        return [dataSet];
      }
    },
    methods: {
      translate (...args) {
        let item = this[args[0]];
        for (let k = 1; k < args.length; k++) {
          item = item[args[k]];
        }
        return (typeof item === 'string') ? item : item[this.lang];
      }
    },
    props: {
      lang: {
        type: String,
        default: 'eng',
        validator (lang) {
          return ['fra', 'eng'].includes(lang);
        }
      }
    },
    components: {
      'chart': Chart
    }
  };
</script>
<style lang="sass" type="text/scss" rel="stylesheet/scss">
  $fa-font-path: '../node_modules/font-awesome/fonts';
  @import '../node_modules/font-awesome/scss/font-awesome';
  @import 'scss/general';
  $general-text-color: #666666;
  $link-color: #0070c9;
  $small-col: 39%;
  $big-col: 55%;
  b { font-weight: inherit; color: black; }
  a { text-decoration: underline; color: $link-color; }
  i { font-style: inherit; color: $link-color; }
  .fa {
    color: $general-text-color;
    margin-right: 5px;
    opacity: 0.5;
    transform: scale(0.8);
    min-width: 20px;
    text-align: center;
  }
  .Resume {
    color: $general-text-color;
    .contact-info {
      padding: 0.75cm 0;
      p[name] {
        font-size: 1.25cm;
      }
      ul.info {
        margin: 0;
        padding: 0 0 0 0;
        list-style: none;
        li {
          margin: 10px 1% 0 1%;
          vertical-align: top;
          &[big] {width: $big-col;}
          &[small] {width: $small-col;}
          display: inline-block;
          font-size: 0.45cm;
          p { margin: 0; }
          span.address {
            display: inline-block;
            max-width: calc(100% - 40px);
            vertical-align: top;
          }
          .birth {
            margin-top: 5px;
          }
        }
      }
    }
    section {
      display: inline-table;
      margin: 0 1%;
      &[big] {width: $big-col;}
      &[small] {width: $small-col;}
      .section-title {
        border-bottom: 1px solid #ddd;
        font-size: .7cm;
        padding: 0 5px;
        margin-bottom: 5px;
      }
      article {
        p { margin: 5px; }
        .article-title {
          font-size: 0.6cm;
        }
        .article-sub-title {
          font-size: 0.5cm;
          font-style: italic;
        }
        .article-date {
          color: $link-color;
          font-size: 0.45cm;
          cursor: pointer;
        }
        .article-bullet-points {
          font-size: 0.45cm;
          padding-left: 0.75cm;
          margin: 0.25cm 0;
        }
        .chart {
          height: 8cm;
          width: $A4-small * 0.35;
        }
      }
      .languages {
        padding-top: 5px;
        text-align: center;
        .language {
          display: inline-block;
          text-align: center;
          width: 29%;
          .title {
            white-space: nowrap;
            display: block;
          }
          .bar {
            width: 8%;
            margin: 2.5%;
            height: 25px;
            display: inline-block;
            border: 1px solid rgba(160,209,245,0.6);
            border-radius: 3px;
            &[full] {
              background-color: rgba(160,209,245,0.6);
              border: 1px solid $link-color;
            }
          }
        }
      }
    }
    @media screen and (max-width: $A4-small), screen and (max-device-width: $A4-small) {
      padding-bottom: 15px;
     .contact-info {
        padding-top: 0 !important;
        p[name] {
          margin-left: 0.5cm;
          font-size: 1.10cm !important;
        }
        ul {
          padding: 0.5cm 0 0 0.5cm!important;
          li {
            @media (max-width: $A4-small) {
              width: 100% !important;
            }
          }
        }
      }
      section {
        width: 90% !important;
        margin: 5px 5% !important;
        .chart {
          width: 100% !important;
        }
      }
    }
  }
</style>
