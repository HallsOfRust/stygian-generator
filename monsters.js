var stygian_monsters = function() {
  return {
    animateBooks: `
<h3>Animate Books</h3>
<p>Knowledge is power. Power corrupts. Put enough knowledge into
something and it will inevitably start to overreach itself, behaving in ways it was never meant to. That’s what’s happened to the Animate Book. A text with sufficient information density warps itself, achieves a sort of intelligence—a sort of life. It doesn’t realise it’s not alive.</p>
<p>Animate Books roam the Library like animals, hiding under bookshelves and making nests in the rafters. When the Librarians catch them, they’re disenchanted and returned to their proper place, inanimate on the bookshelves.</p>
`,
    animateSpells: `
<h3>Animate Spells</h3>
<p>A spell that has broken free of its constraining spellbook and
now roams the Library as an independent entity. A data-cloud of disembodied text hanging in the air, paragraphs intersecting with one another at odd angles. Letters cast strange shadows from the emergent, occult shapes they form.</p>
<p>The spell’s personality, nature and goals depends on which spell it actually is, as do its powers. It wants to see itself cast and to see the effects of its magic repeated—an animated Fireball spell just likes to see things burn, while an animated Charm Person spell likes people to be friends with each other.</p>
`,
    archivistLiches: `
<h3>Archivist-Liches</h3>
<p>A once-mortal scholar whose need to see their work finished has seen them seamlessly transition into undeath. Hundreds of years old, consumed by their research. Little more than a dusty skeleton in a robe by now. An impressive intelligence. Highly educated, well spoken, polite and genteel. Obsessive. Has been exploring the Library for decades.</p>
<p>Roll D100 twice on the Types of Books Table (147) to determine the current nature of the Lich’s research.</p>
<ul><li>Conversation with the Lich about the Library and its layout grants +3 Progress, or +5 if the topic of the PCs’ research matches theirs.</li></ul>
<p>Although the Lich has a body that can be destroyed, it cannot be killed permanently. Somewhere in the Library is its phylactery—an item to which the Lich’s soul is bound. If destroyed, the Lich’s body will slowly re-form at its phylactery over the course of a day—and it will come back angry. Only after destroying the phylactery can the Lich be killed permanently.</p>
<ul><li>To determine what the Lich’s phylactery is, roll on the Extraordinary Book Table (134). The next time that exact book is encountered by the PCs, it’s the Lich’s phylactery.</li></ul>
`,
    bandersnatches: `
<h3>Bandersnatches</h3>
<p>A strange monster, escaped into the Library from fairy realms.  Avian in form, like a heron. Long legs, and a serpentine neck ending in its head. Instead of wings, it possesses two spindly arms that end in wide, human-like hands with splayed fingers.</p>
<p>The Bandersnatch lurks. It has an uncanny ability to avoid drawing attention to itself until its hands have closed around whatever it wishes to steal. This might be an object, a piece of equipment, or a person.</p>
<p>As a fairy creature, the Bandersnatch is as mad as a box of frogs. It’s a sort of kleptomaniac, collecting things with no seeming pattern or purpose. If prevented from taking the object it desires, it becomes enraged.</p>
<p>Roll every so often on the following table.</p>
<h3>D12 What the Bandersnatch wishes to steal</h3>
<ol>
  <li>Food.</li>
  <li>Shiny things.</li>
  <li>Beautiful people.</li>
  <li>Eyes.</li>
  <li>Stolen things.</li>
  <li>String and rope.</li>
  <li>Tools.</li>
  <li>Weapons.</li>
  <li>Clothing.</li>
  <li>Skin.</li>
  <li>Tongues.</li>
  <li>Maps.</li>
</ol>
`,
    blackOozes: `
<h3>Black Oozes</h3>
<p>Like the green slime found infesting less genteel dungeons. Black Ooze is a simple life form that grows in unattended nooks and crannies. It feeds on mental energy.</p>
<p>If it touches you, it can digest your brainwaves, causing it to grow rapidly as it absorbs and incorporates your mind. It oozes like an amoeba. It creeps under floorboards and behind wallpaper.  It’s hungry.</p>
`,
    conceptualWells: `
<h3>Conceptual Wells</h3>
<p>An intellectual absence, cosmic censorship. A space that cannot be perceived or conceptualized. Like a psychological black hole.</p>
<p>I t cannot be perceived directly. Describe it through negation: “There isn’t something horrible in the room,” or “Nothing has rolled a 6 for its Initiative,” or “The thing that is not in front of you attacks,” or “Nothing is definitely responsible for your comrade’s death.” The players might catch on eventually, it’s just a matter of how badly it will have mutilated their PCs by then.</p>
<p>The PCs can target it using the same language: “I’m going to shoot nothing,” or “I’m not fleeing from anything.” They can get details about it by asking negative questions, such as “Where isn’t there anything?” or “What does nothing here look like?”</p>
<p>If it matters, the conceptual well doesn’t look like a helpless child of around four years old. It isn’t young and innocent, and it isn’t curious about its surroundings or playful. It isn’t basically helpless as soon as the PCs actually attack it, and it doesn’t die pitifully. It also might not be violent towards the PCs. It doesn’t fundamentally fail to comprehend them, and doesn’t try to take them apart to see how they work.</p>
<p>It will get confusing. Good. This is an accurate simulation of what it’s like encountering something you can’t perceive and which directly assaults your ability to comprehend the external world.</p>
`,
    crawlingThings: `
<h3>Crawling Things</h3>
<p>Improbable chimeric organisms that should not be biologically viable, and yet somehow live — twitching, shuddering, crawling. Driven by glitching muscle memory and scrambled genetic instincts. A broken democracy of mismatched anatomies. Tragically incomplete.</p>
<p>They want to be a whole organism. They do this by incorporating parts from those they encounter, torn off and jammed into the Crawling Thing’s amalgamated flesh.</p>
`,
    dustElementals: `
<h3>Dust Elementals</h3>
<p>Little elemental incarnations, conglomerates of dust, grit, dirt, and fluff. Like somebody scattered detritus on the ground in the rough shape of a human. It lurks under bookshelves, drifts on imperceptible drafts, and creeps forward.</p>
<p>The quasi-elemental nature of dust is one of things broken down, crumbling, desiccated. It is not particularly compatible with life, and the attentions of such an elemental are likely extremely unpleasant.</p>
`,
    educatedRodents: `
<h3>Educated Rodents</h3>
<p>Mice that have achieved human-like self awareness simply by absorbing the residual knowledge of the Library. They know things they’ve read, but have little to no direct experience of the outside world. They are somewhat credulous, but formidably cunning. They enjoy cheese, wine, interesting conversation, and elegant music. They dislike cats, ghosts, and other scary things.</p>
<p>I f angered, they attack with sophisticated tactics, gleaned from books on chess and famous battles. They outflank, pin enemies in place, cut off retreats and hold dominant positions.</p>
<p>In any brood of educated rodents, each will have studied different fields of knowledge. Go down the list in order for what each Rodent can do, starting with the first (if five Rodents are encountered, the first five roles are present):</p>
<ol>
  <li>THE FIRST MOUSE HAS STUDIED THE ARCANE ARTS. It can cast Detect Magic and Dispel Magic each once per day.</li>
  <li>THE SECOND HAS STUDIED ENGINEERING. 50% chance to open or seal any lock, fix or disable any mechanical item, etc. Takes only one round to do this.</li>
  <li>THE THIRD HAS STUDIED MILITARY HISTORY. It has Bite (+3, D8).</li>
  <li>THE FOURTH HAS STUDIED MEDICINE. It can spend its full round in combat to heal D3 HP an ally has lost.</li>
  <li>THE FIFTH HAS STUDIED THEOLOGY AND BECOME DEVOUT. Its attacks count as Holy and Magical and do double damage to Undead or Unholy things.</li>
  <li>THE SIXTH STUDIED ORATORY. It can cast Charm Person once per day.</li>
  <li>THE SEVENTH HAS STUDIED PHYSICS. It can cast Levitate once per day.</li>
  <li>THE EIGHTH HAS STUDIED ZOOLOGY. It can cast Charm Animal and Speak With Animals each once per day.</li>
  <li>THE NINTH HAS STUDIED THANATOLOGY. It can cast Detect Undead and Speak With Dead each once per day.</li>
  <li>THE TENTH HAS STUDIED FINE CUISINE. It is well nourished and healthy—it has 6 HP.</li>
  <li>THE ELEVENTH HAS STUDIED POLITICS. When it attacks a surprised or unaware enemy, it gets +4 to hit and does double damage.</li>
  <li>THE TWELFTH HAS STUDIED PSYCHOLOGY. 5-in-6 chance to spot any lie told to it (all other mice believe any lie they hear).</li>
</ol>
<p>Further mice have studied some interesting but ultimately useless field in the humanities.</p>
`,
    escapedFictions: `
<h3>Escaped Fictions</h3>
<p>Once, these beings were mere characters in a story book, but now they’ve clawed their way out into the fractally-dense information cloud of the Library. They’re not truly real, but it’s hard to tell—they’re very convincing.</p>
<p>They subconsciously crave reality. To warp the real world around their narrative so that they are part of the everyday order of things. Reality obliges. Where they pass, things alter to fit the fiction they have emerged from. You’re playing by their rules, now.</p>
<h3>D12 Roll to determine who you meet</h3>
<ol>
  <li>Don quixote, who tilted at windmills.</li>
  <li>Frankenstein’s monster, who was built from corpses.</li>
  <li>Grendel, a monstrous inhabitant of the wilderness, who hates noise and celebration, one arm torn clean off.</li>
  <li>Doctor Faustus, an occultist who regrets selling his soul.</li>
  <li>Count Dracula, the monstrous vampire.</li>
  <li>Lady Macbeth, ambitious and murderous, and of much-degraded sanity.</li>
  <li>The ghost of christmas future, who delivers dire warnings to the mean-spirited.</li>
  <li>Bluebeard, a dashingly handsome murderer of his many wives.</li>
  <li>Sir Lancelot, brilliant knight and enthusiastic adulterer.</li>
  <li>Robin Hood, a charitable bandit and excellent shot.</li>
  <li>Puck, the mischievous fairy sprite.</li>
  <li>Jack the giant-slayer, young and reckless, but cunning.</li>
</ol>
<p>Reality shifts to accommodate the character, and behaves like the setting they’re from, not this reality. Actions intended to fit the character’s setting and narrative (such as deceiving Don Quixote into behaving chivalrously) automatically succeed. In practice, this means that you should alter the tone and feel of your game while an escaped fiction is around. Some examples include:</p>
<ul>
  <li>Blood doesn’t get spilled around characters written for children. Tone down any descriptions of gore and violence.</li>
  <li>Conversely, for characters from more bloody and brutal tales, ratchet the violence all the way up.</li>
  <li>Horror characters call for appropriately Gothic lighting and effects.</li>
  <li>Technology reverts to that of the time period of the character’s setting. Items from later in history (such as guns and clockwork) simply cease to function.</li>
  <li>In extreme examples, the PCs may be able to hear a non-diegetic soundtrack (such as trumpet fanfares for Lancelot, or low, tense strings for Lady Macbeth).</li>
</ul>
`,
    eyeSentinels: `
<h3>Eye Sentinels</h3>
<p>A single, huge, floating eyeball, levitated by psychic might alone. Sometimes, a Jarred Brain develops mighty psionic powers and escapes its jar. Sometimes, such beings are recaptured by the Librarians. This is what the Librarians do to them.</p>
<p>The Librarians' use Eye Sentinels to monitor less frequently visited areas to ensure everything is running according to the Librarians’ schedule.</p>
`,
    floatingBrains: `
<h3>Floating Brains</h3>
<p>Remember those brains in jars? Sometimes, the isolation of a Jarred Brain has an odd effect on the mind of the interred brain. Introspection and contemplation cut off from all sensory stimulus or ability to act result in profound shifts in outlook and strange ways of thinking.</p>
<p>At its most dramatic extreme, such a paradigm shift in the imprisoned brain’s thinking can unlock the mind’s hidden psychoactive potential. Flexing newly-discovered psionic muscles, some of these brains break free of their glassy prison and escape.</p>
<p>Such brains only interact with the world through their psychic powers, and thus form a beacon to others of their kind. Soon they gather together into a sort of psionic choir, a loose flock of Floating Brains bobbing along on invisible psychokinetic currents, trailing their useless spinal columns behind them.</p>
<p>Needless to say, such beings are not too fond of the Librarians that imprisoned them. They’re not too fond of any Neurovores in the library either, since Floating Brains form those creatures’ main diet.</p>
`,
    furiousBooks: `
<h3>Furious Books</h3>
<p>An animated book that, as a result of the horrible and inflammatory knowledge within, is really just unreasonably pissed off at the world.</p>
<p>Flaps about using its covers like wings, and then hurls itself at anything that attracts its fury.</p>
`,
    giantBookworms: `
<h3>Giant Bookworms</h3>
<p>This creature appears as a huge, fleshy, pallid insect larvae. A fat, segmented body, like that of a caterpillar or maggot, ends with a head studded with tiny black eyes, with six waving tendrils around its mouth. The creature is about the size of a human torso in length and thickness, the tendrils extending another foot or so.</p>
<p>The bookworms can chew a tunnel through wood or paper, but this is not their preferred food—they favour hunting as ambush predators. Many bookshelves and floors hide—beneath a seemingly normal surface—a network of bookworm tunnels through which the creature crawls in search of prey, bursting from its burrows to pick off vulnerable visitors to the Library.</p>
`,
    guardianShades: `
<h3>Guardian Shades</h3>
<p>A human soul, compressed and refined into a weapon. Appears as a patch of darkness hanging in the air, vaguely reminiscent of a human silhouette, like a miasma or shadow.</p>
<p>It does not remember its former life. It exists to serve, to hunt and destroy those who threaten the Library. It’s single-minded and has little ability to conceptualize ideas outside of its role as a guard. Conscious beings can tell that it is unnatural. It’s presence makes their skin crawl, and their stomach churn.</p>
`,
    hungryBooks: `
<h3>Hungry Books</h3>
<p>Books exist to hold information. Of course with the density of information present, sometimes this goes wrong. The books want more. They scour the data from every other book on their shelf, absorbing it into themselves, and head off in search of more.</p>
<p>A hungry book is only clumsily animated by the dim intelligence stirring within it. It uses its pages to crawl along the ground, sniffing out data to absorb.</p>
`,
    infernalMerchants: `
<h3>Infernal Merchants</h3>
<p>A visitor from Hell. The Library contains souls, trapped and catalogued. Considering that souls are the main currency of Hell, this results in a certain degree of financial interest from the Devils.</p>
<p>The Infernal Merchant is here to trade souls. It might buy them or trade them for some service, or else be willing to sell souls from his stock if offered a good price. It will seem helpful—it isn’t. Its goals are to enrich himself, to entice mortals into damning themselves, and to cause mortals to suffer. Everything it offers is a trap, its contracts carefully worded to screw the mortal signee. Small print is written on an atomic scale.</p> <p>Its prices are—when you think about them—very reasonable. The Merchant can grant each mortal a single wish. It requires payment to do so. Perhaps their soul upon death. Perhaps the murder and delivery of somebody else’s soul. Perhaps some other, seemingly innocuous task. Unless you’re incredibly precise with your wording, the wish will be perverted and made evil. You’ll get precisely what you asked for, but you’ll wish you hadn’t. It is evil. It is smarter than the PCs.</p>
<p>Roll for its Appearance and Special Ability.</p>
<h3>D12 Appearance</h3>
<ol>
  <li>angelic.</li>
  <li>goat-human hybrid.</li>
  <li>bat-human hybrid.</li>
  <li>huge serpent.</li>
  <li>corpse-like.</li>
  <li>perfectly human-looking, other than tiny horns.</li>
  <li>perfectly human-looking, with evil goatee and moustache.</li>
  <li>serpent-human hybrid.</li>
  <li>empty robe that oozes smoke.</li>
  <li>mass of chains and locks in a humanoid form.</li>
  <li>innocent-looking human child with a forked tongue.</li>
  <li>savage-looking humanoid with six arms.</li>
</ol>
<h3>D12 Special Ability</h3>
<ol>
  <li>can turn any object or being to solid gold by touching it.</li>
  <li>can transform into a cloud of flies.</li>
  <li>can transform into a harmless-looking animal.</li>
  <li>can mimic the appearance of the viewer’s loved ones.</li>
  <li>touch drains memory (d12 damage to intelligence).</li>
  <li>can teleport short distances in a puff of smoke.</li>
  <li>can sculpt flesh like soft wax (2d6 damage if used to mutilate).</li>
  <li>can locate the soul of a specified individual unerringly.</li>
  <li>immune to fire.</li>
  <li>casts charm person when it shakes your hand.</li>
  <li>casts suggestion whenever the victim answers a direct question from the devil.</li>
  <li>can resurrect the dead. No need for an intact body. The dead come back… altered.</li>
</ol>
`,
    inkElementals: `
<h3>Ink Elementals</h3>
<p>An oozing, creeping mass of ink. By turns: black, deep blue, or iridescent. Formless and fluid. As big as a horse. It seeps and drips. It leaves a sticky black residue behind it.</p>
<p>The semi-elemental nature of Ink is to spread, stain, and flow.  Whilst its own form is transient and ever-shifting, the marks it leaves behind are indelible. It is the constantly-shifting force that leaves a permanent record.</p>
`,
    inkblots: `
<h3>Inkblots</h3>
<p>The residue created by Ink Elementals. Slithering black stains that follow behind the elemental, leaving a trail of black smudges. The size of a handprint.</p>
`,
    lanternBearers: `
<h3>Lantern Bearers</h3>
<p>A little hunched figure, no larger than a child, in a faded red robe that conceals its form entirely. It carries a lamp hooked on the end of a long metal pole that sways and bobs as the lantern-bearer shuffles through the Library on its endless patrol.</p>
<p>This is the fate of those thieves who try to steal from the Library, their bodies withered and their minds warped into loyal servants of the Librarians, tasked with rooting out others of their kind.</p>
`,
    librarians: `
<h3>Librarians</h3>
<p>These are the closest the library has to native inhabitants. They were mortal academics once, who found their way into the Library and—like a breed of fish that finds its way into a deep underground cave and slowly becomes troglodytic—remained there indefinitely. Over time, the Library has warped them into the beings they now are.</p>
<p>The Librarians are diminutive, standing no more than five feet tall at most, and possess a slender, almost emaciated frame.  Under their voluminous robes, wide eyes peer out from pallid faces. For the most part, these beings are furtive when visitors are around, and can make themselves scarce with surprising speed and quietness when they wish to.</p>
<p>The Librarians are divided into five Orders—the Red, Yellow, Black, Grey and White Orders—who each attend to different duties in the library and teach different magical arts with which to pursue this work. The Orders are broadly cooperative, acting in synchrony to keep the library running and the Sheol Computer working, much like a colony of social insects. They seem to possess no leadership among their own kind—each Order is broadly equal in rank—and instead seem to serve the Sheol Computer and Calculation Engines directly.</p>
<h3>The Red Order</h3>
<p>Those who Maintain The Library’s Infrastructure.</p>
<h3>The Yellow Order</h3>
<p>Those who Maintain The Books.</p>
<h3>The Black Order</h3>
<p>Those who Maintain the Portals.</p>
<h3>The Grey Order</h3>
<p>Those who Shepherd the Restless Dead.</p>
<h3>The White Order</h3>
<p>Those who Tend to the Calculations.</p>
`,
    lostSouls: `
<h3>Lost Souls</h3>
<p>The soul of one who died within the Library, not yet drawn into the Library’s machinery and distilled into a Phantom (124).</p>
<p>A Lost Soul knows what happens to the souls of the dead here.  They seek to avoid being captured by the Grey Librarians and to preserve their own independence and sanity. Talking with one can reveal a great deal about the inner workings of the Library and the nature of the Engines and Calculations within.</p>
<p>Roll to determine who the lost soul once was, and twice to determine the powers it has.</p>
<h3>D12 Who the Lost Soul once was</h3>
<ol>
  <li>Mortal librarian.</li>
  <li>Lost child.</li>
  <li>Nun.</li>
  <li>Mad noblewoman.</li>
  <li>Professor of mathematics.</li>
  <li>Master burglar.</li>
  <li>Famed assessin.</li>
  <li>Plague-stricken doctor.</li>
  <li>Emotionally tormented artist.</li>
  <li>Census-taker.</li>
  <li>Historian.</li>
  <li>Genteel necromancer.</li>
</ol>
<h3>D12 Powers the Lost Soul has</h3>
<ol>
  <li>move objects about like a poltergeist. +3 to hit for d6 damage if it throws them at people.</li>
  <li>create illusions out of mist.</li>
  <li>cause wet, inky writing to appear on things.</li>
  <li>alter the memories of those present in minor ways: save vs magic to resist; a success also alerts the victim.</li>
  <li>cause something to catch fire for a few moments— save vs breath to avoid fire, or else it does d6 damage.</li>
  <li>cause ice to appear on things, potentially freezing them in place.</li>
  <li>extinguish lights and erase text.</li>
  <li>lock doors securely.</li>
  <li>speak in a loud voice.</li>
  <li>make vermin appear: masses of flies, cockroaches, or woodlice that attack for d6 damage.</li>
  <li>create gusts of wind.</li>
  <li>make objects collapse or fall apart. +3 to hit for d6 damage if used to attack.</li>
</ol>
`,
    neurovores: `
<h3>Neurovores</h3>
<p>Half-man, half-octopus, all evil. Neurovores feast on the data electrically encoded in the brains of mortals. They possess frightening psionic powers. A repository of knowledge like the Library is a veritable buffet for them, if they can subdue its guards.</p>
<p>N eedless to say, the Librarians hate Neurovores for the way they consume and destroy knowledge. If you’re an enemy of the Librarians, the Neurovores will be unwaveringly helpful and support you to the best of their power. They need all the allies they can get in here.</p>
`,
    obsidianMarmosets: `
<h3>Obsidian Marmosets</h3>
<p>Like little statues of monkeys made of interlocking shards of jagged black volcanic glass. Appear as if they were made by a master artist who merely teased out the monkey-shape nascent in the stone. Not artificial constructs—silicaceous life.</p>
<p>It’s not clear how they got to the Library, but they live here now.  They form shy troops among the tall stacks of the shelves. They don’t need to feed, instead basking in the heat and electric glow of the Library’s machinery. Alternatingly retiring and territorial.</p>
`,
    ogreSpiders: `
<h3>Ogre Spiders</h3>
<p>Huge spiders the size of dogs that dwell in the ceilings and vents of the Library. They hunt in the dark, creeping above their prey before dropping their webs like a net.</p>
<p>An Ogre Spider’s abdomen is long and thin, resembling that of a praying mantis more than the normal, bulbous appearance of typical spiders. Meanwhile, their faces feature huge black eyes and thick maxillae that resemble a human skull.</p>
`,
    origamiGolems: `
<h3>Origami Golems</h3>
<p>A construct made of scrap paper, glued into a rough humanoid form, folding at the joints. Flat, angular, ragged and misshapen, it shambles and limps on asymmetric limbs.</p>
<p>The golem is built to serve the Librarians when they need actual muscle, either in the manual labour of maintaining the library or to deal with intruders. It obeys silently.  Lacking an identity of its own, its a temporary thing that serves for a time before being taken apart for materials.</p>
`,
    paperBees: `
<h3>Paper Bees</h3>
<p>Bees the size of a human hand that inhabit the infrequently visited corners of the Library. They feed on ink and grime rather than nectar, and distill it into Black Honey.</p>
<p>When Paper Bees are encountered, they’ve probably got a hive not too far away. If the players decide to track where the Bees go, then after Going Deeper D4 more times, they will find a Paper Beehive (51).</p>
`,
    patrollingApparitions: `
<h3>Patrolling Apparitions</h3>
<p>A spiritual monstrosity, dozens of souls stripped down to their barest essential nature and fused into an amalgamated weapon.  Like the spiritual equivalent of weaponizing nuclear waste.</p>
<p>It’s barely more than a presence. A shimmer in the air, a mirage.  Out of the corner of your eye, an impression of humanoid silhouettes, screaming faces, grasping hands. The smell of dust and rusty water. It should not be. Every conscious being knows that what has been done is degenerate, instinctively finds the presence horrifying. They loathe and fear it.</p>
<p>The Librarians use these beings to track down thieves and spies. They don’t seem to mind their presence at all.</p>
`,
    phantoms: `
<h3>Phantoms</h3>
<p>Phantoms are the spiritual remainders of a dead mortal, stripped down to their most basic form. Personality and thought eroded, Phantoms are little more than spiritual automata laden with the collected data of some mortal’s lifetime. Suffice to say, such beings are ripe for exploitation by a skilled necromancer. Thus, they have become invaluable to the infrastructure of the Library, which stores them in glass tubes and uses them to power all manner of arcane machines.</p>
`,
    researchers: `
<h3>Researchers</h3>
<p>Academics who have, for whatever reason, travelled to the Library in search of lost or forbidden knowledge. Cautious, erudite and experienced, they are aware of some of the hazards they face in search of information.</p>
<p>Roll D100 twice on the Types of Books Table (147) for what they’re researching.</p>
<p>Roll on the following table</p>
<h3>D8 Where they came from</h3>
<ol>
  <li>University.</li>
  <li>Noble's private research.</li>
  <li>Government bureaucracy.</li>
  <li>Monastery.</li>
  <li>Intelligence agency.</li>
  <li>Heroic adventurers.</li>
  <li>Esoteric order.</li>
  <li>Nunnery.</li>
</ol>
<p>If the topic of their research is related to the information sought by the PCs, conversing with the researchers about their findings so far adds D4 to the PC’s Progress (16).</p>
`,
    rustMoths: `
<h3>Rust Moths</h3>
<p>Related to a wide variety of similar insectile creatures (most notably the cockroach-like Rust Monsters), these creatures feed by corroding metal into an oxidised powder that they can digest.</p>
<p>Rust Moths are the size of a human hand, with orange-brown bodies covered in flaky metallic scales and wings like corroded metal foil. Most noticeable are the antennae that sprout from their heads, which are their main form of attack.</p>
`,
    skeletonCrew: `
<h3>Skeleton Crew</h3>
<p>Animated skeletons, tasked with the basic maintenance and cleaning of the Library. They wear overalls, and carry mops and brooms. They make their way through the Library slowly, washing, polishing, scrubbing and dusting as they go.</p>
<p>They are intelligent, and self-aware, but single-mindedly devoted to their task. If you engage with them while they work, they will happily talk with you, and prove to be well-educated and philosophical. Many of their conversations among themselves take an existential bent. It’s not clear how—without lungs or larynxes—they are able to talk at all, but this doesn’t bother them.</p>
<p>A conversation with the Skeletons, if relevant to the information the players want, will give +1 Progress.</p>
`,
    skullWardens: `
<h3>Skull Wardens</h3>
<p>A large skull with a single eye socket, perhaps taken from a cyclops, perhaps from some beast—an elephant or deformed whale.  Bleached white, perfectly preserved. Hanging in the air as if from invisible threads.</p>
<p>Intelligent, pompous, impressed only by its own cleverness.  Uses big words, belittles the intellect of those in discussion with it, loudly proclaims its own genius in conversation or battle. Despite its arrogance, it’s a mighty foe that projects beams of necrotic power from the cavities and crevices in its skull.</p>
`,
    toothWardens: `
<h3>Tooth-Wardens</h3>
<p>Little floating teeth, each perfectly preserved. They hang in the air in a roughly mouth-shaped pattern. They talk in unison, the ‘mouth’ they create changing shape to match their words.</p>
<p>Their intelligence is somewhere between a group of children and a flock of birds. They chatter endlessly, think everything is exciting.</p>
<p>If a Skull-Warden is present, then the Tooth-Wardens fawn over it like children over a favourite grandparent. Everything the Skull-Warden does is wise and interesting and brilliant.</p>
`,
    visitors: `
<h3>Visitors</h3>
<p>These are harmless mortals who have wandered into the Library and are now exploring. They are wholly unprepared for the strange and terrible things they will encounter within.</p>
<h3>D8 Roll for who the visitors are</h3>
<ol>
  <li>University students.</li>
  <li>Schoolchildren and one teacher.</li>
  <li>A family on an outing.</li>
  <li>Lost government archivists.</li>
  <li>Aspiring adventurers.</li>
  <li>Researchers into esotheric spaces.</li>
  <li>An occultist and acolytes.</li>
  <li>Very lost tourists.</li>
</ol>
`,
  };
}();
