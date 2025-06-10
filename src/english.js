const data = [
  {
    "id": 1,
    "title": "Which bacteria are you?",
    "questions": [
      {
        "id": 1,
        "question": "How do you behave during group projects?",
        "options": [
          {
            "text": "I spread calm vibes - I want everyone to feel comfortable 🌈"
          },
          {
            "text": "I stick to my guns and follow my own rules 😎"
          },
          {
            "text": "I catch details others miss and help improve things ✍️"
          },
          {
            "text": "I'm adaptable but know how to stand out when needed ✨"
          }
        ]
      },
      {
        "id": 2,
        "question": "What's your go-to dinner after a long day?",
        "options": [
          {
            "text": "Yogurt - I prefer light meals before bed! 🥣"
          },
          {
            "text": "A burger after a tough day hits the spot 🍔"
          },
          {
            "text": "I cook impressive meals from scratch 🍳"
          },
          {
            "text": "I'm great at improvising - whatever's in the fridge works 💁‍♀️"
          }
        ]
      },
      {
        "id": 3,
        "question": "How do you solve problems?",
        "options": [
          {
            "text": "I find compromises that work for everyone 🫶"
          },
          {
            "text": "I don't overthink it - I jump straight into action 🚀"
          },
          {
            "text": "I analyze everything until I find the perfect solution 💡"
          },
          {
            "text": "I adapt my approach based on how things develop 📍"
          }
        ]
      },
      {
        "id": 4,
        "question": "If you were a microbe, where would you want to live?",
        "options": [
          {
            "text": "In the gut - lots of action and energy 🧠"
          },
          {
            "text": "In soil - I love nature and freedom 🌱"
          },
          {
            "text": "Inside a cell - controlling things from within sounds perfect 🧬"
          },
          {
            "text": "On skin - where there are people and social interaction 💅"
          }
        ]
      },
      {
        "id": 5,
        "question": "What energizes you most?",
        "options": [
          {
            "text": "Balance and inner peace - that's when I'm at my best 🌿"
          },
          {
            "text": "Chaos and adrenaline - drama is my element 💥"
          },
          {
            "text": "Structure and knowledge - I need clarity and control 🧠"
          },
          {
            "text": "My environment and people - I adapt and make the most of situations 💁‍♀️"
          }
        ]
      }
    ],
    "results": [
      {
        "result": "🧘 Lactobacillus",
        "description": "You're the harmony ambassador. You maintain order, health, and good vibes - both physically and emotionally. People love having you around (especially after taking antibiotics).",
        "Where does it live?": "In the intestines, mouth, and fermented foods like kefir, sauerkraut, and yogurt.",
        "What does it do?": "Helps with digestion, strengthens the intestinal barrier, and supports immune function.",
        "Fun fact": "After a course of antibiotics, your body literally craves Lactobacillus - they're like therapeutic best friends.",
        "image": "lactobacillus.png"
      },
      {
        "result": "🔥 Clostridium difficile",
        "description": "You shine when others are down. You're not afraid of chaos - you actually thrive in it. But your power can be a double-edged sword, so use it wisely.",
        "Where does it live?": "In the large intestine of humans and animals.",
        "What does it do?": "Can cause diarrhea, fever, and colitis.",
        "Fun fact": "When other microorganisms get wiped out (like after antibiotics), this bacterium starts multiplying - it waits for the perfect moment to strike.",
        "image": "clostridium.png"
      },
      {
        "result": "🧠 Streptococcus thermophilus",
        "description": "You're the quiet MVP. When things heat up, you're the hero. Whether it's cheese-making or life situations, your work is crucial even when it goes unnoticed.",
        "Where does it live?": "In the intestines, milk, and fermented products.",
        "What does it do?": "Produces lactic acid that helps ferment milk and contributes to the taste and texture of dairy products.",
        "Fun fact": "Often teams up with Lactobacillus - they're the ultimate power duo.",
        "image": "streptococcus.jpg"
      },
      {
        "result": "🌍 E. coli",
        "description": "You're versatile, adaptable, and found everywhere. You can be both hero and villain - it all depends on the situation.",
        "Where does it live?": "In intestines, on skin, in soil, water... basically everywhere.",
        "What does it do?": "Most E. coli help digest food, produce vitamins, and work as probiotics, but some strains can cause infections.",
        "Fun fact": "This is one of the most studied bacteria - scientists use it for genetic experiments and synthetic biology research.",
        "image": "ecoli.png"
      }
    ]
  },
  {
    "id": 2,
    "title": "Which gene matches your vibe? ✨",
    "questions": [
      {
        "id": 1,
        "question": "How do you usually handle conflicts?",
        "options": [
          {
            "text": "I start conversations and look for fair solutions 🕊️"
          },
          {
            "text": "I react quickly - whatever happens, happens ⚡"
          },
          {
            "text": "I suggest a plan and stop the chaos before it starts ✂️"
          },
          {
            "text": "I observe first, then step in when necessary 🐍"
          }
        ]
      },
      {
        "id": 2,
        "question": "How do you react to unexpected changes?",
        "options": [
          {
            "text": "I stress a bit at first, but eventually adapt 🌫️"
          },
          {
            "text": "I love it when things get shaken up - that's when I come alive 💃"
          },
          {
            "text": "I don't wait for change - I create it myself 🔥"
          },
          {
            "text": "I adapt when it benefits me 💼"
          }
        ]
      },
      {
        "id": 3,
        "question": "In what environment do you thrive?",
        "options": [
          {
            "text": "In teams where everyone needs to work together 🤝"
          },
          {
            "text": "Alone, when no one's bothering me 🧘"
          },
          {
            "text": "Where I can make meaningful changes 💡"
          },
          {
            "text": "When I can help behind the scenes without drawing attention 🌿"
          }
        ]
      },
      {
        "id": 4,
        "question": "If you were an app, you'd be:",
        "options": [
          {
            "text": "Google Calendar - everything planned and organized 💻"
          },
          {
            "text": "TikTok - reacting with split-second timing 📱"
          },
          {
            "text": "Excel - structured planning with room for creativity 🧠"
          },
          {
            "text": "A task manager - working quietly but effectively 🔧"
          }
        ]
      },
      {
        "id": 5,
        "question": "What does success mean to you?",
        "options": [
          {
            "text": "When everyone around me is happy - then I am too 🌞"
          },
          {
            "text": "When I react quickly and come out unscathed 🚀"
          },
          {
            "text": "When I implement my ideas and leave a lasting impact 🌋"
          },
          {
            "text": "When no one noticed, but I already saved the day 😎"
          }
        ]
      }
    ],
    "results": [
      {
        "result": "TP53 - tumor suppressor and balance keeper",
        "description": "You're the problem-solving hero. When a cell starts acting suspicious, you hit the delete button - gently but without mercy.",
        "Function": "Acts as a security system in cells - regulates the cell cycle, detects DNA damage, and stops cell division when needed.",
        "Fun fact": "TP53 mutations are often found in various cancers, showing how important this gene is for cancer prevention and treatment."
      },
      {
        "result": "FOXP2 - language gene and communication ace",
        "description": "You're a genetic influencer. Your social media is full of news, emotions, and information that keeps people connected.",
        "Function": "Regulates other genes related to language development.",
        "Fun fact": "FOXP2 mutations are linked to specific speech disorders, often called developmental verbal dyspraxia."
      },
      {
        "result": "MYC - change initiator",
        "description": "Your life motto: 'If not me, then who?' You spark cellular motivation to grow, divide, and get things done.",
        "Function": "Main regulator of cellular processes, influencing cell growth, differentiation, and metabolism.",
        "Fun fact": "MYC changes can disrupt normal cell cycle progression, potentially leading to cancer."
      },
      {
        "result": "SIRT1 - silent stability guardian",
        "description": "You're that person who 'somehow fixes everything' without anyone noticing. You work quietly, but when you're gone - everything falls apart.",
        "Function": "Plays a crucial role in cell regulation, metabolism, and aging processes.",
        "Fun fact": "SIRT1 is activated by resveratrol (found in grapes and red wine!)."
      }
    ]
  },
  {
    "id": 3,
    "title": "What enzyme are you?",
    "questions": [
      {
        "id": 1,
        "question": "Describe your ideal workday:",
        "options": [
          {
            "text": "Quick start, maximum energy all day 💥"
          },
          {
            "text": "Depends on my mood - sometimes I'm speedy, sometimes slow 🌦️"
          },
          {
            "text": "Slow and steady, but I finish everything 🐢"
          },
          {
            "text": "Only when everything is perfectly coordinated ⚖️"
          }
        ]
      },
      {
        "id": 2,
        "question": "What can't you live without?",
        "options": [
          {
            "text": "H2O - the elixir of life 💧"
          },
          {
            "text": "Close connections - I'm a social creature 🤗"
          },
          {
            "text": "Freedom - when everything flows naturally 🎶"
          },
          {
            "text": "Precision - every step matters 🧪"
          }
        ]
      },
      {
        "id": 3,
        "question": "At parties, how do you behave?",
        "options": [
          {
            "text": "First one dancing, getting everyone hyped 🔥"
          },
          {
            "text": "I adapt to any vibe and connect with anyone 💃"
          },
          {
            "text": "I observe quietly, but shine when it's my moment 🎤"
          },
          {
            "text": "I organize everything behind the scenes for the perfect party 💼"
          }
        ]
      },
      {
        "id": 4,
        "question": "What gets you most excited?",
        "options": [
          {
            "text": "Physical movement and adrenaline rushes 💪"
          },
          {
            "text": "People and shared goals 💞"
          },
          {
            "text": "Order and efficiency 📊"
          },
          {
            "text": "Perfect conditions - otherwise I won't budge 💻"
          }
        ]
      },
      {
        "id": 5,
        "question": "What's your natural habitat?",
        "options": [
          {
            "text": "The gym - pure energy 🏋️"
          },
          {
            "text": "The kitchen - where ingredients become magic 👩‍🍳"
          },
          {
            "text": "Around people - maintaining connections and spreading good vibes 📡"
          },
          {
            "text": "In workshops - where every step has its place 🔧"
          }
        ]
      }
    ],
    "results": [
      {
        "result": "🔴 Amylase - King/Queen of quick starts 👑",
        "description": "You're the person who wakes up before the alarm and has half the day's work done by 9 AM. First to spring into action - your superpower? Converting energy (especially from carbs 🍞⚡)!",
        "Function": "Breaks down starch into sugars so your body can use them for energy.",
        "Where it works": "Starts in your mouth (salivary amylase), continues in the small intestine (pancreatic amylase)."
      },
      {
        "result": "🔵 Lactase - gentle transformer 🧸",
        "description": "You're the embodiment of care and patience. When someone's struggling, you're there to help. The perfect enzyme for people who need extra support - like those with lactose intolerance 💙.",
        "Function": "Breaks down lactose (milk sugar) into glucose and galactose so your body can absorb it.",
        "Where it works": "In the small intestine - when this enzyme is lacking, you get lactose intolerance."
      },
      {
        "result": "🟢 ADH / Alcohol dehydrogenase - chaos tamer",
        "description": "Panic mode? Need to restore calm? You can turn inner chaos into structure and bring back balance. Neutralizing toxins and restoring order is your daily routine. 🤩",
        "Function": "Converts ethanol (alcohol) into acetaldehyde - the first step in alcohol detoxification.",
        "Where it works": "Primarily in liver cells (with smaller amounts elsewhere)."
      },
      {
        "result": "🟣 Polymerase - perfectionist CEO",
        "description": "You're obsessed with getting every detail right. In your world, there are no mistakes - everything must be copied exactly. You ensure information gets transmitted perfectly, or we don't move forward at all. 📚",
        "Function": "Synthesizes new DNA or RNA chains using a template - essential for replication and transcription.",
        "Where it works": "In cell nuclei, mitochondria, and bacterial cytoplasm."
      }
    ]
  },
  {
    "id": 4,
    "title": "What virus would you be?",
    "questions": [
      {
        "id": 1,
        "question": "How do you show up at parties?",
        "options": [
          {
            "text": "I start in the corner, but later I totally let loose! 🪩"
          },
          {
            "text": "Like a total bombshell - everyone sees and feels my presence 💣"
          },
          {
            "text": "I observe, analyze, strategize - it's like playing chess ♟️"
          },
          {
            "text": "I love intense conversations - no one leaves unchanged 🔥"
          }
        ]
      },
      {
        "id": 2,
        "question": "How do you express your opinions?",
        "options": [
          {
            "text": "Through action - I let my behavior do the talking 🎬"
          },
          {
            "text": "Loud and clear - everyone knows where I stand 🎤"
          },
          {
            "text": "I smile and drop subtle hints 😉"
          },
          {
            "text": "I spread information through others - like rumors, but with facts 🕵️"
          }
        ]
      },
      {
        "id": 3,
        "question": "Your life motto:",
        "options": [
          {
            "text": "\"Patience is the key to everything\" 🔑"
          },
          {
            "text": "\"I came, I saw, I conquered\" 🏆"
          },
          {
            "text": "\"Quietly, but effectively\" 🥷"
          },
          {
            "text": "\"If I don't make change happen, who will?\" 🔥"
          }
        ]
      },
      {
        "id": 4,
        "question": "What do you do when drama unfolds?",
        "options": [
          {
            "text": "I stay quiet but screenshot everything for later 🔍"
          },
          {
            "text": "I don't interfere at first, but when I get involved - everything changes 🎲"
          },
          {
            "text": "I quietly gather intel and use it to my advantage 🤫"
          },
          {
            "text": "I add more chaos - if it's drama, let's make it an opera 🎭"
          }
        ]
      },
      {
        "id": 5,
        "question": "How would you like to be remembered?",
        "options": [
          {
            "text": "As a silent force that worked quietly but effectively"
          },
          {
            "text": "As an energy bomb that couldn't be ignored"
          },
          {
            "text": "As a mystery people tried to figure out for ages"
          },
          {
            "text": "As a revolutionary force that created real change"
          }
        ]
      }
    ],
    "results": [
      {
        "result": "Herpes virus - Silent legend",
        "description": "You're like that highly anticipated album drop from your favorite artist: you disappear for a while, then BOOM - return unexpectedly and remind everyone who you are. Only people who don't know your power would ignore you.",
        "Living environment": "In nerve cells - where you lurk quietly until you decide to make your presence known.",
        "Fun fact": "Can remain dormant for a lifetime. Becomes active due to stress, UV exposure, or weakened immunity.",
        "image": "herpes.png"
      },
      {
        "result": "Flu virus - Seasonal hit",
        "description": "You're that pop song that comes back every winter. Bright, powerful, sometimes annoying - but your impact is undeniable.",
        "Living environment": "In the respiratory tract - you attack swiftly and spread easily.",
        "Fun fact": "Changes surface proteins constantly - that's why we need a new flu vaccine every year.",
        "image": "flu.png"
      },
      {
        "result": "Bacteriophage - Precision specialist",
        "description": "You don't waste time on theatrics. You're not here for the show - you're here for the mission. And your target? Only bacteria.",
        "Living environment": "Inside bacteria - both in nature and in laboratory settings.",
        "Fun fact": "Can be used as an alternative to antibiotics (hello, phage therapy!).",
        "image": "bakteriofagas.png"
      },
      {
        "result": "COVID-19 (SARS-CoV-2) - Game changer",
        "description": "You're not just any virus - you're a historical moment. You changed work, education, social life, and even people's psychology. Your vibe: main character energy.",
        "Living environment": "In the respiratory tract, but affects the whole body - from lungs to blood vessels and brain.",
        "Fun fact": "Attaches to cells through a special 'key' - the ACE2 receptor.",
        "image": "covid.png"
      }
    ]
  },
  {
    "id": 5,
    "title": "What model organism are you?",
    "questions": [
      {
        "id": 1,
        "question": "Your ideal work environment?",
        "options": [
          {
            "text": "Clean and quiet - ✨pristine aesthetic✨"
          },
          {
            "text": "Cozy chaos - a bit dim, lots of comfort 🐀"
          },
          {
            "text": "Anywhere - even in a helicopter if needed 🚁"
          },
          {
            "text": "Organized with checklists, colored markers, and labels everywhere 🧷"
          }
        ]
      },
      {
        "id": 2,
        "question": "What do you do on your day off?",
        "options": [
          {
            "text": "I read, explore, and learn new things"
          },
          {
            "text": "I chill out and observe my surroundings"
          },
          {
            "text": "I create and build - I'm always in action mode"
          },
          {
            "text": "I organize - I function best when everything has its place"
          }
        ]
      },
      {
        "id": 3,
        "question": "How do you feel about new innovations?",
        "options": [
          {
            "text": "Very open - I want to try everything"
          },
          {
            "text": "Cautious at first, but I warm up to them gradually"
          },
          {
            "text": "I love change - routines bore me"
          },
          {
            "text": "New ideas are great, but only if everything is clear and logical"
          }
        ]
      },
      {
        "id": 4,
        "question": "What would you do if you accidentally mutated?",
        "options": [
          {
            "text": "I'd use my new superpower to save the world 💥"
          },
          {
            "text": "I'd be scared at first, but adapt quickly"
          },
          {
            "text": "I'd turn my new traits into the hottest trend"
          },
          {
            "text": "I'd analyze the changes and write a research paper about it 📖"
          }
        ]
      },
      {
        "id": 5,
        "question": "If you were a superhero, what would you do?",
        "options": [
          {
            "text": "I'd write genetic code like poetry 💾"
          },
          {
            "text": "I'd create personalized medicines to cure everything 💊"
          },
          {
            "text": "I'd engineer organisms that respond to people's moods 😎"
          },
          {
            "text": "I'd clean the oceans - one bacterium at a time 🌊"
          }
        ]
      }
    ],
    "results": [
      {
        "result": "🦠 E. coli",
        "description": "You're simple, but nothing would work without you! Your versatility is your superpower.",
        "Where does it live?": "In the intestines (usually friendly, but some strains can cause trouble).",
        "Fun fact": "This is one of the most studied bacteria in the world - a true science celebrity!"
      },
      {
        "result": "🐭 Mouse (Mus musculus)",
        "description": "Curious, cautious, but incredibly adaptable. You'd feel right at home in a research lab.",
        "Where does it live?": "Both in the wild and in the scientific world's VIP circle.",
        "Fun fact": "Without mice, genetics would still be in the stone age - they've helped unlock thousands of biological secrets!"
      },
      {
        "result": "🍞 Yeast (Saccharomyces cerevisiae)",
        "description": "You're small but mighty. You adapt quickly, thrive everywhere, and help others grow too.",
        "Where does it live?": "In bread, beer, and even serving as a model in human cell research.",
        "Fun fact": "The first eukaryote to have its entire genome sequenced. Give it up for the pioneer! 👏"
      },
      {
        "result": "🌱 Arabidopsis thaliana",
        "description": "From the outside - a humble little plant. From the inside - a legend of genetic analysis.",
        "Where does it live?": "Wherever plants can grow - both in labs and in meadows.",
        "Fun fact": "This is the go-to plant model - without it we wouldn't understand plant DNA, growth, or hormones."
      }
    ]
  },
  {
    "id": 6,
    "title": "What biotechnology solution are you?",
    "questions": [
      {
        "id": 1,
        "question": "How do you react when things don't go according to plan?",
        "options": [
          {
            "text": "I calmly reassess and move to Plan B"
          },
          {
            "text": "My first instinct is to change everything to fit my needs"
          },
          {
            "text": "I quickly gather information and analyze the situation"
          },
          {
            "text": "I stay calm - I'm focused on the long-term perspective"
          }
        ]
      },
      {
        "id": 2,
        "question": "What's your role in group projects?",
        "options": [
          {
            "text": "I research and plan everything logically"
          },
          {
            "text": "I throw out ideas that get everyone motivated"
          },
          {
            "text": "I coordinate the process - I know who does what and when"
          },
          {
            "text": "I make sure everyone feels heard and contributes"
          }
        ]
      },
      {
        "id": 3,
        "question": "What's your social media vibe?",
        "options": [
          {
            "text": "Memes and fun facts"
          },
          {
            "text": "Hot takes about world issues"
          },
          {
            "text": "Aesthetic posts with deep, meaningful captions"
          },
          {
            "text": "Sustainability tips, DIY hacks, and small-steps motivation"
          }
        ]
      },
      {
        "id": 4,
        "question": "If you were a scientific tool, you'd be:",
        "options": [
          {
            "text": "A pipette - all about precision and patience"
          },
          {
            "text": "Gene scissors - small tool, huge impact"
          },
          {
            "text": "A sensor - I catch even the tiniest details"
          },
          {
            "text": "A fermenter - patient but powerful"
          }
        ]
      },
      {
        "id": 5,
        "question": "What's your main mission in life?",
        "options": [
          {
            "text": "Help find solutions quickly and efficiently"
          },
          {
            "text": "Change the world"
          },
          {
            "text": "Record important changes and help people act in time"
          },
          {
            "text": "Create lasting change that grows over time"
          }
        ]
      }
    ],
    "results": [
      {
        "result": "🔁 PCR - The OG veteran",
        "description": "You're the one who gets everything started. Reliable, efficient, and never lets anyone down. When something needs to be replicated quickly - you're first in line 💥",
        "Fun fact": "Created back in 1983, but still ruling the lab. Without PCR, we wouldn't even have COVID tests!"
      },
      {
        "result": "✂️ CRISPR/Cas9 - Gene editor with attitude",
        "description": "Iconic, precise, and fast. Your tool is transformation, and your style is no-nonsense efficiency.",
        "Fun fact": "Your origins lie in bacterial immune systems - but you've conquered the entire genetics world."
      },
      {
        "result": "🔬 Biosensor - The emotion radar",
        "description": "You sense everything - from the tiniest pollution to bacterial signals. Your sensitivity is your superpower, and your ability to warn others is your heroic moment.",
        "Fun fact": "Biosensors are already helping diagnose diseases and monitor environmental conditions in real-time."
      },
      {
        "result": "🍷 Fermentation - The timeless icon",
        "description": "You're not in a rush, but when you show up - flavor, transformation, and change are guaranteed. You connect traditions with cutting-edge technology.",
        "Fun fact": "Without fermentation, we wouldn't have bread, wine, or probiotics. Total respect 👑"
      }
    ]
  }
]

export default data