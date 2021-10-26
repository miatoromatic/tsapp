const masterylist = [
  {
    lookup: "arcanamancy",
    name: "Arcanamancy",
    color: "#50cbe3",
    image: "https://terrarp.com/db/mastery/w-arcanamancy.png",
    save: "will",
    expertise: "knowledge",
    actions: ["Normal Attack", "Recover", "Rush", "Steady Attack", "Taunt", "Counter", "Protect", "Hinder", "Ultra Protect", "Ultra Hinder"],
    role: "defense"
  },
  {
    lookup: "astramancy",
    name: "Astramancy",
    color: "#ae43c3",
    image: "https://terrarp.com/db/mastery/w-astramancy.png",
    save: "will",
    expertise: "presence",
    actions: ["Normal Attack", "Recover", "Rush", "Steady Attack", "Taunt", "Counter", "Protect", "Hinder", "Ultra Protect", "Ultra Hinder"],
    role: "defense"
  },
  {
    lookup: "beast-arts",
    name: "Beast Arts",
    color: "#db7233",
    image: "https://terrarp.com/db/mastery/w-beast.png",
    save: "reflex",
    expertise: "knack",
    actions: ["Normal Attack", "Recover", "Rush", "Steady Attack", "Taunt", "Counter", "Protect", "Hinder", "Ultra Protect", "Ultra Hinder"],
    role: "defense"
  },
  {
    lookup: "geomancy",
    name: "Geomancy",
    color: "#a76a36",
    image: "https://terrarp.com/db/mastery/w-geomancy.png",
    save: "fortitude",
    expertise: "fitness",
    actions: ["Normal Attack", "Recover", "Rush", "Steady Attack", "Taunt", "Counter", "Protect", "Hinder", "Ultra Protect", "Ultra Hinder"],
    role: "defense"
  },
  {
    lookup: "guard-arts",
    name: "Guard Arts",
    color: "#f2bb36",
    image: "https://terrarp.com/db/mastery/w-guard.png",
    save: "fortitude",
    expertise: "awareness",
    actions: ["Normal Attack", "Recover", "Rush", "Steady Attack", "Taunt", "Counter", "Protect", "Hinder", "Ultra Protect", "Ultra Hinder"],
    role: "defense"
  },
  {
    lookup: "hemomancy",
    name: "Hemomancy",
    color: "#c32222",
    image: "https://terrarp.com/db/mastery/w-hemomancy.png",
    save: "fortitude",
    expertise: "fitness",
    actions: ["Normal Attack", "Recover", "Rush", "Steady Attack", "Taunt", "Counter", "Protect", "Hinder", "Ultra Protect", "Ultra Hinder"],
    role: "defense"
  },
  {
    lookup: "hydromancy",
    name: "Hydromancy",
    color: "#66b8ea",
    image: "https://terrarp.com/db/mastery/w-hydromancy.png",
    save: "will",
    expertise: "knack",
    actions: ["Normal Attack", "Recover", "Rush", "Steady Attack", "Taunt", "Counter", "Protect", "Hinder", "Ultra Protect", "Ultra Hinder"],
    role: "defense"
  },
  {
    lookup: "illusion-magic",
    name: "Illusion Magic",
    color: "#ea5694",
    image: "https://terrarp.com/db/mastery/w-illusion.png",
    save: "will",
    expertise: "presence",
    actions: ["Normal Attack", "Recover", "Rush", "Steady Attack", "Taunt", "Counter", "Protect", "Hinder", "Ultra Protect", "Ultra Hinder"],
    role: "defense"
  },
  {
    lookup: "aeromancy",
    name: "Aeromancy",
    color: "#48d1c3",
    image: "https://terrarp.com/db/mastery/w-aeromancy.png",
    save: "reflex",
    expertise: "knack",
    actions: ["Normal Attack", "Recover", "Rush", "Heavy Attack", "Sneak Attack", "Hinder", "Ultra Hinder", "Reckless Attack", "Critical Attack", "Burst Attack"],
    role: "offense"
  },
  {
    lookup: "crush-weapons",
    name: "Crush Weapons",
    color: "#ce5e32",
    image: "https://terrarp.com/db/mastery/w-crush.png",
    save: "fortitude",
    expertise: "fitness",
    actions: ["Normal Attack", "Recover", "Rush", "Heavy Attack", "Sneak Attack", "Hinder", "Ultra Hinder", "Reckless Attack", "Critical Attack", "Burst Attack"],
    role: "offense"
  },
  {
    lookup: "dark-magic",
    name: "Dark Magic",
    color: "#883cca",
    image: "https://terrarp.com/db/mastery/w-dark.png",
    save: "will",
    expertise: "knowledge",
    actions: ["Normal Attack", "Recover", "Rush", "Heavy Attack", "Sneak Attack", "Hinder", "Ultra Hinder", "Reckless Attack", "Critical Attack", "Burst Attack"],
    role: "offense"
  },
  {
    lookup: "martial-arts",
    name: "Martial Arts",
    color: "#c9c9c9",
    image: "https://terrarp.com/db/mastery/w-martial.png",
    save: "fortitude",
    expertise: "fitness",
    actions: ["Normal Attack", "Recover", "Rush", "Heavy Attack", "Sneak Attack", "Hinder", "Ultra Hinder", "Reckless Attack", "Critical Attack", "Burst Attack"],
    role: "offense"
  },
  {
    lookup: "pierce-weapons",
    name: "Pierce Weapons",
    color: "#46bcc8",
    image: "https://terrarp.com/db/mastery/w-pierce.png",
    save: "reflex",
    expertise: "knack",
    actions: ["Normal Attack", "Recover", "Rush", "Heavy Attack", "Sneak Attack", "Hinder", "Ultra Hinder", "Reckless Attack", "Critical Attack", "Burst Attack"],
    role: "offense"
  },
  {
    lookup: "pyromancy",
    name: "Pyromancy",
    color: "#cb3739",
    image: "https://terrarp.com/db/mastery/w-pyromancy.png",
    save: "will",
    expertise: "presence",
    actions: ["Normal Attack", "Recover", "Rush", "Heavy Attack", "Sneak Attack", "Hinder", "Ultra Hinder", "Reckless Attack", "Critical Attack", "Burst Attack"],
    role: "offense"
  },
  {
    lookup: "ranged-weapons",
    name: "Ranged Weapons",
    color: "#77b933",
    image: "https://terrarp.com/db/mastery/w-ranged.png",
    save: "reflex",
    expertise: "awareness",
    actions: ["Normal Attack", "Recover", "Rush", "Heavy Attack", "Sneak Attack", "Hinder", "Ultra Hinder", "Reckless Attack", "Critical Attack", "Burst Attack"],
    role: "offense"
  },
  {
    lookup: "shadow-arts",
    name: "Shadow Arts",
    color: "#383838",
    image: "https://terrarp.com/db/mastery/w-shadow.png",
    save: "reflex",
    expertise: "knack",
    actions: ["Normal Attack", "Recover", "Rush", "Heavy Attack", "Sneak Attack", "Hinder", "Ultra Hinder", "Reckless Attack", "Critical Attack", "Burst Attack"],
    role: "offense"
  },
  {
    lookup: "slash-weapons",
    name: "Slash Weapons",
    color: "#4263cb",
    image: "https://terrarp.com/db/mastery/w-slash.png",
    save: "fortitude",
    expertise: "fitness",
    actions: ["Normal Attack", "Recover", "Rush", "Heavy Attack", "Sneak Attack", "Hinder", "Ultra Hinder", "Reckless Attack", "Critical Attack", "Burst Attack"],
    role: "offense"
  },
  {
    lookup: "alchemy",
    name: "Alchemy",
    color: "#53b159",
    image: "https://terrarp.com/db/mastery/w-alchemy.png",
    save: "fortitude",
    expertise: "knowledge",
    actions: ["Normal Attack", "Recover", "Rush", "Revive", "Heal", "Buff", "Power Heal", "Power Buff", "Inspire", "Haste"],
    role: "support"
  },
  {
    lookup: "animancy",
    name: "Animancy",
    color: "#6c319d",
    image: "https://terrarp.com/db/mastery/w-animancy.png",
    save: "will",
    expertise: "knowledge",
    actions: ["Normal Attack", "Recover", "Rush", "Revive", "Heal", "Buff", "Power Heal", "Power Buff", "Inspire", "Haste"],
    role: "support"
  },
  {
    lookup: "chronomancy",
    name: "Chronomancy",
    color: "#ec4a97",
    image: "https://terrarp.com/db/mastery/w-chronomancy.png",
    save: "reflex",
    expertise: "awareness",
    actions: ["Normal Attack", "Recover", "Rush", "Revive", "Heal", "Buff", "Power Heal", "Power Buff", "Inspire", "Haste"],
    role: "support"
  },
  {
    lookup: "divine-magic",
    name: "Divine Magic",
    color: "#edb82a",
    image: "https://terrarp.com/db/mastery/w-divine.png",
    save: "will",
    expertise: "presence",
    actions: ["Normal Attack", "Recover", "Rush", "Revive", "Heal", "Buff", "Power Heal", "Power Buff", "Inspire", "Haste"],
    role: "support"
  },
  {
    lookup: "harmonic-magic",
    name: "Harmonic Magic",
    color: "#36a5e8",
    image: "https://terrarp.com/db/mastery/w-harmonic.png",
    save: "will",
    expertise: "presence",
    actions: ["Normal Attack", "Recover", "Rush", "Revive", "Heal", "Buff", "Power Heal", "Power Buff", "Inspire", "Haste"],
    role: "support"
  },
  {
    lookup: "magitech",
    name: "Magitech",
    color: "#5c6779",
    image: "https://terrarp.com/db/mastery/w-magitech.png",
    save: "reflex",
    expertise: "knowledge",
    actions: ["Normal Attack", "Recover", "Rush", "Revive", "Heal", "Buff", "Power Heal", "Power Buff", "Inspire", "Haste"],
    role: "support"
  },
  {
    lookup: "nature-magic",
    name: "Nature Magic",
    color: "#91c023",
    image: "https://terrarp.com/db/mastery/w-nature.png",
    save: "will",
    expertise: "awareness",
    actions: ["Normal Attack", "Recover", "Rush", "Revive", "Heal", "Buff", "Power Heal", "Power Buff", "Inspire", "Haste"],
    role: "support"
  },
  {
    lookup: "spirit-magic",
    name: "Spirit Magic",
    color: "#50c8cb",
    image: "https://terrarp.com/db/mastery/w-spirit.png",
    save: "will",
    expertise: "awareness",
    actions: ["Normal Attack", "Recover", "Rush", "Revive", "Heal", "Buff", "Power Heal", "Power Buff", "Inspire", "Haste"],
    role: "support"
  },
  {
    lookup: "aura",
    name: "Aura",
    color: "#e0b439",
    image: "https://terrarp.com/db/mastery/w-aura.png",
    save: "-",
    expertise: "-",
    actions: ["Defense", "Alter Hinder", "Protect Aura", "Counter", "Protect", "Hinder", "Taunt", "Ultra Protect", "Ultra Hinder", "Inspire"],
    role: "alter"
  },
  {
    lookup: "battle-spirits",
    name: "Battle Spirits",
    color: "#b72c2c",
    image: "https://terrarp.com/db/mastery/w-battle-spirits.png",
    save: "-",
    expertise: "-",
    actions: ["Damage", "Speed", "Avenger", "Steady Attack", "Heavy Attack", "Hinder", "Ultra Hinder", "Burst Attack", "Critical Attack", "Reckless Attack"],
    role: "alter"
  },
  {
    lookup: "corrupt",
    name: "Corrupt",
    color: "#813090",
    image: "https://terrarp.com/db/mastery/w-corrupt.png",
    save: "-",
    expertise: "-",
    actions: ["Damage", "Support", "Exceed", "Steady Attack", "Heavy Attack", "Hinder", "Ultra Hinder", "Critical Attack", "Burst Attack", "Reckless Attack"],
    role: "alter"
  },
  {
    lookup: "dynamism",
    name: "Dynamism",
    color: "#87ad3d",
    image: "https://terrarp.com/db/mastery/w-dynamism.png",
    save: "-",
    expertise: "-",
    actions: ["Speed", "Carry", "Momentum", "Sneak Attack", "Hinder", "Ultra Hinder", "Burst Attack", "Critical Attack", "Reckless Attack", "Haste"],
    role: "alter"
  },
  {
    lookup: "evoke",
    name: "Evoke",
    color: "#50c8cb",
    image: "https://terrarp.com/db/mastery/w-evoke.png",
    save: "-",
    expertise: "-",
    actions: ["Damage", "Extension", "Instability", "Steady Attack", "Heavy Attack", "Hinder", "Ultra Hinder", "Burst Attack", "Critical Attack", "Reckless Attack"],
    role: "alter"
  },
  {
    lookup: "hyper-sense",
    name: "Hyper Sense",
    color: "#40883a",
    image: "https://terrarp.com/db/mastery/w-hyper-sense.png",
    save: "-",
    expertise: "-",
    actions: ["Damage", "Defense", "Extension", "Taunt", "Hinder", "Protect", "Counter", "Ultra Hinder", "Ultra Protect", "Critical Attack"],
    role: "alter"
  },
  {
    lookup: "mend",
    name: "Mend",
    color: "#2f8cc1",
    image: "https://terrarp.com/db/mastery/w-mend.png",
    save: "-",
    expertise: "-",
    actions: ["Support", "Extension", "Reposition", "Revive", "Heal", "Buff", "Power Heal", "Power Buff", "Inspire", "Haste"],
    role: "alter"
  },
  {
    lookup: "metamorph",
    name: "Metamorph",
    color: "#cc4e71",
    image: "https://terrarp.com/db/mastery/w-metamorph.png",
    save: "-",
    expertise: "-",
    actions: ["Damage", "Defense", "Alter Hinder", "Steady Attack", "Sneak Attack", "Heavy Attack", "Hinder", "Ultra Hinder", "Critical Attack", "Reckless Attack"],
    role: "alter"
  },
  {
    lookup: "summon",
    name: "Summon",
    color: "#4a4da5",
    image: "https://terrarp.com/db/mastery/w-summon.png",
    save: "-",
    expertise: "-",
    actions: ["Support", "Coordinate", "Extension", "Heal", "Buff", "Revive", "Power Heal", "Power Buff", "Inspire", "Haste"],
    role: "alter"
  },
  {
    lookup: "weapon-arts",
    name: "Weapon Arts",
    color: "#cb5050",
    image: "https://terrarp.com/db/mastery/w-weapon-arts.png",
    save: "-",
    expertise: "-",
    actions: ["Damage", "Alter Hinder", "Exceed", "Heavy Attack", "Hinder", "Counter", "Ultra Hinder", "Burst Attack", "Critical Attack", "Reckless Attack"],
    role: "alter"
  },
]
