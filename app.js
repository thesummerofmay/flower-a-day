'use strict';

const flowers = [
  {
    name: 'Lavender',
    latin: 'Lavandula angustifolia',
    family: 'Lamiaceae · Mint family',
    wikipedia: 'Lavandula angustifolia',
    description: 'One of the world\'s most beloved aromatic herbs, lavender enchants with its silvery-green foliage and slender spikes of violet-blue blossoms. Cultivated for more than 2,500 years, it has become synonymous with Provençal landscapes and the gentle art of herbal medicine.',
    habitat: 'Native to the western Mediterranean — particularly southern France, Spain, and the foothills of the Alps. Thrives on dry, rocky hillsides and open scrubland in well-drained alkaline soils under full sun. Widely naturalized in temperate regions worldwide.',
    medical: 'Clinically recognized for reducing mild-to-moderate anxiety (lavender oil capsules, brand Silexan, are EU-approved). Promotes restful sleep and reduces cortisol levels. The essential oil has antimicrobial properties and soothes minor burns, insect bites, and tension headaches when applied topically.',
    uses: 'A pillar of Provençal cooking — featured in herbes de Provence, lavender honey, shortbread, and lemonade. One of the foundational notes in fine perfumery since ancient Rome. Dried sachets perfume linen drawers and deter clothes moths.',
    facts: 'The name comes from the Latin lavare (to wash) — Romans scented public baths with lavender. Bees are so attracted to lavender that a single hectare can support two beehives. France\'s Valensole plateau turns a breathtaking purple each July.'
  },
  {
    name: 'German Chamomile',
    latin: 'Matricaria chamomilla',
    family: 'Asteraceae · Daisy family',
    wikipedia: 'Matricaria chamomilla',
    description: 'Instantly recognizable by its cheerful white ray petals surrounding a hollow golden dome, chamomile carries a delicate apple fragrance that has comforted and healed for millennia. Its Greek name khamaimelon translates simply as "earth apple".',
    habitat: 'Originally native to southern and eastern Europe and western Asia, chamomile has naturalized across temperate zones worldwide. It thrives in disturbed soils, roadsides, and field margins, often volunteering as a welcome weed.',
    medical: 'Among the most scientifically studied medicinal herbs. Clinical trials show chamomile extract reduces generalized anxiety disorder symptoms. Eases digestive cramping and aids sleep. The EMA has approved it as a traditional herbal medicine.',
    uses: 'Chamomile tea is the world\'s most widely consumed herbal infusion — over one million cups drunk globally every day. Used in cosmetics and shampoos to brighten blonde hair, and as a flavoring in some liqueurs.',
    facts: 'Ancient Egyptians dedicated chamomile to their sun god Ra and used it to treat malaria. Romans scattered it on pathways to release fragrance underfoot. A single chamomile plant can produce over 5,000 flowers in a season.'
  },
  {
    name: 'Damask Rose',
    latin: 'Rosa damascena',
    family: 'Rosaceae · Rose family',
    wikipedia: 'Rosa damascena',
    description: 'The Damask Rose is the queen of the floral world — a sprawling shrub adorned with clusters of intensely fragrant double blooms in shades of pink and blush. For centuries it has been the most prized rose for perfumery, its scent impossible to replicate synthetically with full fidelity.',
    habitat: 'Believed to have originated in ancient Persia, the Damask Rose was introduced to Europe via Damascus during the Crusades. Cultivated primarily in Bulgaria\'s Rose Valley, Turkey, Iran, and Morocco — in fertile valleys with cool nights and warm days.',
    medical: 'Rose hip fruit is extraordinarily high in Vitamin C — up to 60 times more than citrus — and is used to treat and prevent scurvy. Modern research confirms rose petal extracts have antioxidant and anti-inflammatory properties. Rose water is used as an eyewash and skin toner.',
    uses: 'Rose attar (essential oil) is among the most expensive perfumery ingredients — 3–5 tonnes of petals produce just one kilogram of oil. Rose water is indispensable in Middle Eastern, South Asian, and Persian sweets, teas, and cooking.',
    facts: 'Bulgaria\'s Kazanlak Valley produces approximately 85% of the world\'s rose oil and holds an annual Rose Festival each June. A single drop of Damask Rose absolute can perfume 50 kilograms of product.'
  },
  {
    name: 'Sunflower',
    latin: 'Helianthus annuus',
    family: 'Asteraceae · Daisy family',
    wikipedia: 'Helianthus annuus',
    description: 'The sunflower is an icon of exuberance — a bold, upright annual that can grow taller than most people, its enormous golden flower heads once tracking the sun across the sky in youth. A symbol of admiration, loyalty, and the warmth of summer.',
    habitat: 'Native to North America, where Indigenous peoples cultivated it for food for over 3,000 years before European contact. Sunflowers thrive in open, sunny sites in well-drained fertile soils across temperate and warm regions of every continent.',
    medical: 'Sunflower seeds are nutritional powerhouses, rich in Vitamin E, selenium, magnesium, and linoleic acid. Sunflower oil is widely used in cooking and beneficial for cardiovascular health. The leaves have traditional use as a diuretic and anti-fever preparation.',
    uses: 'Seeds are eaten raw, roasted, or pressed into one of the world\'s most consumed cooking oils. In Ukraine, Moldova, and Argentina, sunflower is a major agricultural crop covering millions of hectares. The whole seed head provides food for birds.',
    facts: 'A sunflower "flower" is composed of up to 2,000 tiny individual florets arranged in a precise Fibonacci spiral. Young sunflowers genuinely track the sun (heliotropism) but stop when mature. The tallest recorded sunflower grew 9.17 metres (30 feet) in Germany in 2014.'
  },
  {
    name: 'Purple Coneflower',
    latin: 'Echinacea purpurea',
    family: 'Asteraceae · Daisy family',
    wikipedia: 'Echinacea purpurea',
    description: 'With its distinctive spiny bronze cone surrounded by drooping rosy-purple petals, the Purple Coneflower is both a prairie beauty and one of the best-selling herbal remedies in the Western world. Named from the Greek echinos (hedgehog), it is as visually striking as it is medicinally significant.',
    habitat: 'Native to the open woodlands, prairies, and roadsides of central and eastern North America, from Ohio to Oklahoma. Thrives in full sun in well-drained, moderately fertile soils, and is highly drought-tolerant once established.',
    medical: 'The most widely researched immunostimulant herb. Multiple meta-analyses confirm that echinacea preparations reduce the duration and severity of common colds by 10–35%. Germany\'s Commission E formally approves echinacea for treating mild infections.',
    uses: 'Sold as teas, tinctures, capsules, and throat sprays globally. Indigenous peoples of the Great Plains used every part of the plant medicinally, with over 200 documented uses. An excellent pollinator plant attracting butterflies, bees, and goldfinches.',
    facts: 'Echinacea was the most widely used medicinal plant among Indigenous nations of the North American Great Plains, with over 200 ethnobotanical uses recorded. The spiny seed head remains attractive through winter and provides food for birds.'
  },
  {
    name: "St. John's Wort",
    latin: 'Hypericum perforatum',
    family: "Hypericaceae · St. John's Wort family",
    wikipedia: 'Hypericum perforatum',
    description: "A modest meadow herb concealing remarkable properties, St. John's Wort produces clouds of bright yellow five-petaled flowers dotted with black glands and translucent oil pores. It traditionally blooms around June 24th — the feast of St. John the Baptist.",
    habitat: 'Widely distributed across Europe, western Asia, and North Africa; naturalized as a common roadside wildflower across North and South America, Australia, and New Zealand. Favors open, sunny habitats — dry grasslands, field margins, and woodland clearings.',
    medical: 'One of the most studied herbal antidepressants. Multiple systematic reviews confirm that standardized extracts are as effective as standard antidepressants for mild-to-moderate depression, with fewer side effects. Available by prescription in Germany. Important caution: it interacts with many medications, including oral contraceptives and antiretrovirals.',
    uses: 'Infused oil — deep red from hypericin — is used as an anti-inflammatory rub for bruises, nerve pain, and muscle aches. Used in some traditional liqueur preparations. In the Middle Ages it was hung over doorways on Midsummer Eve to repel evil spirits.',
    facts: 'The red pigment (hypericin) was once thought to represent the blood of St. John. When a leaf is held to the light, oil glands appear as tiny translucent dots — giving the species its name perforatum (perforated). It is listed as a noxious weed in 26 countries due to its toxicity to livestock.'
  },
  {
    name: 'Pot Marigold',
    latin: 'Calendula officinalis',
    family: 'Asteraceae · Daisy family',
    wikipedia: 'Calendula officinalis',
    description: 'Calendula blazes with vivid orange and yellow blooms that seem to hold sunlight within their petals. One of history\'s most widely used medicinal flowers, it has been cultivated in herb gardens for over 1,000 years, as useful as it is beautiful.',
    habitat: 'Of Mediterranean origin, calendula thrives in a wide range of conditions — sunny borders, vegetable gardens, and disturbed ground. Exceptionally hardy, it blooms prolifically through cool temperatures, earning the affectionate nickname "the winter sun".',
    medical: 'Extensive clinical research supports calendula\'s use as a wound-healing, anti-inflammatory, and antiseptic topical remedy. The EMA has approved it for minor skin wounds. Clinical trials show calendula cream significantly reduces acute dermatitis during radiation therapy.',
    uses: 'Petals have long been used as a food colorant and cheap saffron substitute, giving a golden hue to butter, cheese, and broths. Used extensively in natural cosmetics — calendula oil infusions are a staple of artisanal soap, balms, and baby skincare products.',
    facts: 'The name Calendula comes from the Latin calendae (first day of the month) — in its native Mediterranean, it was observed to bloom on the calends of almost every month. In WWI, calendula was used on the battlefield to dress wounds and reduce inflammation.'
  },
  {
    name: 'Valerian',
    latin: 'Valeriana officinalis',
    family: 'Caprifoliaceae · Honeysuckle family',
    wikipedia: 'Valeriana officinalis',
    description: 'Valerian stands tall in summer meadows with clusters of tiny pale pink flowers that carry a surprisingly sweet, vanilla-tinged fragrance. Counterintuitively, the roots — its medicinal part — produce an intensely pungent, earthy odour that cats find utterly irresistible.',
    habitat: 'Native across Europe and parts of Asia, valerian colonizes damp meadows, riverbanks, ditches, and woodland margins. It prefers moist, fertile soils and partial shade, though it tolerates full sun. Naturalized across much of North America.',
    medical: 'One of the oldest sleep remedies in Western herbalism. Multiple clinical trials find that valerian root extract improves sleep quality, reduces sleep latency, and decreases nighttime waking, particularly with prolonged use over 2–4 weeks. The EMA has approved it for sleep disorders.',
    uses: 'Used in herbal teas, tinctures, and standardized capsule preparations for sleep support. A flavoring in some soft drinks in Europe. Historically used as a perfume in the 16th century, when its odour was considered pleasant.',
    facts: "The Pied Piper of Hamelin was said to have used valerian to lure rats, not his music — the root's smell attracts both cats and rats. Ancient Greek physician Galen prescribed valerian for insomnia. During WWII, valerian was used to treat shell shock and anxiety in soldiers across Europe."
  },
  {
    name: 'Foxglove',
    latin: 'Digitalis purpurea',
    family: 'Plantaginaceae · Plantain family',
    wikipedia: 'Digitalis purpurea',
    description: 'Foxglove is one of nature\'s most dramatic wildflowers — a tall, stately biennial producing towering spires of tubular flowers in shades of purple, pink, and white, each interior beautifully spotted to guide pollinators within. It is at once breathtakingly beautiful and potentially deadly.',
    habitat: 'Native to western Europe, from Norway to Morocco. A classic plant of open woodlands, hedgerows, moorland edges, and disturbed ground where it self-seeds freely. Thrives in acidic, well-drained soils in partial shade.',
    medical: 'One of the most medically significant plants in history. The cardiac glycosides digoxin and digitoxin, isolated from foxglove leaves, remain frontline treatments for heart failure and atrial fibrillation. Introduced to medicine by Welsh physician William Withering in 1785. Caution: all parts are toxic.',
    uses: 'Used exclusively in medicine (prescription digoxin). Its primary cultural role is ornamental — a towering cottage garden classic and beloved wildflower. Historically used in folk traditions to treat epilepsy and inflammation.',
    facts: "William Withering's 1785 'An Account of the Foxglove' is considered one of the most important texts in the history of medicine. The name 'foxglove' is thought to derive from 'folk's glove' — the gloves of the fairy folk in Old English. A single leaf contains enough glycoside to trigger severe cardiac toxicity in an adult human."
  },
  {
    name: 'Opium Poppy',
    latin: 'Papaver somniferum',
    family: 'Papaveraceae · Poppy family',
    wikipedia: 'Papaver somniferum',
    description: 'The opium poppy produces flowers of breathtaking delicacy — crêpe-paper petals in white, pink, red, or deep purple, crumpling open to reveal a crown of dusted stamens around a glaucous seed capsule. Few plants have shaped human civilization, for good and ill, as profoundly as this species.',
    habitat: 'Of uncertain exact origin (possibly the western Mediterranean or western Asia), opium poppy is now cultivated and naturalized worldwide in temperate regions. It grows in disturbed soils, field margins, and gardens, preferring cool-spring climates with full sun.',
    medical: 'The source of morphine (isolated 1804), codeine, and a range of opioid alkaloids that underpin pain management in modern medicine. Morphine remains the gold standard for severe pain relief. The seeds and seed oil contain negligible opioids and are entirely safe for food use.',
    uses: 'Seeds are widely used in baking (poppy seed bagels, strudel, mohnkuchen) and pressed into a culinary oil. Poppy seed oil is valued in oil painting. The blue-grey seeds — entirely free of opium alkaloids — are sold in grocery stores worldwide.',
    facts: "Humanity's relationship with opium poppy stretches back at least 6,000 years — the Sumerians called it 'hul gil' (joy plant). A fully ripe seed head contains approximately 30,000 seeds. The WWI Flanders poppy (a symbol of remembrance) is the related field poppy, Papaver rhoeas."
  },
  {
    name: 'Sweet Violet',
    latin: 'Viola odorata',
    family: 'Violaceae · Violet family',
    wikipedia: 'Viola odorata',
    description: 'Among the earliest spring wildflowers, sweet violet hugs shaded banks with its heart-shaped leaves and jewel-like deep purple blooms whose fleeting, intensely sweet scent has captivated poets, perfumers, and lovers for millennia. Its compound ionone temporarily desensitises the nose, so the fragrance can only be caught in brief, tantalising whiffs.',
    habitat: 'Native to Europe and Asia, sweet violet grows in sheltered, partly shaded sites — woodland edges, hedgerows, meadow borders, and old lawns. Prefers moist, humus-rich soils. Spreads by creeping stolons and by ants, which distribute the seeds (myrmecochory).',
    medical: 'Used in traditional medicine to soothe coughs, sore throats, and chest congestion. Violet leaves and flowers contain mucilaginous compounds and salicylates. Violet leaf extracts have demonstrated some anticancer properties in laboratory studies. The flowers are high in Vitamin C.',
    uses: 'Crystallized violet flowers are a classic French confectionery decoration. Violet syrup flavors the famous Parma Violet sweets and some liqueurs. Both leaves and flowers are edible, used in salads and herbal teas. Violettes de Toulouse are a protected regional product.',
    facts: "Napoleon Bonaparte was so devoted to violets that they became the secret emblem of his supporters. After his death, a locket was found around his neck containing violets from Josephine's grave. In the Victorian language of flowers, violets symbolized modesty and faithfulness."
  },
  {
    name: 'Elderflower',
    latin: 'Sambucus nigra',
    family: 'Adoxaceae · Moschatel family',
    wikipedia: 'Sambucus nigra',
    description: 'Elder is a sprawling native shrub whose flat-topped flower clusters — creamy white and intoxicatingly fragrant — are among the great scented treats of early summer. The same plant yields the purple-black elderberries of autumn, doubling its culinary importance through the seasons.',
    habitat: 'Common across Europe, western Asia, and North Africa. Thrives in disturbed and fertile habitats: hedgerows, woodland edges, riverbanks, and waste ground. Grows rapidly in most soils and light conditions, often colonizing wherever birds have deposited seeds.',
    medical: 'Elderberry (the fruit) is one of the most clinically supported antiviral herbs. Randomized controlled trials demonstrate elderberry preparations reduce influenza duration by 2–4 days and reduce cold severity. The berries are rich in anthocyanins with potent antioxidant and immune-modulating effects. Note: raw berries, bark, and leaves are toxic.',
    uses: 'Elderflower cordial is a quintessential British summer drink. Elderflower sparkling wine, liqueur (St-Germain), and champagne are beloved across northern Europe. The flowers are battered and fried as fritters, or infused into creams and jams. Elderberry syrup and wine are autumn staples.',
    facts: 'Elder holds a unique place in European folklore — it was thought to protect against evil spirits, and cutting one without asking the Elder Mother\'s permission was considered deeply unlucky. Elder is a keystone species for wildlife: over 300 insect species depend on it in the UK alone.'
  },
  {
    name: 'Passionflower',
    latin: 'Passiflora incarnata',
    family: 'Passifloraceae · Passion Flower family',
    wikipedia: 'Passiflora incarnata',
    description: 'Few flowers are as elaborately otherworldly as the passionflower. Its intricate, symmetrical architecture — a corona of purple and white filaments surrounding a complex central structure — inspired 16th-century Spanish missionaries to see in it the instruments of Christ\'s Passion.',
    habitat: 'Native to the southeastern United States, from Texas to Virginia, growing in open woodlands, meadows, and roadsides. Thrives in full sun to partial shade in well-drained sandy or loamy soils. A vigorous climbing vine reaching up to 10 metres.',
    medical: 'Clinically studied as a mild anxiolytic and sedative. One randomized trial found passionflower extract as effective as oxazepam (a benzodiazepine) for generalized anxiety disorder, with fewer side effects on job performance. EMA-approved in Europe for mild anxiety and sleep disturbances.',
    uses: 'The yellow fruits (maypops) produced after flowering are edible and taste like a mild passion fruit — eaten fresh or made into jelly in the American South. The vine is a critical host plant for several butterfly species. Widely sold as a calming herbal supplement.',
    facts: 'The elaborate corona filaments act as a guide for bumblebees, directing them toward pollen and nectar while ensuring cross-pollination. The original Spanish name was "Flor de las cinco llagas" (Flower of the Five Wounds). The fruit makes a hollow "pop" sound when stepped on.'
  },
  {
    name: 'Yarrow',
    latin: 'Achillea millefolium',
    family: 'Asteraceae · Daisy family',
    wikipedia: 'Achillea millefolium',
    description: 'Yarrow is one of nature\'s most resilient wildflowers — a flat-topped cluster of tiny cream or pink flowers rising above feathery, finely divided leaves that release a sharp, resinous fragrance when crushed. Its very name recalls the myth of Achilles, who used it to staunch the wounds of his soldiers at Troy.',
    habitat: 'One of the most widely distributed plants on Earth, yarrow grows across Europe, Asia, North America, and has naturalized in South America and Australasia. Found in meadows, roadsides, dry banks, and lawns in almost any soil from sea level to high alpine elevations.',
    medical: 'Traditional wound-healing and hemostatic herb across dozens of cultures. The leaves pressed on wounds were observed to stop bleeding, an effect attributed to the alkaloid achilleine. Used for fevers, indigestion, and inflammatory conditions. Yarrow tea is a traditional cold and flu remedy.',
    uses: 'Young leaves added sparingly to salads and herb cheeses for their sharp, aromatic bite. Used in Scandinavian brewing as a bittering agent before hops became standard. A beloved cut and dried flower for arrangements, and one of the most important plants for ecological gardening.',
    facts: 'Yarrow pollen found in 60,000-year-old Neanderthal burial sites suggests medicinal plant knowledge may predate Homo sapiens. The genus name Achillea honors Achilles, who learned of the plant\'s wound-healing powers from the centaur Chiron. In the I Ching, yarrow stalks were traditionally used to cast divination hexagrams.'
  },
  {
    name: 'Borage',
    latin: 'Borago officinalis',
    family: 'Boraginaceae · Borage family',
    wikipedia: 'Borago officinalis',
    description: 'Borage produces an abundance of the most perfect, cobalt-blue star-shaped flowers in the garden — a colour so pure it seems almost artificial. A companion plant of legendary goodwill, its cheerful blooms are a magnet for bees and a historical symbol of courage and good cheer.',
    habitat: 'Native to the Mediterranean region, borage has naturalized across Europe, North America, and South America in disturbed soils, waste ground, and gardens. It thrives in full sun in any well-drained soil, self-seeding abundantly and returning year after year.',
    medical: 'Borage seed oil is one of the richest plant sources of gamma-linolenic acid (GLA, 18–25%), higher even than evening primrose oil. GLA has anti-inflammatory properties and borage seed oil supplements are clinically investigated for rheumatoid arthritis and eczema.',
    uses: 'The vivid blue flowers are edible and make a spectacular garnish for salads, cold soups, and summer cocktails — particularly Pimm\'s Cup, where a borage sprig is traditional. Young leaves taste of fresh cucumber. A key companion plant — it deters tomato hornworms.',
    facts: 'Ancient Celtic warriors drank borage wine before battle for courage — the Romans said "Ego borago gaudia semper ago" (I, borage, bring always courage). The flowers\' blue pigment is pH-sensitive and fades to pink in acidic conditions, making it a natural indicator.'
  },
  {
    name: 'Common Jasmine',
    latin: 'Jasminum officinale',
    family: 'Oleaceae · Olive family',
    wikipedia: 'Jasminum officinale',
    description: 'Common jasmine is a vigorous, twining climber that scents summer evenings with a fragrance so sweet, rich, and complex that it has defined the language of floral perfumery for centuries. Its small, white, star-shaped flowers open in clusters, releasing their scent most powerfully at dusk to attract night-flying moths.',
    habitat: 'Native to a band from Iran through the Himalayas to western China. Cultivated throughout the Mediterranean, southern Europe, and warm-temperate regions worldwide. Thrives in sunny, sheltered positions in moist but well-drained fertile soils. A classic plant for warm walls and pergolas.',
    medical: 'Used for centuries in Ayurveda and traditional Chinese medicine for anxiety, depression, and skin disorders. Modern research finds jasmine aromatherapy can reduce anxiety and increase alertness. Jasmine tea is consumed across East Asia for its calming and digestive properties.',
    uses: 'The anchor scent of many of the world\'s most prestigious perfumes — Chanel No. 5 famously contains jasmine absolute from Grasse, France. Flowers are used to scent jasmine tea. Inseparable from Hindu and wedding traditions across South and Southeast Asia.',
    facts: 'It takes approximately 3.6 million jasmine flowers — all hand-picked before dawn to preserve the fragrance — to produce just one kilogram of jasmine absolute. Jasmine is one of the "big four" perfumery flowers alongside rose, tuberose, and orange blossom.'
  },
  {
    name: 'Roselle Hibiscus',
    latin: 'Hibiscus sabdariffa',
    family: 'Malvaceae · Mallow family',
    wikipedia: 'Hibiscus sabdariffa',
    description: 'Roselle produces striking pale yellow flowers with crimson centres, but it is the fleshy, brilliantly red calyces that have made it globally significant. These tart, jewel-red calyces are the source of hibiscus tea — one of the world\'s most widely consumed herbal beverages.',
    habitat: 'Native to West Africa, possibly Sudan, roselle is now cultivated pantropically across Africa, Asia, the Caribbean, and Latin America. Thrives in tropical and subtropical climates with high temperatures, full sun, and a pronounced dry season.',
    medical: 'Multiple randomized clinical trials demonstrate that hibiscus tea significantly lowers systolic and diastolic blood pressure, with effects comparable to some antihypertensive drugs. Rich in anthocyanins and organic acids with antioxidant and diuretic properties.',
    uses: 'The dried calyces are brewed as hibiscus tea (agua de jamaica in Mexico, bissap in West Africa, karkadé in Egypt). Used in jams, syrups, wines, and candies. Young leaves are eaten as a vegetable in parts of Africa and Asia.',
    facts: 'Hibiscus tea is the national drink of several West African countries. Ancient Egyptian pharaohs were believed to drink karkadé for its cooling properties in the desert heat. Hibiscus sabdariffa is one of the most documented plants in ethnobotanical databases, with thousands of traditional use records.'
  },
  {
    name: 'Dandelion',
    latin: 'Taraxacum officinale',
    family: 'Asteraceae · Daisy family',
    wikipedia: 'Taraxacum officinale',
    description: 'The dandelion is the world\'s most successful wildflower — a master of survival whose bright yellow composite flowers and perfect spherical seed clocks are among the most recognized plant images on the planet. Dismissed as a weed by many, it is a nutritional marvel.',
    habitat: 'Arguably the most widely distributed plant on Earth, occurring on every continent except Antarctica. Thrives in disturbed soils, lawns, roadsides, meadows, and waste ground across temperate and subarctic regions. Adapts to almost any soil type and light condition.',
    medical: 'Young leaves are richer in beta-carotene than carrots, richer in Vitamin K than most vegetables, and a good source of vitamins A, C, E, folate, iron, calcium, and potassium. The root is a prebiotic. Clinical studies confirm diuretic effects.',
    uses: 'Young leaves are eaten in salads, prized as a spring green in French and Italian cuisine. Flowers are used to make wine, beer, and a caffeine-free coffee substitute from roasted roots. The entire plant — root, leaf, and flower — is edible.',
    facts: 'A single dandelion plant can disperse up to 2,000 seeds per year, each on a parachute (pappus) so aerodynamically perfect that aerospace engineers have studied it for drone design. The name "dandelion" is a corruption of the French "dent de lion" (lion\'s tooth) for its serrated leaves.'
  },
  {
    name: 'Red Clover',
    latin: 'Trifolium pratense',
    family: 'Fabaceae · Legume family',
    wikipedia: 'Trifolium pratense',
    description: 'Red clover is a cheerful meadow flower — rounded magenta-pink flower heads rising above the characteristic three-leafed stems that make the whole clover genus instantly recognizable. One of nature\'s great improvers, its root nodules fix atmospheric nitrogen into the soil.',
    habitat: 'Native to Europe, western Asia, and northwest Africa, red clover has been spread worldwide as a forage crop and now grows on every inhabited continent. A meadow and grassland plant, it thrives in any reasonably fertile, well-drained soil in full sun to light shade.',
    medical: 'Red clover is rich in isoflavones (phytoestrogens). Multiple clinical trials show red clover isoflavone supplements reduce hot flash frequency by 30–50% in perimenopausal women. Also studied for cardiovascular health and bone density preservation.',
    uses: 'The flowers are edible and sweet — a classic forager\'s nibble, eaten raw or used in teas. An excellent bee forage plant, red clover honey is highly prized. Used in companion planting to fix nitrogen and improve soil fertility for neighboring crops.',
    facts: 'Finding a four-leaf clover is so rare (approximately 1 in 10,000) that it has become a universal symbol of extraordinary luck. Red clover is the national symbol of Denmark. A single acre of red clover can produce enough nectar to make 90 kg of honey if fully exploited by bees.'
  },
  {
    name: 'Cornflower',
    latin: 'Centaurea cyanus',
    family: 'Asteraceae · Daisy family',
    wikipedia: 'Centaurea cyanus',
    description: 'The cornflower\'s intense, almost electric blue — a colour so distinctive that "cornflower blue" has become its own colour category — once lit up the grain fields of Europe before modern herbicides nearly drove it to local extinction. A wildflower of extraordinary beauty now at the centre of conservation efforts.',
    habitat: 'Native to Europe — originally a weed of cornfields (arable land, hence the name). Thrives in disturbed, nutrient-poor soils in full sun. Now cultivated in gardens and increasingly sown in wildflower meadow mixes as part of agricultural biodiversity initiatives.',
    medical: 'Cornflower water is a traditional eyewash for tired and irritated eyes — a use documented since the Renaissance. The flowers contain anthocyanins and are mildly astringent and anti-inflammatory. Cornflower tea is used in folk medicine for digestive complaints.',
    uses: 'The vivid blue flowers are widely used as an edible decoration on cakes, pastries, salads, and cocktails — completely safe to eat with a subtly sweet, clove-like flavour. Dried flowers add colour to pot-pourri, herbal tea blends, and bath preparations.',
    facts: 'Cornflower is the national flower of Germany, Estonia, and Malta. Kaiser Wilhelm I\'s devotion to cornflowers became a Prussian nationalist symbol — his mother Queen Louise reportedly wove them into her children\'s hair to calm them while hiding from Napoleon\'s invading army.'
  },
  {
    name: 'German Iris',
    latin: 'Iris germanica',
    family: 'Iridaceae · Iris family',
    wikipedia: 'Iris germanica',
    description: 'The bearded iris is among the most architecturally spectacular flowers in the garden — great ruffled standards (upright petals) and falls (drooping petals) in almost every colour of the spectrum, elaborately veined and patterned, often with a golden "beard" at the throat.',
    habitat: 'Of complex hybrid origin involving Mediterranean species, German iris has been cultivated in European gardens since at least the 9th century and naturalized in rocky, dry habitats from the Mediterranean to central Asia. Requires well-drained, slightly alkaline soil and baking sun.',
    medical: 'The rhizome (root), dried and powdered as "orris root", carries a violet-like scent that develops as it ages. In traditional medicine, orris root was used as a teething aid for infants and as a treatment for respiratory conditions. Modern use is primarily cosmetic and aromatic.',
    uses: 'Orris root is a fundamental ingredient in traditional perfumery, violet-scented products, and gin botanical blends. Used as a flavoring in some liqueurs and toothpastes. Florence (Firenze) incorporated the fleur-de-lis (a stylized iris) into its very identity.',
    facts: 'The fleur-de-lis — the heraldic symbol of French royalty and of New Orleans — is a stylized iris. King Clovis I adopted it as his emblem in the 5th century CE after a miraculous battlefield victory. Florence has been cultivating iris for orris root since the 15th century.'
  },
  {
    name: 'Tulip',
    latin: 'Tulipa gesneriana',
    family: 'Liliaceae · Lily family',
    wikipedia: 'Tulip',
    description: 'The tulip is spring\'s most theatrical flower — a sleek, perfectly formed goblet of colour on a long straight stem, available in virtually every hue except true blue. Originating on the windswept steppes of Central Asia, it became the centre of the most spectacular speculative financial bubble in recorded history.',
    habitat: 'Wild tulips originate in the mountain steppes and dry rocky slopes of Central Asia — from Turkey and the Caucasus through Iran to the Pamir and Tian Shan ranges. Cultivated tulips thrive in cool climates with cold winters, free-draining soil, and full spring sun.',
    medical: 'Little significant medicinal use. The bulbs are technically edible and were consumed by the Dutch in the "Hunger Winter" of 1944–45, though they can cause allergic dermatitis with handling. Tulip petal extracts have been investigated for minor antifungal properties.',
    uses: 'The Netherlands produces approximately 3 billion tulip bulbs annually — about half the world\'s supply. Tulip petals are edible with a mild, bean-like flavour. The Keukenhof Gardens display 7 million flowering bulbs across 32 hectares, open for just eight weeks each spring.',
    facts: 'Tulip Mania (1634–1637) was history\'s first recorded speculative market bubble: at its peak, a single rare Semper Augustus bulb sold for the price of a canal house in Amsterdam. The streaked colour patterns prized by collectors were later discovered to be caused by a mosaic virus spread by aphids.'
  },
  {
    name: 'Common Daisy',
    latin: 'Bellis perennis',
    family: 'Asteraceae · Daisy family',
    wikipedia: 'Bellis perennis',
    description: 'The common daisy is perhaps the most universally beloved wildflower — a tiny masterpiece with immaculate white rays and a perfect golden disc, emerging from every lawn and meadow in temperate Europe and beyond. Its simplicity is its genius; it has symbolized innocence for thousands of years.',
    habitat: 'Native to western, central, and northern Europe, the common daisy grows in lawns, meadows, and roadsides in moist, nutrient-poor soils. It tolerates mowing, grazing, and trampling, making it exceptionally persistent in managed grasslands. Naturalized across much of North America, Australia, and New Zealand.',
    medical: 'Used in traditional European herbalism as an anti-inflammatory, wound-healing, and cough-soothing herb. Young leaves and flowers were eaten as spring vegetables and poultices in folk medicine. In homeopathy, used for bruises, sprains, and recovery from physical trauma.',
    uses: 'Young leaves and flowers are edible — with a slightly bitter, fresh flavour — used in salads and as edible garnishes. Daisy chains — flowers linked by threading one stem through a slit in another — are one of childhood\'s most universal crafts, practiced across cultures for millennia.',
    facts: "The English name 'daisy' is a corruption of 'day's eye' — because the flower opens with daylight and closes at dusk. Medieval physicians used daisies to treat eye conditions. Chaucer called it 'empress and flower of flowers all' in The Knight's Tale."
  },
  {
    name: 'Chinese Peony',
    latin: 'Paeonia lactiflora',
    family: 'Paeoniaceae · Peony family',
    wikipedia: 'Paeonia lactiflora',
    description: 'The peony is the grande dame of the flower garden — a long-lived, fragrant, luxuriously full-flowered perennial whose blooms can reach the size of a dinner plate. Cultivated in China for over 1,500 years, it carries deep cultural weight as a symbol of prosperity and feminine beauty.',
    habitat: 'Native to Siberia, Mongolia, and northern China, Chinese peony grows in mountain meadows and open forests in fertile, well-drained soils. It requires cold winters for dormancy but is remarkably long-lived — established plants can bloom for over 100 years without division.',
    medical: 'Paeonia roots are used extensively in Traditional Chinese Medicine. White peony root (Bai Shao) and red peony root (Chi Shao) are among the most commonly prescribed herbs in TCM. The active compound paeoniflorin has confirmed antispasmodic, anti-inflammatory, and neuroprotective effects in modern research.',
    uses: 'Peonies are among the most prized flowers in wedding and luxury floristry worldwide. Fresh petals are edible — used in salads, crystallized, or infused into syrups. In China, peony petals were historically blanched, marinated, and served as a vegetable dish.',
    facts: 'A peony plant at maturity can produce 30–50 blooms per stem and may live for 100 years or more without any care or division. The belief that peonies need ants to open is a charming misconception — ants are attracted by nectar glands on the buds but peonies open perfectly well without them.'
  },
  {
    name: 'Japanese Cherry Blossom',
    latin: 'Prunus serrulata',
    family: 'Rosaceae · Rose family',
    wikipedia: 'Prunus serrulata',
    description: 'No flower has inspired more poetry, philosophy, and cultural tradition than the Japanese cherry blossom. The ephemeral clouds of pale pink blossoms that transform Japanese cities each spring — lasting only one to two weeks — have become the world\'s most powerful symbol of beauty in transience.',
    habitat: 'The ornamental cherry cultivars grown worldwide are mostly Japanese selections derived from Prunus serrulata and related species, growing naturally in mountain forests and valleys of Japan, China, and Korea. Now planted as ornamental trees across temperate zones worldwide.',
    medical: 'Cherry blossom has no significant medicinal uses. The flowers are edible — lightly pickled in salt and plum vinegar, they are used in traditional Japanese spring cuisine. The bark of related wild cherry species contains salicin (a natural aspirin precursor).',
    uses: 'Salt-pickled cherry blossoms are steeped in hot water to make sakura-yu tea, a traditional Japanese spring drink served at celebrations. Sakura mochi (rice cakes wrapped in salt-pickled cherry leaves) is a beloved spring confection. Cherry blossom flavor features in a vast range of Japanese seasonal foods.',
    facts: "Japan's tradition of cherry-blossom viewing (hanami) traces to at least the Nara Period (710–794 CE). The 3,000 cherry trees gifted to Washington D.C. in 1912 by Tokyo Mayor Yukio Ozaki remain a symbol of Japanese-American friendship. Japan operates a dedicated government-funded Cherry Blossom Forecast service."
  },
  {
    name: 'Southern Magnolia',
    latin: 'Magnolia grandiflora',
    family: 'Magnoliaceae · Magnolia family',
    wikipedia: 'Magnolia grandiflora',
    description: 'The Southern Magnolia is one of the most ancient and majestic of all flowering trees — a botanical relic unchanged since before bees evolved, its enormous, creamy-white, intensely fragrant blooms among the largest flowers of any temperate tree. A symbol of the American South.',
    habitat: 'Native to the coastal plain and piedmont of the southeastern United States, from Virginia to Texas. Thrives in humid, warm-temperate climates in deep, moist, acidic soils. Now widely planted as an ornamental tree across southern Europe, the Mediterranean, and warmer parts of the UK.',
    medical: 'Magnolia bark (houpo) has been used in Traditional Chinese Medicine for at least 2,000 years for anxiety, depression, asthma, and digestive issues. The compounds magnolol and honokiol show significant anxiolytic, neuroprotective, and anti-inflammatory effects in research. Honokiol is being investigated as an anticancer compound.',
    uses: 'The enormous flowers are used as dramatic, short-lived floral decorations. In the American South, the glossy leaves are used in wreaths and holiday decorations. Magnolia grandiflora is the state flower of Mississippi and Louisiana. Magnolia bark extract is used in dental hygiene products for its antibacterial properties.',
    facts: 'Magnolias are among the most evolutionarily ancient flowering plants on Earth — fossil records show magnolia relatives existed 95 million years ago, in the age of dinosaurs. Because they predate the evolution of bees, magnolia flowers evolved to be pollinated by beetles, making them tougher and more leathery than typical flowers. A single flower can be 30 cm (12 inches) across.'
  },
  {
    name: 'Lily of the Valley',
    latin: 'Convallaria majalis',
    family: 'Asparagaceae · Asparagus family',
    wikipedia: 'Convallaria majalis',
    description: 'Lily of the Valley is a flower of extraordinary refined fragrance — the waxy, pendant, bell-shaped white flowers dangling from arching stems possess a sweet, cool, dewy scent that is among the most distinctive and beloved in all of perfumery. A sign of May, spring, and pure happiness.',
    habitat: 'Native across temperate regions of the Northern Hemisphere — from Europe through Asia to eastern North America. Grows naturally in deciduous woodland shade, colonizing forest floors in moist, humus-rich, slightly acidic soils. Spreads by rhizomes to form extensive ground-covering colonies.',
    medical: 'Contains cardiac glycosides similar to those in foxglove. ALL parts of the plant are highly toxic — ingestion causes severe cardiac arrhythmia, and even the water in a vase is poisonous. Despite its toxicity, it has historical use as a heart medicine.',
    uses: 'The essential oil and synthetic recreations of its fragrance are foundational in luxury perfumery — Christian Dior called it his favourite flower, and Diorissimo (1956) is the classic lily of the valley perfume. In France, bunches are sold on every street corner on May 1st (Fête du Muguet) as gifts for luck.',
    facts: 'Because the flowers are too delicate to survive the extraction process, true lily of the valley essential oil cannot be produced commercially — the scent in perfumes is always an artful reconstruction of dozens of synthetic molecules. France sells approximately 50 million bunches on May 1st alone.'
  },
  {
    name: 'Sacred Lotus',
    latin: 'Nelumbo nucifera',
    family: 'Nelumbonaceae · Lotus family',
    wikipedia: 'Nelumbo nucifera',
    description: 'The sacred lotus is one of the most spiritually significant plants in human history — a flower that rises from muddy water to bloom in immaculate perfection. Its extraordinary self-cleaning, water-repelling leaves (the "lotus effect") make it a universal symbol of purity and spiritual awakening.',
    habitat: 'Native to tropical Asia — from Iran across India, Southeast Asia, and China to northeastern Australia. Grows in still or slow-moving freshwater — ponds, lakes, river deltas, and paddy fields — in shallow, muddy water in tropical and subtropical climates.',
    medical: 'Every part of the lotus is used medicinally in traditional Asian medicine. The seeds are used as a cardiac tonic and sedative. Modern pharmacological research confirms antioxidant, anti-inflammatory, antifungal, and antiviral activities. Neferine (from seeds) is being investigated for anticancer properties.',
    uses: 'Every part of the lotus is eaten across Asia: the rhizome (renkon in Japanese) is sliced and used in stir-fries and soups; seeds are eaten fresh or dried; young leaves are used to wrap food for steaming; stamens are used to make lotus tea. The lotus is the national flower of India and Vietnam.',
    facts: 'Lotus seeds found in a dry lake bed in China germinated successfully after 1,300 years of dormancy — among the oldest viable seeds ever recorded. The lotus thermoregulates its flowers, maintaining 30–35°C regardless of ambient temperature, to attract cold-blooded insect pollinators. The lotus is referenced in the Egyptian Book of the Dead, the Vedas, and Buddhist scripture.'
  },
  {
    name: 'Forget-me-not',
    latin: 'Myosotis sylvatica',
    family: 'Boraginaceae · Borage family',
    wikipedia: 'Myosotis sylvatica',
    description: 'Forget-me-nots are the blue sky of the flower world — tiny, perfect, five-petaled flowers in the most flawless, clear azure, with a tiny yellow eye, forming dense clouds of bloom in moist spring woodlands and gardens. Their name, shared across dozens of languages, speaks to a universal human feeling: the fear of being forgotten.',
    habitat: 'Native to temperate Europe and Asia, with related species distributed across most of the globe. The woodland forget-me-not grows in moist, shaded sites — stream banks, damp woodland clearings, and shaded garden beds. A cool-season plant, it blooms most abundantly in spring, self-seeding freely.',
    medical: 'Used in traditional herbal medicine in some cultures as an astringent and expectorant. Primarily a cultural and ornamental flower with limited medicinal significance in mainstream practice.',
    uses: 'A classic spring bedding plant, grown in masses under tulips and in woodland gardens. The flowers are edible and used as garnishes on cakes, salads, and spring cocktails. Forget-me-nots are the state flower of Alaska and are used as emblems by Alzheimer\'s disease awareness organizations worldwide.',
    facts: "The name 'forget-me-not' appears in dozens of languages with a direct translation — German Vergissmeinnicht, French Ne-m'oubliez-pas, Dutch Vergeet-mij-niet — testifying to a universal legend. In Alaska, the flowers bloom in summer at high latitudes, where settlers adopted them as the state flower in 1917."
  },
  {
    name: 'Common Snowdrop',
    latin: 'Galanthus nivalis',
    family: 'Amaryllidaceae · Amaryllis family',
    wikipedia: 'Galanthus nivalis',
    description: 'The snowdrop is the flower of hope — the first wildflower to pierce frozen ground in late winter, its three pure white outer tepals drooping like a bowed head to shelter the delicate green-tipped inner segments. In countries where winter is long and grey, its appearance is genuinely cause for celebration.',
    habitat: 'Native to a broad belt from Spain and France through central Europe and the Balkans to Ukraine and the Caucasus. Grows in moist, humus-rich soils in deciduous woodland, meadows, and riverbanks. In Britain it naturalizes extensively in damp woodland.',
    medical: 'The compound galantamine, derived from Galanthus species (and now synthesized), is an approved and widely used treatment for Alzheimer\'s disease and vascular dementia. It works as an acetylcholinesterase inhibitor, improving memory and cognitive function. Bulgarian scientist Dimitar Paskov first isolated galantamine from snowdrops in the 1950s.',
    uses: 'Primarily an ornamental and cultural plant. Galanthophilia — the collecting and growing of snowdrop varieties — is a passionate hobby with rare varieties selling for hundreds of pounds per bulb. Snowdrops have deep religious significance across Christian Europe as symbols of purity and the renewal of light.',
    facts: 'The discovery that galantamine from snowdrops could treat Alzheimer\'s disease came from Bulgarian folklore — villagers reportedly used snowdrop bulbs to treat neurological conditions. "Snowdrop theft" — stealing choice varieties from gardens — is a documented crime in the UK with specialist plant detectives investigating cases.'
  },
  {
    name: 'Wild Daffodil',
    latin: 'Narcissus pseudonarcissus',
    family: 'Amaryllidaceae · Amaryllis family',
    wikipedia: 'Narcissus pseudonarcissus',
    description: 'The wild daffodil, or Lent Lily, is a smaller, more elegant cousin of garden hybrids — pale creamy outer petals surrounding a bright butter-yellow trumpet, nodding slightly in the March wind. It is the quintessential English spring wildflower, celebrated by Wordsworth, Herrick, and Shakespeare.',
    habitat: 'Native to western Europe — Spain, France, the UK, Portugal, and the Low Countries. Naturally grows in deciduous woodland, meadows, and damp grasslands in well-drained but moisture-retentive soils. A reliable indicator of ancient, undisturbed grassland habitat in Britain.',
    medical: 'Daffodil bulbs and all parts of the plant are toxic, containing lycorine, galantamine, and other alkaloids. Galantamine (found in daffodil bulbs and related species) is a clinically approved Alzheimer\'s treatment. Daffodil bulbs have been explored as an agricultural source for galantamine production.',
    uses: 'Over 28,000 registered daffodil cultivars exist. The daffodil is the national flower of Wales, worn on St. David\'s Day (March 1st). Over 6 billion daffodil bulbs are sold worldwide each year, with the Netherlands as the world\'s largest producer. A natural dye from the flowers produces warm yellow tones.',
    facts: "Wordsworth's poem 'I Wandered Lonely as a Cloud' (1807), written after a walk with his sister Dorothy, has made the daffodil the most poeticized flower in the English language. Daffodils contain lycorine which makes them toxic to virtually every garden pest including deer, rabbits, and squirrels — they are one of the few bulbs that rodents will not eat."
  },
  {
    name: 'Hawthorn',
    latin: 'Crataegus monogyna',
    family: 'Rosaceae · Rose family',
    wikipedia: 'Crataegus monogyna',
    description: 'In May, English hedgerows ignite with the frothy white blossom of hawthorn — clouds of tiny, sweetly scented flowers that produce the countryside\'s most spectacular seasonal transformation and give May its other name: the "May tree". One of Britain\'s most ancient and mythologically charged native plants.',
    habitat: 'Distributed across Europe, western Asia, and North Africa, hawthorn is the dominant shrub of traditional hedgerows across Britain, France, and much of Europe. Thrives in almost any soil in sun or partial shade, making it the backbone of agricultural hedgerow planting since at least the Bronze Age.',
    medical: 'One of the most studied cardioprotective herbs. Hawthorn berry, leaf, and flower extracts are clinically validated for improving mild-to-moderate heart failure (NYHA class I–II), improving exercise tolerance, and reducing palpitations. Active compounds (oligomeric proanthocyanidins and flavonoids) dilate coronary arteries and improve blood flow to the heart.',
    uses: 'Hawthorn berries (haws) make excellent jelly, syrup, ketchup, and wine — with a mild apple-rose flavour. The young leaves, buds, and flowers can be eaten in salads, called "bread and cheese" by country children. Berry-rich hedgerows provide food for over 30 species of birds and dozens of insects in winter.',
    facts: 'It was considered deeply unlucky in British and Irish folklore to bring hawthorn blossom indoors — the scent (which contains trimethylamine, a compound also produced in decaying flesh) was associated with death and plague. Despite this, hawthorn was central to May Day celebrations, festooning doorways and Maypoles to welcome summer.'
  },
  {
    name: 'Hollyhock',
    latin: 'Alcea rosea',
    family: 'Malvaceae · Mallow family',
    wikipedia: 'Alcea rosea',
    description: 'Hollyhocks are the towers of the cottage garden — statuesque biennials sending up stalks 2–3 metres tall, laden with large, silky, papery flowers in every shade from pure white through pink and crimson to deepest near-black purple. A flower of old gardens and village lanes, evoking a timeless pastoral aesthetic.',
    habitat: 'Originally from central Asia and the Middle East, hollyhocks have been cultivated in European and Asian gardens for centuries and have naturalized in hedgerows, waste ground, and old walls worldwide. Thrives in full sun in any well-drained soil — particularly partial to old stone walls.',
    medical: 'All parts of the hollyhock are mildly mucilaginous and have traditional use in soothing coughs, sore throats, and digestive irritation — similar to the related marshmallow (Althaea officinalis). The flowers contain anthocyanins and flavonoids with antioxidant properties.',
    uses: 'The flowers are edible — beautiful in salads, used to make a blue-purple food colorant, or pickled in vinegar. Young leaves can be cooked as a vegetable. In Morocco, hollyhock tea (khoubiza) is a daily beverage. Children have traditionally fashioned hollyhock flowers into dolls.',
    facts: 'In the Victorian language of flowers, hollyhocks symbolized ambition — their towering growth habit embodying the aspiration to rise. Ancient hollyhock pollen found in Neanderthal burial sites suggests cultivation predating recorded history by tens of thousands of years. Hollyhock pollen is among the most allergenic of garden flowers.'
  },
  {
    name: 'Common Honeysuckle',
    latin: 'Lonicera periclymenum',
    family: 'Caprifoliaceae · Honeysuckle family',
    wikipedia: 'Lonicera periclymenum',
    description: 'Wild honeysuckle is the quintessential scent of a northern European summer evening — its two-lipped, creamy-yellow and pink trumpet flowers releasing a rich, sweet, vanilla-tinged fragrance at dusk to attract their primary pollinator: the hawk-moth. A spiraling climber that twines clockwise around any available support.',
    habitat: 'Native to Europe and western Asia, common honeysuckle grows in hedgerows, woodland margins, and coastal cliffs, climbing and twining through other vegetation. Tolerates a wide range of soils in sun or shade. The bright red berries attract birds, which disperse the seeds widely.',
    medical: 'The flowers and berries of Lonicera species are used extensively in Traditional Chinese Medicine — honeysuckle flower (Jin Yin Hua) is one of the most important antimicrobial herbs, used for respiratory infections and fever. Modern research has confirmed significant antiviral, antibacterial, and anti-inflammatory activity in flower extracts.',
    uses: 'The fragrant flowers can be sucked for a drop of nectar — as children traditionally did, giving rise to the name "honeysuckle". Used in perfumery and candle fragrance. The flexible stems are used in basket-weaving and wreath-making. A critical wildlife plant supporting the Elephant Hawk-moth.',
    facts: 'Shakespeare referenced honeysuckle (as "woodbine") in A Midsummer Night\'s Dream and Much Ado About Nothing. The spiraling growth of honeysuckle became a symbol of devoted love in the Victorian language of flowers. During the COVID-19 pandemic, Chinese research identified honeysuckle compounds as potentially inhibitory against the virus.'
  },
  {
    name: 'Dahlia',
    latin: 'Dahlia pinnata',
    family: 'Asteraceae · Daisy family',
    wikipedia: 'Dahlia',
    description: 'The dahlia is the spectacular finale of the garden year — blooming from midsummer to the first frosts in an almost absurd range of flower forms, from simple daisy-like singles to enormous "dinner plate" varieties 30 cm across, in every colour except blue. A Mexican treasure that conquered European gardens in the 19th century.',
    habitat: 'Native to the highlands of Mexico and Central America, where wild dahlias grow in mountain meadows at elevations of 1,500–3,700 metres. Cultivated dahlias require full sun, fertile soil, and regular water. They are frost-tender tubers that must be lifted in cold climates before winter.',
    medical: 'The tubers of some dahlia species are edible and were used as a food source by the Aztecs. Modern research has investigated dahlia fructans (inulin-type fibers) as prebiotics. The Aztecs used dahlia to treat epilepsy. Limited medicinal significance in modern practice.',
    uses: 'Primarily ornamental, dahlias are one of the most important cut flowers in global commercial floristry. Dahlia tubers are edible (original species varieties) with a mildly starchy, slightly spicy flavour. The flowers are edible and widely used as garnishes.',
    facts: 'The dahlia was named after Swedish botanist Anders Dahl (a student of Linnaeus). The first dahlias brought to Europe were grown as a food crop at the Royal Gardens of Madrid — the flowers\' ornamental value was only appreciated later. The world\'s largest dahlia collection (over 1,200 varieties) is held at the RHS Gardens at Wisley, England.'
  },
  {
    name: 'Common Primrose',
    latin: 'Primula vulgaris',
    family: 'Primulaceae · Primrose family',
    wikipedia: 'Primula vulgaris',
    description: 'The common primrose is one of the first wildflowers of spring — its delicate, pale sulphur-yellow flowers with their characteristic deeper yellow eye emerging directly from a rosette of crinkled leaves before many other plants have stirred from winter. A gentle but persistent flower of ancient woodland.',
    habitat: 'Native to western and southern Europe, from the British Isles and Portugal east to Turkey. Grows naturally in ancient woodland glades, hedge banks, shaded grassland, and cliff ledges in moist, humus-rich, slightly acidic soils in partial shade. A reliable indicator of ancient, undisturbed habitat in Britain.',
    medical: 'The roots contain saponins with expectorant properties — used in traditional medicine for coughs and bronchitis. Primrose leaf tea was used for nervous headaches and insomnia. Primrose salve was applied to wounds and burns. Related species (cowslip, Primula veris) are used in approved European respiratory preparations.',
    uses: 'Both flowers and young leaves are edible — flowers used in salads, crystallized as cake decorations, or made into primrose wine. Young leaves can be cooked as a vegetable. Primrose wine was a traditional English spring-time drink. Essential for naturalizing under deciduous trees in garden design.',
    facts: "British Prime Minister Benjamin Disraeli's favourite flower was the primrose — on his death in 1881, Queen Victoria sent primroses from Windsor with a note 'his favourite flowers'. This led to the founding of the Primrose League (1883), a popular Conservative political organization with over one million members at its peak."
  },
  {
    name: 'Meadow Buttercup',
    latin: 'Ranunculus acris',
    family: 'Ranunculaceae · Buttercup family',
    wikipedia: 'Ranunculus acris',
    description: 'The meadow buttercup\'s brilliant, lacquer-glossy yellow petals are one of the most vivid sights in a summer meadow. The remarkable glossiness — uniquely among flowers — results from a specialized cellular structure that reflects yellow light while absorbing UV, turning the flower into a mirror that directs sunlight onto the pollen for bee pollinators.',
    habitat: 'Distributed across temperate Europe, Asia, and naturalized throughout much of the world. Thrives in damp meadows, pastures, roadsides, and river banks in moist, moderately fertile soils. One of the most common wildflowers of unimproved grassland in Britain and northern Europe.',
    medical: 'Buttercups are toxic — they contain protoanemonin, a bitter, irritating compound that causes blistering of the mouth and digestive tract in livestock. Not used in conventional medicine. In homeopathy, Ranunculus is used for shingles and chest pain.',
    uses: 'Primarily a wildflower of great ecological value — one of the top pollen sources for generalist bees in European meadows. Buttercup meadows are a conservation priority: traditional hay meadows with buttercup, clover, and grasses support over 100 plant species and vast insect diversity.',
    facts: 'The remarkable glossiness of buttercup petals was the subject of a 2011 scientific study in the Royal Society\'s Interface journal — scientists discovered cells are stacked in an unusual way, creating a thin air gap between layers producing the mirror-like effect. The question "do you like butter?" — holding a buttercup under the chin — is documented in British children\'s games from at least the 19th century.'
  }
];

// ── utilities ──────────────────────────────────────────────────────────────

function dayOfYear(date) {
  const start = new Date(date.getFullYear(), 0, 0);
  return Math.floor((date - start) / 86400000);
}

function formatDate(date) {
  return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}

// ── image loading via Wikipedia pageimages API ────────────────────────────

async function loadImage(wikipediaTitle) {
  const img    = document.getElementById('flower-img');
  const holder = document.getElementById('img-placeholder');
  const credit = document.getElementById('img-credit');

  img.style.display = 'none';
  img.src = '';
  holder.style.display = 'flex';
  holder.innerHTML = '<div class="spinner"></div>';
  credit.style.visibility = 'hidden';

  try {
    const url = 'https://en.wikipedia.org/w/api.php?action=query'
      + '&titles=' + encodeURIComponent(wikipediaTitle)
      + '&prop=pageimages&pithumbsize=800&format=json&origin=*';

    const data = await fetch(url).then(r => r.json());
    const page = Object.values(data.query.pages)[0];
    const src  = page.thumbnail?.source;

    if (!src) throw new Error('no image');

    img.onload = () => {
      holder.style.display = 'none';
      img.style.display = 'block';
      credit.style.visibility = 'visible';
    };
    img.onerror = () => showFallback(holder);
    img.src = src;

  } catch (_) {
    showFallback(holder);
  }
}

function showFallback(holder) {
  holder.style.display = 'flex';
  holder.innerHTML = '<span style="font-size:5rem;line-height:1">🌸</span>';
}

// ── tabs ───────────────────────────────────────────────────────────────────

document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('tab-' + btn.dataset.tab).classList.add('active');
  });
});

// ── state & render ─────────────────────────────────────────────────────────

let offset = 0;

function render() {
  const today  = new Date();
  const target = new Date(today);
  target.setDate(today.getDate() + offset);

  const flower = flowers[dayOfYear(target) % flowers.length];

  // date display
  const label = document.getElementById('date-label');
  const sub   = document.getElementById('date-sub');
  if (offset === 0)       { label.textContent = 'Today'; }
  else if (offset === -1) { label.textContent = 'Yesterday'; }
  else if (offset === 1)  { label.textContent = 'Tomorrow'; }
  else                    { label.textContent = formatDate(target); }
  sub.textContent = offset === 0 ? formatDate(target)
    : offset > 0 ? `${offset} days from now`
    : `${Math.abs(offset)} days ago`;

  // flower fields
  document.getElementById('flower-name').textContent   = flower.name;
  document.getElementById('flower-latin').textContent  = flower.latin;
  document.getElementById('flower-family').textContent = flower.family;
  document.getElementById('flower-desc').textContent   = flower.description;
  document.getElementById('tab-habitat').textContent   = flower.habitat;
  document.getElementById('tab-medical').textContent   = flower.medical;
  document.getElementById('tab-uses').textContent      = flower.uses;
  document.getElementById('tab-facts').textContent     = flower.facts;

  // reset tabs to first
  document.querySelectorAll('.tab-btn').forEach((b, i) => b.classList.toggle('active', i === 0));
  document.querySelectorAll('.tab-pane').forEach((p, i) => p.classList.toggle('active', i === 0));

  // load image
  loadImage(flower.wikipedia);
}

// ── navigation ─────────────────────────────────────────────────────────────

document.getElementById('btn-prev').addEventListener('click', () => { offset -= 1; render(); });
document.getElementById('btn-next').addEventListener('click', () => { offset += 1; render(); });

// ── init ───────────────────────────────────────────────────────────────────

render();
