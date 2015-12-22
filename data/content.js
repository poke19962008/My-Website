exports.getContent = [
  {
    title: 'Projects',
    description: 'All of my major projects done in college. Most of it are Web Apps made on Node.JS.',
    img: {
      src: './img/project.png',
      alt: 'Project Image'
    },
    content: [
        {
        title: 'Smart Internal Checker',
        description: 'Made an intuitive and easy to use interface for checking out internal marks for the IInd year Computer Science students in SRM University. This has been designed entirly on Node.JS and database infrastructure is based on MongoDB. Apart from this I have used Jade for the rendering the Ajax request to HTML.',
        GitHub : {
          is: true,
          url: 'https://github.com/poke19962008/Zoho-SmartAnswer'
        },
        link: {
          is: true,
          url: "http://sayandas.xyz/zoho"
        },
        img: {
          is: true,
          url: "./img/smart-answer.png",
          alt: "Smart Answer Interface"
        }
      },{
        title: "TalHat(on going)",
        description: "The objective of TalHat is providing a platform for all kinds of people with all kinds of different professions and passions to represent themselves in a social plus professional work so as not only to communicate, meet , and know more people of same or different group but to also get hired for what they actually love to do.  Worked as Back End Developer and Technical Head.",
        GitHub: {
          is: true,
          url: "https://github.com/poke19962008/TalHat",
        },
        link: {
          is: true,
          url: "http://talhat.com/",
        },
        img: {
          is: true,
          url: "./img/talhat.png",
          alt: "TalHat"
        }
      },{
        title: "SudoCrawler 2015",
        description: "SudoCrawler was  2 days online international cryptic contest. Rs1.5Lakhs was sponsored by IET and SRM University for the event. Event was nominated for Iconic Event of the Year-2015 from IET South Region. I was lead Web Developer, designed entire website on PHP and MySQL based servers.",
        GitHub: {
          is: true,
          url: "https://github.com/poke19962008/SudoCrawler2015",
        },
        link:  {
          is: true,
          url: "webarchsrm.sudocrawler.com"
        },
        img: {
          is: true,
          url: "./img/sudocrawler.png",
          alt: "Sudo Crawler Play Page"
        }
      }
    ]
  },

  {
    title: "Mini Projects",
    description: "Some of the apps developed during my pass times.",
    img: {
      src: "./img/miniprojects.png",
      alt: "Mini Projects",
    },
    content: [
      {
        title: "CC Rank Notifier",
        description: "Daemon process made on Python, which notifies the user if any one have solved any problem from the ongoing contest on CodeChef. Fetches ranklist every 15min and gives core Mac OS X notifications.",
        GitHub: {
          is: true,
          url: "https://github.com/poke19962008/CC-Rank-Notifier"
        },
        link: {
          is: false,
        },
        img: {
          is: true,
          url: "./img/CC.png"
        }
      },{
        title: "Proxy Finder",
        description: "Small Bash code that finds out hidden open proxy IP addresses at a contant port. This was made for the SRM hostel students to access internet when the primary proxy IP address is blocked.",
        GitHub: {
          is: true,
          url: "https://github.com/poke19962008/Proxy-Finder"
        },
        link:{
          is: false,
        },
        img: {
          is: false,
        }
      },{
        title: "Goal Notfier",
        description: "Python process which notifies you with current live score feed from goal.com. Notifies the user when any team goals with Mac OS X native push notification.",
        GitHub: {
          is: true,
          url: "https://github.com/poke19962008/MacGoalNotification"
        },
        link: {
          is: false,
        },
        img:  {
          is: true,
          url: "./img/goal.png"
        }
      },{
        title: "Pocket Cube Solver",
        description: "CS-1005 Mini Project made on C++ using STL libraries. Solves 2x2x2 rubiks cube using Breadth First Search of Graph Theory. Inspired from MIT 6.006 Lecture-13 by Prof. Erik Demaine.",
        GitHub: {
          is: true,
          url: "https://github.com/poke19962008/CS1005-Mini-Poject"
        },
        link: {
          is: false,
        },
        img: {
          is: false,
        }
      },{
        title: "iCamel",
        description: "iOS application for all SRMites which fetches data from evarsity and shows attendance details in fun and intuitive way to the student. Made on Xcode 7 with Swift 2.0. Deployed for iOS 9.0.",
        GitHub: {
          is: true,
          url: "https://github.com/poke19962008/iCamel"
        },
        link: {
          is: false,
        },
        img: {
          is: false,
        }
      },{
        title: "IDify",
        description: "Made an iOS app in HackIndia 2015 hackathon that can verify the user on the basis of PAN, Adhaar, Voter, Driving License. Verification takes place from the respective self made Python CGI based APIs.It helps people and officials verify people's identity just a click away. It helps people avoiding forgery.A common platform to verify various IDs which has'nt been unified before altogether. This is improved UI and hassle free application",
        GitHub: {
          is: true,
          url: "HackIndia-2015"
        },
        link: {
          is: false,
        },
        img: {
          is: false,
        }
      },
    ]
  },

  {
    title: "Research Works",
    description: "I am very new to this field but I am catching up fast.",
    img: {
      src: "./img/bulb.png",
      alt: "Research"
    },
    content: [
      {
        title: "French Accent Corrector",
        description: "Unaccented text is common in electronic media. Due to lack of conventions of typing on keyboard and improper encoding of accented text languages like French, Spanish, Vietnamese etc can not cope in the electronic world. This can correctly insert character to make the sentence grammatically correct. As French is statistically widely used language, hence we focused on it. Software can be trained with french grammar and exceptions to read and understand. Various methods can be used to make the software more accurate like exploiting correction used by the user. This will use python library which is commercially available. Further it can be implemented on open source editors like Atom, Sublime and Emacs.",
        GitHub: {
          is: true,
          url: "https://github.com/poke19962008/French-Accent-Corrector"
        },
        link: {
          is: false,
        },
        img: {
          is: false,
        }
      }
    ]
  }
];
