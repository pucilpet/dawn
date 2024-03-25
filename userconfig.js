const CONFIG = new Config({
  crypto: {
    coin: 'BTC',
    currency: 'USD',
    refreshIn: 10
  },
  overrideStorage: true, // override localStorage with fixed userconfig values
  temperature: {
    location: 'Kuopio',
    scale: 'C'
  },
  clock: {
    format: 'h:i p',
    iconColor: '#ff7b95'
  },
  search: {
    engines: {
      g: ['https://google.com/search?q=', 'Google'],
      i: ['https://ixquick.com/do/search?q=', 'Ixquick'],
      d: ['https://duckduckgo.com/html?q=', 'DuckDuckGo'],
      y: ['https://youtube.com/results?search_query=', 'Youtube'],
      w: ['https://en.wikipedia.org/w/index.php?search=', 'Wikipedia']
    }
  },
  keybindings: {
    "t": 'todo-list',
    "s": 'search-bar'
  },
  disabled: [],
  openLastVisitedTab: false,
  tabs: [
    {
      name: "Work",
      background_url: "src/img/banners/bg-1.gif",
      categories: [
        {
          name: "chat",
          links: [
            {
              name: "ClickConnector",
              url: "https://hersecret.clickconnector.io/",
              icon: "droplet-bolt",
              icon_color: "#a6da95",
            },
            {
              name: "crisp",
              url: "https://app.crisp.chat",
              icon: "droplet-bolt",
              icon_color: "#a6da95",
            },
            {
              name: "x",
              url: "https://twitter.com/hakukonevelhot",
              icon: "brand-x",
              icon_color: "#f5a97f",
            },
            {
              name: "tweet hunter",
              url: "https://app.tweethunter.io/",
              icon: "brand-linkedin",
              icon_color: "#f5a97f",
            },
            {
              name: "linkedin sales",
              url: "https://linkedin.com/sales/lists/people",
              icon: "brand-linkedin",
              icon_color: "#f5a97f",
            },
            {
              name: "kanbox",
              url: "https://app.kanbox.io/",
              icon: "brand-linkedin",
              icon_color: "#f5a97f",
            },
            {
              name: "before sunset",
              url: "https://app.beforesunset.ai/",
              icon: "brand-linkedin",
              icon_color: "#f5a97f",
            },
          ],
        },
        {
          name: "seo",
          links: [
            {
              name: "labrika",
              url: "https://labrika.com/",
              icon: "brand-gmail",
              icon_color: "#a6da95",
            },
            {
              name: "seo.hakukonevelhot",
              url: "https://seo.hakukonevelhot.fi/dashboard/",
              icon: "calendar-filled",
              icon_color: "#f5a97f",
            },
            {
              name: "ahrefs",
              url: "https://app.ahrefs.com/dashboard",
              icon: "clipboard-check",
              icon_color: "#ed8796",
            },
            {
              name: "smatLeads",
              url: "https://app.smatleads.com/",
              icon: "badge-filled",
              icon_color: "#ed8796",
            },
            {
              name: "vizologi",
              url: "https://app.vizologi.com/",
              icon: "eye-search",
              icon_color: "#a6da95",
            },
            {
              name: "zocket",
              url: "https://web.zocket.com/dashboard/products",
              icon: "eye-search",
              icon_color: "#a6da95",
            },
            {
              name: "leadrocks",
              url: "https://leadrocks.io/my",
              icon: "eye-search",
              icon_color: "#a6da95",
            },
            {
              name: "climbo",
              url: "https://app.climbo.com/",
              icon: "eye-search",
              icon_color: "#a6da95",
            },
            {
              name: "Maekersuite",
              url: "https://app.climbo.com/",
              icon: "eye-search",
              icon_color: "#a6da95",
            },
          ],
        },
      ],
    },
    {
      name: "dev",
      background_url: "src/img/banners/bg-2.gif",
      categories: [
        {
          name: "other tools",
          links: [
            {
              name: "boost.space",
              url: "https://app.boost.space/",
              icon: "badge-filled",
              icon_color: "#ed8796",
            },
            {
              name: "cal.com",
              url: "https://cal.hakukonevelhot.fi/bookings/upcoming",
              icon: "clipboard-check",
              icon_color: "#ed8796",
            },
            {
              name: "webstudio",
              url: "https://apps.webstudio.is/dashboard",
              icon: "clipboard-check",
              icon_color: "#ed8796",
            },
            {
              name: "enji",
              url: "https://app.enji.co/",
              icon: "clipboard-check",
              icon_color: "#ed8796",
            },
            {
              name: "epicpxls",
              url: "https://www.epicpxls.com/",
              icon: "clipboard-check",
              icon_color: "#ed8796",
            },
            {
              name: "missionx",
              url: "https://app.missionx.ai/home",
              icon: "clipboard-check",
              icon_color: "#ed8796",
            },
            {
              name: "vuala - invoices",
              url: "https://vualapp.com/dashboard",
              icon: "clipboard-check",
              icon_color: "#ed8796",
            },
          ],
        },
        {
          name: "video tools",
          links: [
            {
              name: "jupitrr",
              url: "https://jupitrr.com/create-slideshow",
              icon: "news",
              icon_color: "#f5a97f",
            },
            {
              name: "konvey",
              url: "https://dashboard.konvey.app/dashboard",
              icon: "badge-filled",
              icon_color: "#ed8796",
            },
            {
              name: "onetake",
              url: "https://app.onetake.ai/app/projects",
              icon: "badge-filled",
              icon_color: "#ed8796",
            },
            {
              name: "odio.ai",
              url: "https://odio.ai/tts/create",
              icon: "news",
              icon_color: "#f5a97f",
            },
            {
              name: "lerno - calls",
              url: "https://app.lerno.ai/",
              icon: "news",
              icon_color: "#f5a97f",
            },
          ],
        },
      ],
    },
    {
      name: 'boards',
      background_url: 'src/img/banners/bg-1.gif',
      categories: [{
        name: 'fun',
        links: [
          {
            url: 'https://4chan.org/wsg/',
            name: '/wsg/'
          },
          {
            name: '/out/',
            url: 'https://4chan.org/out',
            icon: 'leaf',
            icon_color: '#64876d'
          },
          {
            name: '/lit/',
            url: 'https://4chan.org/lit/',
            icon: 'book'
          },
          {
            name: '/v/',
            url: 'https://4chan.org/v/',
            icon: 'device-gamepad',
            icon_color: '#8b647b'
          },
          {
            name: '/p/',
            url: 'https://4chan.org/p/',
            icon: 'camera'
          }
        ]
      },
      {
        name: 'Comfy',
        links: [
          {
            name: '/lounge/',
            url: 'https://sushigirl.us/lounge/catalog.html'
          },
          {
            name: '/comfy/',
            url: 'https://anon.cafe/comfy/catalog.html'
          }
        ]
      },
      {
        name: 'Technology',
        links: [
          {
            name: '/g/',
            url: 'https://4chan.org/g/',
          },
          {
            name: '/Δ/',
            url: 'https://archive.arisuchan.jp/%CE%94/catalog.html'
          },
          {
            name: '/λ/',
            url: 'https://www.lainchan.org/%CE%BB/catalog.html'
          },
          {
            name: '/sec/',
            url: 'https://www.lainchan.org/sec/catalog.html'
          },
          {
            name: '/prog/',
            url: 'https://boards.420chan.org/prog/',
            icon: 'code'
          }
        ]
      }
      ]
    },
    {
      name: 'music',
      background_url: 'src/img/banners/bg-2.gif',
      categories: [
        {
          name: 'music services',
          links: [
            {
              url: 'https://soundcloud.com/',
              icon: 'brand-soundcloud',
              icon_color: '#c57750'
            },
            {
              url: 'https://youtu.be/',
              icon: 'brand-youtube',
              icon_color: '#996767'
            },
            {
              url: 'https://r-a-d.io/',
              icon: 'radio'
            },
          ]
        },
        {
          name: 'music boards',
          links: [
            {
              name: '/music/',
              url: 'https://lainchan.org/music/',
              icon: 'disc'
            },
            {
              name: '/mu/',
              url: 'https://boards.4channel.org/mu/',
            }
          ]
        }
      ]
    },
    {
      name: 'tech',
      background_url: 'src/img/banners/bg-3.gif',
      categories: [
        {
          name: 'subreddits',
          links: [
            {
              name: 'r/startpages/',
              url: 'https://www.reddit.com/r/startpages/'
            },
            {
              name: 'r/unixporn',
              url: 'https://www.reddit.com/r/unixporn/'
            },
            {
              name: 'r/mechkbds/',
              url: 'https://www.reddit.com/r/MechanicalKeyboards/',
              icon: 'keyboard',
              icon_color: '#a57685'
            },
            {
              name: 'r/programming',
              url: 'https://www.reddit.com/r/programming/'
            }
          ]
        },
        {
          name: 'blogs',
          links: [
            {
              name: 'fasterthanli',
              url: 'https://fasterthanli.me/articles',
              icon: 'anchor'
            },
            {
              name: 'dev.to',
              url: 'https://dev.to'
            },
            {
              name: 'mataroa.blog',
              url: 'https://collection.mataroa.blog',
            }
          ]
        },
        {
          name: 'misc',
          links: [
            {
              name: 'post office',
              url: 'http://afternoon.dynu.com/letterbox.html',
              icon: 'mailbox'
            },
            {
              name: 'rust docs',
              url: 'https://doc.rust-lang.org/book/',
              icon: 'notebook',
              icon_color: '#977a3a'
            }
          ]
        }
      ]
    }]
});
