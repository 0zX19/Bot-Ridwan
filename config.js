module.exports = {
  OWNER_IDS: ["337663518952390656", "1125031170422345738", "795708124442918913", "153029315565453312"], // Bot owner ID's
  SUPPORT_SERVER: "https://discord.gg/nimenation", // Your bot support server
  PREFIX_COMMANDS: {
    ENABLED: true, // Enable/Disable prefix commands
    DEFAULT_PREFIX: "nime!", // Default prefix for the bot
  },
  INTERACTIONS: {
    SLASH: false, // Should the interactions be enabled
    CONTEXT: false, // Should contexts be enabled
    GLOBAL: false, // Should the interactions be registered globally
    TEST_GUILD_ID: "", // Guild ID where the interactions should be registered. [** Test you commands here first **]
  },
  EMBED_COLORS: {
    BOT_EMBED: "#ffe100",
    TRANSPARENT: "#ffe100", //#36393F
    SUCCESS: "#ffe100",
    ERROR: "#ffe100",
    WARNING: "#ffe100",
  },
  CACHE_SIZE: {
    GUILDS: 100,
    USERS: 10000,
    MEMBERS: 10000,
  },
  MESSAGES: {
    API_ERROR: "Unexpected Backend Error! Try again later or contact support server",
  },

  // PLUGINS

  AUTOMOD: {
    ENABLED: true,
    LOG_EMBED: "#ffe100",
    DM_EMBED: "#ffe100",
  },

  DASHBOARD: {
    enabled: false, // enable or disable dashboard
    baseURL: "http://localhost:8080", // base url
    failureURL: "http://localhost:8080", // failure redirect url
    port: "8080", // port to run the bot on
  },

  ECONOMY: {
    ENABLED: false,
    CURRENCY: "₪",
    DAILY_COINS: 100, // coins to be received by daily command
    MIN_BEG_AMOUNT: 100, // minimum coins to be received when beg command is used
    MAX_BEG_AMOUNT: 2500, // maximum coins to be received when beg command is used
  },

  MUSIC: {
    ENABLED: false,
    IDLE_TIME: 60, // Time in seconds before the bot disconnects from an idle voice channel
    MAX_SEARCH_RESULTS: 5,
    DEFAULT_SOURCE: "SC", // YT or YTM or SC
    // Add any number of lavalink nodes here
    // Refer to https://github.com/freyacodes/Lavalink to host your own lavalink server
    LAVALINK_NODES: [
      {
        host: "lava.link",
        port: 80,
        password: "youshallnotpass",
        id: "Premier Crafty",
        secure: false,
      },
    ],
  },

  GIVEAWAYS: {
    ENABLED: false,
    REACTION: "🎁",
    START_EMBED: "#ff8d73",
    END_EMBED: "#ff8d73",
  },

  IMAGE: {
    ENABLED: false,
    BASE_API: "https:\/\/a.nel.cloudflare.com\/report\/v3?s=JI3CJBNd1MCfGjXjM5YGgZSatUbzgFQca3j2HfsF4PAo6IfTqoewCjXVQjS0AiwvzthVoL%2FIOGbFqoX60DO%2BCKjyWMKhIVJ5VggeqW45D6%2Bz4zvTvE%2BrL9%2BRVUfvOb41BA%3D%3D",
  },

  INVITE: {
    ENABLED: true,
  },

  MODERATION: {
    ENABLED: true,
    EMBED_COLORS: {
      TIMEOUT: "#ffe100",
      UNTIMEOUT: "#ffe100",
      KICK: "#ffe100",
      SOFTBAN: "#ffe100",
      BAN: "#ffe100",
      UNBAN: "#ffe100",
      VMUTE: "#ffe100",
      VUNMUTE: "#ffe100",
      DEAFEN: "#ffe100",
      UNDEAFEN: "#ffe100",
      DISCONNECT: "#ffe100",
      MOVE: "#ffe100",
    },
  },

  PRESENCE: {
    ENABLED: true, // Whether or not the bot should update its status
    STATUS: "online", // The bot's status [online, idle, dnd, invisible]
    TYPE: "COMPETING", // Status type for the bot [PLAYING | LISTENING | WATCHING | COMPETING]
    MESSAGE: "{members} Members | Nimetiyen", // Your bot status message
  },

  STATS: {
    ENABLED: false,
    XP_COOLDOWN: 5, // Cooldown in seconds between messages
    DEFAULT_LVL_UP_MSG: "{member:tag}, You just advanced to **Level {level}**",
  },

  SUGGESTIONS: {
    ENABLED: false, // Should the suggestion system be enabled
    EMOJI: {
      UP_VOTE: "⬆️",
      DOWN_VOTE: "⬇️",
    },
    DEFAULT_EMBED: "#ff8d73",
    APPROVED_EMBED: "#ff8d73",
    DENIED_EMBED: "#ff8d73",
  },

  TICKET: {
    ENABLED: false,
    CREATE_EMBED: "#ff8d73",
    CLOSE_EMBED: "#ff8d73",
  },
};
