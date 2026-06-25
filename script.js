/* ══════════════════════════════════════
   YUNMA — Site JS
   - i18n (FR / EN / DE / IT / ES)
   - Language switcher
   - Burger menu + nav panel
   - FAQ accordion
   - Header scroll shadow
   - Smooth scroll
══════════════════════════════════════ */

(function () {
  'use strict';

  /* ════════════════════════════════════
     TRANSLATIONS
  ════════════════════════════════════ */
  var T = {
    fr: {
      nav: { home: 'Accueil', coffees: 'Cafés', story: 'Histoire', pro: 'Professionnels', contact: 'Contact', legal: 'Légal' },
      hero: {
        label: 'Yunnan, Chine — 云南',
        title: 'Slow Coffee.<br>Slow Life.',
        desc: 'Des cafés de spécialité sourcés parmi les terroirs d\'altitude du Yunnan, torréfiés à Paris avec soin et respect du grain.',
        cta: 'Découvrir nos cafés',
        p1: 'Sourcing direct', p2: 'Torréfaction artisanale', p3: 'Terroirs d\'altitude'
      },
      cafes: {
        label: '02 — Cafés',
        title: 'Terroirs d\'exception,<br>cafés uniques.',
        desc: 'Chaque café est le fruit d\'une sélection rigoureuse, d\'un dialogue sincère avec les producteurs et d\'une torréfaction pensée pour révéler le caractère unique de chaque terroir yunnanais.',
        k1: { origin: 'Yunnan — Baoshan', name: 'Arabica de montagne', notes: 'Notes de fleurs blanches, agrumes, miel léger', d1: 'Altitude : 1 800–2 000 m', d2: 'Traitement : lavé', d3: 'Variété : Catimor' },
        k2: { origin: 'Yunnan — Pu\'er', name: 'Natural process', notes: 'Notes de fruits rouges, cacao, épices douces', d1: 'Altitude : 1 600–1 900 m', d2: 'Traitement : naturel', d3: 'Variété : Bourbon' },
        k3: { origin: 'Yunnan — Dehong', name: 'Honey process', notes: 'Notes de caramel, noisette, fruits secs', d1: 'Altitude : 1 700–2 100 m', d2: 'Traitement : honey', d3: 'Variété : Bourbon / Typica' },
        faq: {
          t: 'Questions fréquentes',
          q0: 'D\'où viennent vos cafés ?', a0: 'Tous nos cafés proviennent du Yunnan, la province du sud-ouest de la Chine réputée pour ses terroirs d\'altitude exceptionnels. Nous travaillons directement avec des producteurs locaux, sans intermédiaire, pour garantir qualité et traçabilité.',
          q1: 'Comment torréfiez-vous vos cafés ?', a1: 'Nous torréfions à Paris, de façon artisanale, en petites séries. Chaque profil de torréfaction est développé pour révéler au mieux le potentiel aromatique du grain — des torréfactions claires à moyennes, respectueuses de l\'origine.',
          q2: 'Comment préparer au mieux vos cafés ?', a2: 'Nos cafés s\'expriment pleinement en méthodes douces : V60, Chemex, AeroPress ou cafetière à piston. Nos sélections à torréfaction moyenne conviennent également très bien en espresso. Nous recommandons une eau filtrée à 92–94°C.',
          q3: 'Vos cafés sont-ils certifiés bio ou équitables ?', a3: 'Nous privilégions une démarche de sourcing responsable et transparent plutôt que de nous appuyer uniquement sur des certifications. Nos producteurs partenaires respectent des pratiques agricoles durables et nous nous rendons sur place régulièrement.',
          q4: 'Comment commander vos cafés ?', a4: 'Contactez-nous directement par email ou WhatsApp. Nous serons ravis de vous conseiller sur les sélections disponibles et d\'organiser votre commande. Livraison en France sous 3–5 jours ouvrés.'
        },
        box: { t: 'Une question sur nos cafés ?', d: 'Notre équipe est disponible pour vous conseiller et répondre à toutes vos questions.' }
      },
      story: {
        label: '03 — Histoire',
        title: 'Chaque tasse<br>raconte une histoire.',
        b1h: 'L\'origine du projet', b1p: 'Yunma est née d\'une fascination pour le Yunnan, cette province du sud-ouest de la Chine aux paysages spectaculaires et aux cultures millénaires. Lors d\'un premier voyage, nous avons découvert des cafés d\'une qualité surprenante, cultivés en altitude par des familles de producteurs passionnés — et largement méconnus en Europe.',
        b2h: 'Notre engagement', b2p: 'Yunma (云马, « cheval des nuages ») incarne notre volonté de créer un pont direct entre les producteurs yunnanais et les amateurs de café en France. Nous sélectionnons personnellement chaque lot, nous rendons sur les terroirs, et torréfions à Paris avec le soin que mérite chaque grain.',
        b3h: 'Slow Coffee. Slow Life.', b3p: 'Notre philosophie est simple : prendre le temps. Prendre le temps de comprendre l\'origine, de maîtriser la torréfaction, et de savourer chaque tasse. Le café comme invitation à ralentir, à être présent, à apprécier l\'instant.',
        faq: {
          t: 'Questions sur notre histoire',
          q0: 'Pourquoi le Yunnan ?', a0: 'Le Yunnan est le berceau historique du café en Chine. Ses conditions géographiques — altitude, climat tropical de montagne, sols riches — offrent un terroir idéal pour des arabica d\'exception. C\'est aussi une région aux cultures extraordinairement diverses, qui nous inspire profondément.',
          q1: 'Que signifie « Yunma » ?', a1: 'Yunma (云马) se compose de 云 (yún, « nuage ») et 马 (mǎ, « cheval »). Le cheval des nuages évoque à la fois les brumes matinales qui enveloppent les plantations en altitude et la liberté d\'un sourcing direct, sans frontières.',
          q2: 'Comment choisissez-vous vos producteurs ?', a2: 'Chaque partenariat naît d\'une rencontre, d\'une dégustation, d\'un échange sur les pratiques et les valeurs. Nous privilégions des producteurs qui partagent notre vision d\'une agriculture respectueuse. Nous visitons les exploitations et construisons des relations durables.',
          q3: 'Où torréfiez-vous vos cafés ?', a3: 'Nous torréfions à Paris, dans un atelier dédié où chaque lot est suivi avec attention. La proximité nous permet de réagir rapidement aux arrivages et de garantir la fraîcheur de nos cafés.'
        }
      },
      pro: {
        label: '04 — Professionnels',
        title: 'Offrir le meilleur<br>à vos clients.',
        desc: 'Vous êtes café, restaurant, hôtel, épicerie fine ou bureau ? Yunma vous accompagne avec des sélections exclusives, une logistique adaptée et un support personnalisé.',
        b1h: 'Sélections exclusives', b1p: 'Accès à des lots réservés aux professionnels, non disponibles en retail.',
        b2h: 'Livraison régulière', b2p: 'Approvisionnement sur mesure, en grains ou en moulu, selon votre rythme et vos besoins.',
        faq: {
          t: 'Questions fréquentes — Professionnels',
          q0: 'Quelles sont les commandes minimales ?', a0: 'Nous travaillons à partir de 5 kg par référence pour les premières commandes. Les commandes récurrentes sont adaptées à vos volumes selon votre consommation mensuelle.',
          q1: 'Proposez-vous des dégustations avant commande ?', a1: 'Oui, nous organisons des sessions de dégustation à Paris pour vous permettre de découvrir nos sélections avant de vous engager. Contactez-nous pour convenir d\'un rendez-vous.',
          q2: 'Quels sont vos délais et conditions de livraison ?', a2: 'Livraison sous 3 à 5 jours ouvrés en France métropolitaine. Des solutions logistiques adaptées sont disponibles pour les partenaires hors de France — contactez-nous pour en discuter.'
        },
        box: { t: 'Vous souhaitez travailler avec nous ?', d: 'Contactez-nous pour découvrir nos offres professionnelles et organiser une première dégustation.' }
      },
      cnt: { label: '05 — Contact', title: 'Parlons café.', desc: 'Une question, un projet, une envie de partager votre passion du café ? Nous sommes là.', c1h: 'Email', c2h: 'WhatsApp', c2p: 'Disponible du lundi au vendredi, 9h–18h', c3h: 'Instagram' },
      leg: {
        label: '06 — Légal', title: 'Mentions légales',
        b1h: 'Éditeur du site', b1p: 'Yunma<br>[Forme juridique] au capital de [X] €<br>Siège social : [Adresse], Paris, France<br>SIRET : [000 000 000 00000]<br>Email : hello@yunma.coffee',
        b2h: 'Hébergement', b2p: 'Ce site est hébergé par GitHub Pages, service de GitHub Inc.,<br>88 Colin P Kelly Jr St, San Francisco, CA 94107, États-Unis.',
        b3h: 'Propriété intellectuelle', b3p: 'L\'ensemble des éléments de ce site (textes, images, logo, graphismes) est la propriété exclusive de Yunma et est protégé par les lois françaises et internationales sur la propriété intellectuelle. Toute reproduction, même partielle, est interdite sans autorisation préalable.',
        b4h: 'Données personnelles', b4p: 'Ce site ne collecte aucune donnée personnelle sans votre consentement. Les données transmises via nos formulaires de contact sont utilisées uniquement pour répondre à vos demandes. Conformément au RGPD, vous disposez d\'un droit d\'accès, de rectification et de suppression de vos données. Pour exercer ces droits : hello@yunma.coffee.',
        b5h: 'Cookies', b5p: 'Ce site n\'utilise pas de cookies de tracking ou publicitaires.'
      },
      foot: { tag: 'Slow Coffee. Slow Life. — 慢咖啡，慢生活', copy: '© 2025 Yunma — Tous droits réservés · <a href="#legal">Mentions légales</a>' }
    },

    en: {
      nav: { home: 'Home', coffees: 'Coffees', story: 'Story', pro: 'Professionals', contact: 'Contact', legal: 'Legal' },
      hero: {
        label: 'Yunnan, China — 云南',
        title: 'Slow Coffee.<br>Slow Life.',
        desc: 'Specialty coffees sourced from the high-altitude terroirs of Yunnan, roasted in Paris with care and respect for the bean.',
        cta: 'Discover our coffees',
        p1: 'Direct sourcing', p2: 'Artisan roasting', p3: 'High-altitude terroirs'
      },
      cafes: {
        label: '02 — Coffees',
        title: 'Exceptional terroirs,<br>unique coffees.',
        desc: 'Each coffee is the result of rigorous selection, sincere dialogue with producers and roasting designed to reveal the unique character of each Yunnan terroir.',
        k1: { origin: 'Yunnan — Baoshan', name: 'Mountain Arabica', notes: 'Notes of white flowers, citrus, light honey', d1: 'Altitude: 1,800–2,000 m', d2: 'Process: washed', d3: 'Variety: Catimor' },
        k2: { origin: 'Yunnan — Pu\'er', name: 'Natural process', notes: 'Notes of red berries, cacao, gentle spices', d1: 'Altitude: 1,600–1,900 m', d2: 'Process: natural', d3: 'Variety: Bourbon' },
        k3: { origin: 'Yunnan — Dehong', name: 'Honey process', notes: 'Notes of caramel, hazelnut, dried fruits', d1: 'Altitude: 1,700–2,100 m', d2: 'Process: honey', d3: 'Variety: Bourbon / Typica' },
        faq: {
          t: 'Frequently asked questions',
          q0: 'Where do your coffees come from?', a0: 'All our coffees come from Yunnan, a province in south-west China renowned for its exceptional high-altitude terroirs. We work directly with local producers, without intermediaries, to guarantee quality and traceability.',
          q1: 'How do you roast your coffees?', a1: 'We roast in Paris, artisanally, in small batches. Each roasting profile is developed to best reveal the aromatic potential of the bean — light to medium roasts, respectful of the origin.',
          q2: 'What is the best way to brew your coffees?', a2: 'Our coffees express themselves fully in gentle brewing methods: V60, Chemex, AeroPress or French press. Our medium-roast selections also work very well as espresso. We recommend filtered water at 92–94°C.',
          q3: 'Are your coffees organic or fair-trade certified?', a3: 'We prioritise a responsible and transparent sourcing approach rather than relying solely on certifications. Our partner producers follow sustainable farming practices and we visit them on-site regularly.',
          q4: 'How can I order your coffees?', a4: 'Contact us directly by email or WhatsApp. We will be happy to advise you on available selections and arrange your order. Delivery in France within 3–5 working days.'
        },
        box: { t: 'A question about our coffees?', d: 'Our team is available to advise you and answer all your questions.' }
      },
      story: {
        label: '03 — Story',
        title: 'Every cup<br>tells a story.',
        b1h: 'The origin of the project', b1p: 'Yunma was born from a fascination with Yunnan, a province in south-west China with spectacular landscapes and thousand-year-old cultures. On a first trip, we discovered coffees of surprising quality, grown at altitude by passionate families of producers — and largely unknown in Europe.',
        b2h: 'Our commitment', b2p: 'Yunma (云马, \'cloud horse\') embodies our desire to create a direct bridge between Yunnan producers and coffee lovers in France. We personally select each lot, visit the terroirs, and roast in Paris with the care that every bean deserves.',
        b3h: 'Slow Coffee. Slow Life.', b3p: 'Our philosophy is simple: take your time. Take the time to understand the origin, master the roasting, and savour every cup. Coffee as an invitation to slow down, to be present, to appreciate the moment.',
        faq: {
          t: 'Questions about our story',
          q0: 'Why Yunnan?', a0: 'Yunnan is the historic birthplace of coffee in China. Its geographical conditions — altitude, tropical mountain climate, rich soils — offer an ideal terroir for exceptional arabica. It is also a region of extraordinary cultural diversity that deeply inspires us.',
          q1: 'What does \'Yunma\' mean?', a1: 'Yunma (云马) is made up of 云 (yún, \'cloud\') and 马 (mǎ, \'horse\'). The cloud horse evokes both the morning mists that envelop high-altitude plantations and the freedom of direct sourcing without borders.',
          q2: 'How do you choose your producers?', a2: 'Every partnership begins with a meeting, a tasting, an exchange about practices and values. We favour producers who share our vision of respectful farming. We visit the estates and build long-lasting relationships.',
          q3: 'Where do you roast your coffees?', a3: 'We roast in Paris, in a dedicated workshop where every batch is carefully monitored. Being close by allows us to react quickly to new arrivals and guarantee the freshness of our coffees.'
        }
      },
      pro: {
        label: '04 — Professionals',
        title: 'Offering the best<br>to your clients.',
        desc: 'Are you a café, restaurant, hotel, delicatessen or office? Yunma supports you with exclusive selections, tailored logistics and personalised support.',
        b1h: 'Exclusive selections', b1p: 'Access to lots reserved for professionals, not available in retail.',
        b2h: 'Regular delivery', b2p: 'Custom supply, in whole beans or ground, according to your pace and needs.',
        faq: {
          t: 'FAQ — Professionals',
          q0: 'What are the minimum orders?', a0: 'We work from 5 kg per reference for first orders. Recurring orders are adapted to your volumes based on your monthly consumption.',
          q1: 'Do you offer tastings before ordering?', a1: 'Yes, we organise tasting sessions in Paris to allow you to discover our selections before committing. Contact us to arrange an appointment.',
          q2: 'What are your delivery times and conditions?', a2: 'Delivery within 3 to 5 working days in mainland France. Tailored logistics solutions are available for partners outside France — contact us to discuss.'
        },
        box: { t: 'Would you like to work with us?', d: 'Contact us to discover our professional offers and arrange a first tasting.' }
      },
      cnt: { label: '05 — Contact', title: 'Let\'s talk coffee.', desc: 'A question, a project, a desire to share your passion for coffee? We are here.', c1h: 'Email', c2h: 'WhatsApp', c2p: 'Available Monday to Friday, 9am–6pm', c3h: 'Instagram' },
      leg: {
        label: '06 — Legal', title: 'Legal notice',
        b1h: 'Site publisher', b1p: 'Yunma<br>[Legal form] with capital of [X] €<br>Registered office: [Address], Paris, France<br>SIRET: [000 000 000 00000]<br>Email: hello@yunma.coffee',
        b2h: 'Hosting', b2p: 'This site is hosted by GitHub Pages, a service of GitHub Inc.,<br>88 Colin P Kelly Jr St, San Francisco, CA 94107, United States.',
        b3h: 'Intellectual property', b3p: 'All elements of this site (texts, images, logo, graphics) are the exclusive property of Yunma and are protected by French and international intellectual property laws. Any reproduction, even partial, is prohibited without prior authorisation.',
        b4h: 'Personal data', b4p: 'This site does not collect any personal data without your consent. Data transmitted via our contact forms is used solely to respond to your requests. In accordance with GDPR, you have the right of access, rectification and deletion of your data. To exercise these rights: hello@yunma.coffee.',
        b5h: 'Cookies', b5p: 'This site does not use tracking or advertising cookies.'
      },
      foot: { tag: 'Slow Coffee. Slow Life. — 慢咖啡，慢生活', copy: '© 2025 Yunma — All rights reserved · <a href="#legal">Legal notice</a>' }
    },

    de: {
      nav: { home: 'Startseite', coffees: 'Kaffees', story: 'Geschichte', pro: 'Profis', contact: 'Kontakt', legal: 'Impressum' },
      hero: {
        label: 'Yunnan, China — 云南',
        title: 'Slow Coffee.<br>Slow Life.',
        desc: 'Spezialitätenkaffees aus den Hochland-Terroirs des Yunnan, sorgfältig und mit Respekt für die Bohne in Paris geröstet.',
        cta: 'Unsere Kaffees entdecken',
        p1: 'Direktbezug', p2: 'Handwerkliche Röstung', p3: 'Hochland-Terroirs'
      },
      cafes: {
        label: '02 — Kaffees',
        title: 'Außergewöhnliche Terroirs,<br>einzigartige Kaffees.',
        desc: 'Jeder Kaffee ist das Ergebnis einer strengen Auswahl, eines aufrichtigen Dialogs mit den Produzenten und einer Röstung, die den einzigartigen Charakter jedes Yunnan-Terroirs zum Vorschein bringen soll.',
        k1: { origin: 'Yunnan — Baoshan', name: 'Berg-Arabica', notes: 'Noten von weißen Blumen, Zitrus, leichtem Honig', d1: 'Höhe: 1.800–2.000 m', d2: 'Aufbereitung: gewaschen', d3: 'Sorte: Catimor' },
        k2: { origin: 'Yunnan — Pu\'er', name: 'Natural process', notes: 'Noten von roten Früchten, Kakao, milden Gewürzen', d1: 'Höhe: 1.600–1.900 m', d2: 'Aufbereitung: natural', d3: 'Sorte: Bourbon' },
        k3: { origin: 'Yunnan — Dehong', name: 'Honey process', notes: 'Noten von Karamell, Haselnuss, Trockenfrüchten', d1: 'Höhe: 1.700–2.100 m', d2: 'Aufbereitung: honey', d3: 'Sorte: Bourbon / Typica' },
        faq: {
          t: 'Häufige Fragen',
          q0: 'Woher kommen Ihre Kaffees?', a0: 'Alle unsere Kaffees stammen aus Yunnan, einer Provinz im Südwesten Chinas, die für ihre außergewöhnlichen Hochlandterroirs bekannt ist. Wir arbeiten direkt mit lokalen Produzenten, ohne Zwischenhändler, um Qualität und Rückverfolgbarkeit zu gewährleisten.',
          q1: 'Wie rösten Sie Ihre Kaffees?', a1: 'Wir rösten in Paris handwerklich in kleinen Serien. Jedes Röstprofil wird entwickelt, um das aromatische Potenzial der Bohne bestmöglich zu entfalten — helle bis mittlere Röstungen, die den Ursprung respektieren.',
          q2: 'Wie bereite ich Ihre Kaffees am besten zu?', a2: 'Unsere Kaffees entfalten sich am besten mit sanften Zubereitungsmethoden: V60, Chemex, AeroPress oder French Press. Unsere mittelgerösteten Auswahlen eignen sich auch sehr gut als Espresso. Wir empfehlen gefiltertes Wasser bei 92–94 °C.',
          q3: 'Sind Ihre Kaffees bio- oder fair-trade-zertifiziert?', a3: 'Wir bevorzugen einen verantwortungsvollen und transparenten Sourcing-Ansatz, anstatt uns ausschließlich auf Zertifizierungen zu verlassen. Unsere Partnererzeuger praktizieren nachhaltige Landwirtschaft, und wir besuchen sie regelmäßig vor Ort.',
          q4: 'Wie kann ich Ihre Kaffees bestellen?', a4: 'Kontaktieren Sie uns direkt per E-Mail oder WhatsApp. Wir beraten Sie gerne zu den verfügbaren Auswahlen und arrangieren Ihre Bestellung. Lieferung innerhalb von 3–5 Werktagen.'
        },
        box: { t: 'Haben Sie Fragen zu unseren Kaffees?', d: 'Unser Team steht Ihnen für Beratung und alle Ihre Fragen zur Verfügung.' }
      },
      story: {
        label: '03 — Geschichte',
        title: 'Jede Tasse<br>erzählt eine Geschichte.',
        b1h: 'Der Ursprung des Projekts', b1p: 'Yunma entstand aus einer Faszination für Yunnan, eine Provinz im Südwesten Chinas mit spektakulären Landschaften und jahrtausendealten Kulturen. Auf einer ersten Reise entdeckten wir Kaffees von überraschender Qualität, die von leidenschaftlichen Produzentenfamilien in großer Höhe angebaut werden — und in Europa weitgehend unbekannt sind.',
        b2h: 'Unser Engagement', b2p: 'Yunma (云马, „Wolkenpferd") verkörpert unseren Wunsch, eine direkte Brücke zwischen den Yunnan-Produzenten und Kaffeeliebhabern in Frankreich zu schaffen. Wir wählen persönlich jedes Los aus, besuchen die Terroirs und rösten in Paris mit der Sorgfalt, die jede Bohne verdient.',
        b3h: 'Slow Coffee. Slow Life.', b3p: 'Unsere Philosophie ist einfach: sich Zeit nehmen. Zeit nehmen, um den Ursprung zu verstehen, die Röstung zu beherrschen und jede Tasse zu genießen. Kaffee als Einladung, langsamer zu werden, präsent zu sein, den Moment zu schätzen.',
        faq: {
          t: 'Fragen zu unserer Geschichte',
          q0: 'Warum Yunnan?', a0: 'Yunnan ist die historische Wiege des Kaffees in China. Seine geografischen Bedingungen — Höhenlage, tropisches Bergklima, reiche Böden — bieten ein ideales Terroir für außergewöhnliche Arabica-Kaffees. Es ist auch eine Region mit außerordentlicher kultureller Vielfalt, die uns tief inspiriert.',
          q1: 'Was bedeutet „Yunma"?', a1: 'Yunma (云马) setzt sich aus 云 (yún, „Wolke") und 马 (mǎ, „Pferd") zusammen. Das Wolkenpferd evoziert sowohl die Morgennebel, die die Hochlandplantagen einhüllen, als auch die Freiheit eines direkten Sourcings ohne Grenzen.',
          q2: 'Wie wählen Sie Ihre Produzenten aus?', a2: 'Jede Partnerschaft entsteht aus einer Begegnung, einer Verkostung, einem Austausch über Praktiken und Werte. Wir bevorzugen Produzenten, die unsere Vision einer respektvollen Landwirtschaft teilen. Wir besuchen die Betriebe und bauen dauerhafte Beziehungen auf.',
          q3: 'Wo rösten Sie Ihre Kaffees?', a3: 'Wir rösten in Paris, in einer eigenen Werkstatt, wo jede Charge sorgfältig überwacht wird. Die Nähe ermöglicht es uns, schnell auf Neuzugänge zu reagieren und die Frische unserer Kaffees zu gewährleisten.'
        }
      },
      pro: {
        label: '04 — Profis',
        title: 'Das Beste<br>für Ihre Kunden.',
        desc: 'Sie sind ein Café, Restaurant, Hotel, Feinkostladen oder Büro? Yunma begleitet Sie mit exklusiven Auswahlen, angepasster Logistik und persönlichem Support.',
        b1h: 'Exklusive Auswahlen', b1p: 'Zugang zu Losen, die für Profis reserviert sind und im Einzelhandel nicht erhältlich sind.',
        b2h: 'Regelmäßige Lieferung', b2p: 'Maßgeschneiderte Versorgung, als ganze Bohnen oder gemahlen, nach Ihrem Rhythmus und Bedarf.',
        faq: {
          t: 'FAQ — Profis',
          q0: 'Was sind die Mindestbestellmengen?', a0: 'Wir arbeiten ab 5 kg pro Referenz für Erstbestellungen. Wiederkehrende Bestellungen werden entsprechend Ihrem Monatsverbrauch angepasst.',
          q1: 'Bieten Sie Verkostungen vor der Bestellung an?', a1: 'Ja, wir organisieren Verkostungssitzungen in Paris, damit Sie unsere Auswahlen kennenlernen können, bevor Sie sich verpflichten. Kontaktieren Sie uns, um einen Termin zu vereinbaren.',
          q2: 'Was sind Ihre Lieferzeiten und -bedingungen?', a2: 'Lieferung innerhalb von 3 bis 5 Werktagen in Frankreich. Angepasste Logistiklösungen sind für Partner außerhalb Frankreichs verfügbar — kontaktieren Sie uns, um dies zu besprechen.'
        },
        box: { t: 'Möchten Sie mit uns zusammenarbeiten?', d: 'Kontaktieren Sie uns, um unsere professionellen Angebote zu entdecken und eine erste Verkostung zu organisieren.' }
      },
      cnt: { label: '05 — Kontakt', title: 'Reden wir über Kaffee.', desc: 'Eine Frage, ein Projekt, der Wunsch, Ihre Kaffeebegeisterung zu teilen? Wir sind da.', c1h: 'E-Mail', c2h: 'WhatsApp', c2p: 'Erreichbar Montag bis Freitag, 9–18 Uhr', c3h: 'Instagram' },
      leg: {
        label: '06 — Impressum', title: 'Impressum',
        b1h: 'Herausgeber', b1p: 'Yunma<br>[Rechtsform] mit einem Kapital von [X] €<br>Sitz: [Adresse], Paris, Frankreich<br>SIRET: [000 000 000 00000]<br>E-Mail: hello@yunma.coffee',
        b2h: 'Hosting', b2p: 'Diese Website wird von GitHub Pages, einem Dienst von GitHub Inc.,<br>88 Colin P Kelly Jr St, San Francisco, CA 94107, USA, gehostet.',
        b3h: 'Geistiges Eigentum', b3p: 'Alle Elemente dieser Website (Texte, Bilder, Logo, Grafiken) sind das ausschließliche Eigentum von Yunma und werden durch französische und internationale Gesetze zum geistigen Eigentum geschützt. Jede Reproduktion, auch auszugsweise, ist ohne vorherige Genehmigung verboten.',
        b4h: 'Personenbezogene Daten', b4p: 'Diese Website erhebt keine personenbezogenen Daten ohne Ihre Einwilligung. Über unsere Kontaktformulare übermittelte Daten werden ausschließlich zur Beantwortung Ihrer Anfragen verwendet. Gemäß DSGVO haben Sie das Recht auf Zugang, Berichtigung und Löschung Ihrer Daten. Um diese Rechte auszuüben: hello@yunma.coffee.',
        b5h: 'Cookies', b5p: 'Diese Website verwendet keine Tracking- oder Werbe-Cookies.'
      },
      foot: { tag: 'Slow Coffee. Slow Life. — 慢咖啡，慢生活', copy: '© 2025 Yunma — Alle Rechte vorbehalten · <a href="#legal">Impressum</a>' }
    },

    it: {
      nav: { home: 'Home', coffees: 'Caffè', story: 'Storia', pro: 'Professionisti', contact: 'Contatto', legal: 'Note legali' },
      hero: {
        label: 'Yunnan, Cina — 云南',
        title: 'Slow Coffee.<br>Slow Life.',
        desc: 'Caffè di specialità provenienti dai terroir d\'alta quota dello Yunnan, tostati a Parigi con cura e rispetto per il chicco.',
        cta: 'Scopri i nostri caffè',
        p1: 'Approvvigionamento diretto', p2: 'Tostatura artigianale', p3: 'Terroir d\'alta quota'
      },
      cafes: {
        label: '02 — Caffè',
        title: 'Terroir d\'eccezione,<br>caffè unici.',
        desc: 'Ogni caffè è il frutto di una selezione rigorosa, di un dialogo sincero con i produttori e di una tostatura pensata per rivelare il carattere unico di ogni terroir dello Yunnan.',
        k1: { origin: 'Yunnan — Baoshan', name: 'Arabica di montagna', notes: 'Note di fiori bianchi, agrumi, miele leggero', d1: 'Quota: 1.800–2.000 m', d2: 'Processo: lavato', d3: 'Varietà: Catimor' },
        k2: { origin: 'Yunnan — Pu\'er', name: 'Natural process', notes: 'Note di frutti rossi, cacao, spezie dolci', d1: 'Quota: 1.600–1.900 m', d2: 'Processo: naturale', d3: 'Varietà: Bourbon' },
        k3: { origin: 'Yunnan — Dehong', name: 'Honey process', notes: 'Note di caramello, nocciola, frutta secca', d1: 'Quota: 1.700–2.100 m', d2: 'Processo: honey', d3: 'Varietà: Bourbon / Typica' },
        faq: {
          t: 'Domande frequenti',
          q0: 'Da dove provengono i vostri caffè?', a0: 'Tutti i nostri caffè provengono dallo Yunnan, una provincia nel sud-ovest della Cina rinomata per i suoi eccezionali terroir d\'alta quota. Lavoriamo direttamente con i produttori locali, senza intermediari, per garantire qualità e tracciabilità.',
          q1: 'Come tostate i vostri caffè?', a1: 'Tostiamo a Parigi, in modo artigianale, in piccoli lotti. Ogni profilo di tostatura è sviluppato per rivelare al meglio il potenziale aromatico del chicco — tostature chiare e medie, rispettose dell\'origine.',
          q2: 'Come preparare al meglio i vostri caffè?', a2: 'I nostri caffè si esprimono pienamente con i metodi delicati: V60, Chemex, AeroPress o French press. Le nostre selezioni a tostatura media si adattano molto bene anche all\'espresso. Raccomandiamo acqua filtrata a 92–94 °C.',
          q3: 'I vostri caffè sono certificati bio o equosolidali?', a3: 'Privilegiamo un approccio di approvvigionamento responsabile e trasparente piuttosto che fare affidamento esclusivamente sulle certificazioni. I nostri produttori partner seguono pratiche agricole sostenibili e li visitiamo regolarmente sul posto.',
          q4: 'Come ordinare i vostri caffè?', a4: 'Contattateci direttamente via email o WhatsApp. Saremo lieti di consigliarvi sulle selezioni disponibili e di organizzare il vostro ordine. Consegna in Francia entro 3–5 giorni lavorativi.'
        },
        box: { t: 'Una domanda sui nostri caffè?', d: 'Il nostro team è disponibile per consigliarvi e rispondere a tutte le vostre domande.' }
      },
      story: {
        label: '03 — Storia',
        title: 'Ogni tazza<br>racconta una storia.',
        b1h: 'L\'origine del progetto', b1p: 'Yunma è nata da una fascinazione per lo Yunnan, una provincia nel sud-ovest della Cina con paesaggi spettacolari e culture millenarie. Durante un primo viaggio, abbiamo scoperto caffè di sorprendente qualità, coltivati in quota da famiglie di produttori appassionati — e largamente sconosciuti in Europa.',
        b2h: 'Il nostro impegno', b2p: 'Yunma (云马, \'cavallo delle nuvole\') incarna la nostra volontà di creare un ponte diretto tra i produttori dello Yunnan e gli amanti del caffè in Francia. Selezioniamo personalmente ogni lotto, visitiamo i terroir e tostiamo a Parigi con la cura che ogni chicco merita.',
        b3h: 'Slow Coffee. Slow Life.', b3p: 'La nostra filosofia è semplice: prendersi il tempo. Prendersi il tempo di capire l\'origine, di padroneggiare la tostatura e di assaporare ogni tazza. Il caffè come invito a rallentare, ad essere presenti, ad apprezzare l\'istante.',
        faq: {
          t: 'Domande sulla nostra storia',
          q0: 'Perché lo Yunnan?', a0: 'Lo Yunnan è la culla storica del caffè in Cina. Le sue condizioni geografiche — altitudine, clima tropicale di montagna, suoli ricchi — offrono un terroir ideale per arabica d\'eccezione. È anche una regione di straordinaria diversità culturale che ci ispira profondamente.',
          q1: 'Cosa significa \'Yunma\'?', a1: 'Yunma (云马) è composto da 云 (yún, \'nuvola\') e 马 (mǎ, \'cavallo\'). Il cavallo delle nuvole evoca sia le brume mattutine che avvolgono le piantagioni in quota sia la libertà di un approvvigionamento diretto, senza frontiere.',
          q2: 'Come scegliete i vostri produttori?', a2: 'Ogni partnership nasce da un incontro, una degustazione, uno scambio su pratiche e valori. Preferiamo produttori che condividono la nostra visione di un\'agricoltura rispettosa. Visitiamo le aziende e costruiamo relazioni durature.',
          q3: 'Dove tostate i vostri caffè?', a3: 'Tostiamo a Parigi, in un laboratorio dedicato dove ogni lotto viene seguito con attenzione. La prossimità ci permette di reagire rapidamente agli arrivi e di garantire la freschezza dei nostri caffè.'
        }
      },
      pro: {
        label: '04 — Professionisti',
        title: 'Offrire il meglio<br>ai vostri clienti.',
        desc: 'Siete un caffè, ristorante, hotel, gastronomia o ufficio? Yunma vi accompagna con selezioni esclusive, una logistica adattata e un supporto personalizzato.',
        b1h: 'Selezioni esclusive', b1p: 'Accesso a lotti riservati ai professionisti, non disponibili al dettaglio.',
        b2h: 'Consegna regolare', b2p: 'Approvvigionamento su misura, in grani o macinato, secondo il vostro ritmo e le vostre esigenze.',
        faq: {
          t: 'FAQ — Professionisti',
          q0: 'Quali sono gli ordini minimi?', a0: 'Lavoriamo a partire da 5 kg per referenza per i primi ordini. Gli ordini ricorrenti sono adattati ai vostri volumi in base al consumo mensile.',
          q1: 'Offrite degustazioni prima dell\'ordine?', a1: 'Sì, organizziamo sessioni di degustazione a Parigi per permettervi di scoprire le nostre selezioni prima di impegnarvi. Contattateci per concordare un appuntamento.',
          q2: 'Quali sono i vostri tempi e condizioni di consegna?', a2: 'Consegna entro 3–5 giorni lavorativi in Francia. Soluzioni logistiche adattate sono disponibili per i partner al di fuori della Francia — contattateci per discuterne.'
        },
        box: { t: 'Volete lavorare con noi?', d: 'Contattateci per scoprire le nostre offerte professionali e organizzare una prima degustazione.' }
      },
      cnt: { label: '05 — Contatto', title: 'Parliamo di caffè.', desc: 'Una domanda, un progetto, il desiderio di condividere la vostra passione per il caffè? Siamo qui.', c1h: 'Email', c2h: 'WhatsApp', c2p: 'Disponibili da lunedì a venerdì, 9h–18h', c3h: 'Instagram' },
      leg: {
        label: '06 — Note legali', title: 'Note legali',
        b1h: 'Editore del sito', b1p: 'Yunma<br>[Forma giuridica] con un capitale di [X] €<br>Sede: [Indirizzo], Parigi, Francia<br>SIRET: [000 000 000 00000]<br>Email: hello@yunma.coffee',
        b2h: 'Hosting', b2p: 'Questo sito è ospitato da GitHub Pages, un servizio di GitHub Inc.,<br>88 Colin P Kelly Jr St, San Francisco, CA 94107, Stati Uniti.',
        b3h: 'Proprietà intellettuale', b3p: 'Tutti gli elementi di questo sito (testi, immagini, logo, grafica) sono di proprietà esclusiva di Yunma e sono protetti dalle leggi francesi e internazionali sulla proprietà intellettuale. Qualsiasi riproduzione, anche parziale, è vietata senza autorizzazione preventiva.',
        b4h: 'Dati personali', b4p: 'Questo sito non raccoglie dati personali senza il vostro consenso. I dati trasmessi tramite i nostri moduli di contatto sono utilizzati esclusivamente per rispondere alle vostre richieste. In conformità con il GDPR, avete il diritto di accesso, rettifica e cancellazione dei vostri dati. Per esercitare questi diritti: hello@yunma.coffee.',
        b5h: 'Cookie', b5p: 'Questo sito non utilizza cookie di tracciamento o pubblicitari.'
      },
      foot: { tag: 'Slow Coffee. Slow Life. — 慢咖啡，慢生活', copy: '© 2025 Yunma — Tutti i diritti riservati · <a href="#legal">Note legali</a>' }
    },

    es: {
      nav: { home: 'Inicio', coffees: 'Cafés', story: 'Historia', pro: 'Profesionales', contact: 'Contacto', legal: 'Legal' },
      hero: {
        label: 'Yunnan, China — 云南',
        title: 'Slow Coffee.<br>Slow Life.',
        desc: 'Cafés de especialidad procedentes de los terruños de alta altitud del Yunnan, tostados en París con cuidado y respeto por el grano.',
        cta: 'Descubrir nuestros cafés',
        p1: 'Abastecimiento directo', p2: 'Tostado artesanal', p3: 'Terruños de alta altitud'
      },
      cafes: {
        label: '02 — Cafés',
        title: 'Terruños excepcionales,<br>cafés únicos.',
        desc: 'Cada café es el fruto de una selección rigurosa, un diálogo sincero con los productores y un tostado pensado para revelar el carácter único de cada terruño yunnanés.',
        k1: { origin: 'Yunnan — Baoshan', name: 'Arábica de montaña', notes: 'Notas de flores blancas, cítricos, miel suave', d1: 'Altitud: 1.800–2.000 m', d2: 'Proceso: lavado', d3: 'Variedad: Catimor' },
        k2: { origin: 'Yunnan — Pu\'er', name: 'Natural process', notes: 'Notas de frutos rojos, cacao, especias suaves', d1: 'Altitud: 1.600–1.900 m', d2: 'Proceso: natural', d3: 'Variedad: Bourbon' },
        k3: { origin: 'Yunnan — Dehong', name: 'Honey process', notes: 'Notas de caramelo, avellana, frutos secos', d1: 'Altitud: 1.700–2.100 m', d2: 'Proceso: honey', d3: 'Variedad: Bourbon / Typica' },
        faq: {
          t: 'Preguntas frecuentes',
          q0: '¿De dónde vienen sus cafés?', a0: 'Todos nuestros cafés provienen del Yunnan, una provincia en el suroeste de China reconocida por sus excepcionales terruños de alta altitud. Trabajamos directamente con productores locales, sin intermediarios, para garantizar calidad y trazabilidad.',
          q1: '¿Cómo tuestan sus cafés?', a1: 'Tostamos en París, de forma artesanal, en pequeñas series. Cada perfil de tueste se desarrolla para revelar al máximo el potencial aromático del grano — tuestes claros a medios, respetuosos con el origen.',
          q2: '¿Cómo preparar mejor sus cafés?', a2: 'Nuestros cafés se expresan plenamente en métodos suaves: V60, Chemex, AeroPress o prensa francesa. Nuestras selecciones de tueste medio se adaptan también muy bien al espresso. Recomendamos agua filtrada a 92–94 °C.',
          q3: '¿Sus cafés están certificados ecológicos o de comercio justo?', a3: 'Priorizamos un enfoque de abastecimiento responsable y transparente en lugar de depender únicamente de certificaciones. Nuestros productores socios practican una agricultura sostenible y los visitamos regularmente in situ.',
          q4: '¿Cómo pedir sus cafés?', a4: 'Contáctenos directamente por email o WhatsApp. Estaremos encantados de asesorarle sobre las selecciones disponibles y organizar su pedido. Entrega en Francia en 3–5 días hábiles.'
        },
        box: { t: '¿Una pregunta sobre nuestros cafés?', d: 'Nuestro equipo está disponible para asesorarle y responder a todas sus preguntas.' }
      },
      story: {
        label: '03 — Historia',
        title: 'Cada taza<br>cuenta una historia.',
        b1h: 'El origen del proyecto', b1p: 'Yunma nació de una fascinación por el Yunnan, una provincia en el suroeste de China con paisajes espectaculares y culturas milenarias. En un primer viaje, descubrimos cafés de sorprendente calidad, cultivados en altitud por familias de productores apasionados — y ampliamente desconocidos en Europa.',
        b2h: 'Nuestro compromiso', b2p: 'Yunma (云马, \'caballo de las nubes\') encarna nuestra voluntad de crear un puente directo entre los productores del Yunnan y los amantes del café en Francia. Seleccionamos personalmente cada lote, visitamos los terruños y tostamos en París con el cuidado que merece cada grano.',
        b3h: 'Slow Coffee. Slow Life.', b3p: 'Nuestra filosofía es simple: tomarse el tiempo. Tomarse el tiempo de entender el origen, dominar el tueste y saborear cada taza. El café como invitación a ir más despacio, a estar presente, a apreciar el momento.',
        faq: {
          t: 'Preguntas sobre nuestra historia',
          q0: '¿Por qué el Yunnan?', a0: 'El Yunnan es la cuna histórica del café en China. Sus condiciones geográficas — altitud, clima tropical de montaña, suelos ricos — ofrecen un terruño ideal para arábicas de excepción. También es una región de extraordinaria diversidad cultural que nos inspira profundamente.',
          q1: '¿Qué significa \'Yunma\'?', a1: 'Yunma (云马) se compone de 云 (yún, \'nube\') y 马 (mǎ, \'caballo\'). El caballo de las nubes evoca tanto las brumas matutinas que envuelven las plantaciones en altitud como la libertad de un abastecimiento directo, sin fronteras.',
          q2: '¿Cómo eligen a sus productores?', a2: 'Cada asociación nace de un encuentro, una degustación, un intercambio sobre prácticas y valores. Preferimos productores que compartan nuestra visión de una agricultura respetuosa. Visitamos las explotaciones y construimos relaciones duraderas.',
          q3: '¿Dónde tuestan sus cafés?', a3: 'Tostamos en París, en un taller dedicado donde cada lote se sigue con atención. La proximidad nos permite reaccionar rápidamente a las llegadas y garantizar la frescura de nuestros cafés.'
        }
      },
      pro: {
        label: '04 — Profesionales',
        title: 'Ofrecer lo mejor<br>a sus clientes.',
        desc: '¿Es usted un café, restaurante, hotel, tienda gourmet o empresa? Yunma le acompaña con selecciones exclusivas, una logística adaptada y un soporte personalizado.',
        b1h: 'Selecciones exclusivas', b1p: 'Acceso a lotes reservados para profesionales, no disponibles en retail.',
        b2h: 'Entrega regular', b2p: 'Abastecimiento a medida, en grano o molido, según su ritmo y necesidades.',
        faq: {
          t: 'FAQ — Profesionales',
          q0: '¿Cuáles son los pedidos mínimos?', a0: 'Trabajamos a partir de 5 kg por referencia para los primeros pedidos. Los pedidos recurrentes se adaptan a sus volúmenes según su consumo mensual.',
          q1: '¿Ofrecen degustaciones antes del pedido?', a1: 'Sí, organizamos sesiones de degustación en París para que pueda descubrir nuestras selecciones antes de comprometerse. Contáctenos para concertar una cita.',
          q2: '¿Cuáles son sus plazos y condiciones de entrega?', a2: 'Entrega en 3 a 5 días hábiles en Francia metropolitana. Soluciones logísticas adaptadas están disponibles para socios fuera de Francia — contáctenos para comentarlo.'
        },
        box: { t: '¿Desea trabajar con nosotros?', d: 'Contáctenos para descubrir nuestras ofertas profesionales y organizar una primera degustación.' }
      },
      cnt: { label: '05 — Contacto', title: 'Hablemos de café.', desc: '¿Una pregunta, un proyecto, un deseo de compartir su pasión por el café? Estamos aquí.', c1h: 'Email', c2h: 'WhatsApp', c2p: 'Disponible de lunes a viernes, 9h–18h', c3h: 'Instagram' },
      leg: {
        label: '06 — Legal', title: 'Aviso legal',
        b1h: 'Editor del sitio', b1p: 'Yunma<br>[Forma jurídica] con un capital de [X] €<br>Domicilio social: [Dirección], París, Francia<br>SIRET: [000 000 000 00000]<br>Email: hello@yunma.coffee',
        b2h: 'Alojamiento', b2p: 'Este sitio está alojado por GitHub Pages, un servicio de GitHub Inc.,<br>88 Colin P Kelly Jr St, San Francisco, CA 94107, Estados Unidos.',
        b3h: 'Propiedad intelectual', b3p: 'Todos los elementos de este sitio (textos, imágenes, logo, gráficos) son propiedad exclusiva de Yunma y están protegidos por las leyes francesas e internacionales de propiedad intelectual. Cualquier reproducción, incluso parcial, está prohibida sin autorización previa.',
        b4h: 'Datos personales', b4p: 'Este sitio no recopila datos personales sin su consentimiento. Los datos transmitidos a través de nuestros formularios de contacto se utilizan únicamente para responder a sus solicitudes. De acuerdo con el RGPD, tiene derecho de acceso, rectificación y supresión de sus datos. Para ejercer estos derechos: hello@yunma.coffee.',
        b5h: 'Cookies', b5p: 'Este sitio no utiliza cookies de seguimiento o publicitarias.'
      },
      foot: { tag: 'Slow Coffee. Slow Life. — 慢咖啡，慢生活', copy: '© 2025 Yunma — Todos los derechos reservados · <a href="#legal">Aviso legal</a>' }
    }
  };

  /* ════════════════════════════════════
     i18n ENGINE
  ════════════════════════════════════ */
  function getT(lang, key) {
    var parts = key.split('.');
    var obj = T[lang];
    for (var i = 0; i < parts.length; i++) {
      if (!obj) return key;
      obj = obj[parts[i]];
    }
    return obj != null ? obj : key;
  }

  function setLanguage(lang) {
    if (!T[lang]) lang = 'fr';

    /* Update html lang attribute */
    document.documentElement.lang = lang;

    /* Update current lang label */
    document.getElementById('langCurrent').textContent = lang.toUpperCase();

    /* Update active option */
    document.querySelectorAll('.lang-opt').forEach(function (btn) {
      btn.classList.toggle('is-active', btn.getAttribute('data-lang') === lang);
    });

    /* Update plain-text nodes */
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var val = getT(lang, el.getAttribute('data-i18n'));
      el.textContent = val;
    });

    /* Update HTML nodes */
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var val = getT(lang, el.getAttribute('data-i18n-html'));
      el.innerHTML = val;
    });

    /* Persist */
    try { localStorage.setItem('yunma-lang', lang); } catch (e) {}
  }

  /* ════════════════════════════════════
     LANGUAGE SWITCHER
  ════════════════════════════════════ */
  var langBtn      = document.getElementById('langBtn');
  var langDropdown = document.getElementById('langDropdown');

  function openLang() {
    langBtn.setAttribute('aria-expanded', 'true');
    langDropdown.classList.add('is-open');
    langDropdown.setAttribute('aria-hidden', 'false');
  }

  function closeLang() {
    langBtn.setAttribute('aria-expanded', 'false');
    langDropdown.classList.remove('is-open');
    langDropdown.setAttribute('aria-hidden', 'true');
  }

  langBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    langBtn.getAttribute('aria-expanded') === 'true' ? closeLang() : openLang();
  });

  document.querySelectorAll('.lang-opt').forEach(function (btn) {
    btn.addEventListener('click', function () {
      setLanguage(btn.getAttribute('data-lang'));
      closeLang();
    });
  });

  document.addEventListener('click', function () { closeLang(); });
  langDropdown.addEventListener('click', function (e) { e.stopPropagation(); });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && langBtn.getAttribute('aria-expanded') === 'true') {
      closeLang();
      langBtn.focus();
    }
  });

  /* ════════════════════════════════════
     INIT LANGUAGE
  ════════════════════════════════════ */
  var savedLang = 'fr';
  try { savedLang = localStorage.getItem('yunma-lang') || 'fr'; } catch (e) {}
  setLanguage(savedLang);

  /* ════════════════════════════════════
     BURGER MENU
  ════════════════════════════════════ */
  var burgerBtn   = document.getElementById('burgerBtn');
  var navPanel    = document.getElementById('navPanel');
  var navOverlay  = document.getElementById('navOverlay');
  var navCloseBtn = document.getElementById('navCloseBtn');
  var navLinks    = document.querySelectorAll('.nav-link');
  var header      = document.getElementById('site-header');

  function openNav() {
    burgerBtn.setAttribute('aria-expanded', 'true');
    burgerBtn.classList.add('is-open');
    navPanel.classList.add('is-open');
    navPanel.setAttribute('aria-hidden', 'false');
    navOverlay.classList.add('is-visible');
    navOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeNav() {
    burgerBtn.setAttribute('aria-expanded', 'false');
    burgerBtn.classList.remove('is-open');
    navPanel.classList.remove('is-open');
    navPanel.setAttribute('aria-hidden', 'true');
    navOverlay.classList.remove('is-visible');
    navOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  burgerBtn.addEventListener('click', openNav);
  navCloseBtn.addEventListener('click', closeNav);
  navOverlay.addEventListener('click', closeNav);

  navLinks.forEach(function (link) {
    link.addEventListener('click', closeNav);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && navPanel.classList.contains('is-open')) {
      closeNav();
      burgerBtn.focus();
    }
  });

  /* ════════════════════════════════════
     HEADER SCROLL SHADOW
  ════════════════════════════════════ */
  function onScroll() {
    header.classList.toggle('scrolled', window.scrollY > 40);
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ════════════════════════════════════
     FAQ ACCORDION
  ════════════════════════════════════ */
  var faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(function (item) {
    var btn    = item.querySelector('.faq-q');
    var answer = item.querySelector('.faq-a');
    if (!btn || !answer) return;

    btn.addEventListener('click', function () {
      var isOpen = btn.getAttribute('aria-expanded') === 'true';

      faqItems.forEach(function (other) {
        var ob = other.querySelector('.faq-q');
        var oa = other.querySelector('.faq-a');
        if (ob && oa) {
          ob.setAttribute('aria-expanded', 'false');
          oa.classList.remove('is-open');
        }
      });

      if (!isOpen) {
        btn.setAttribute('aria-expanded', 'true');
        answer.classList.add('is-open');
      }
    });
  });

  /* ════════════════════════════════════
     SMOOTH SCROLL
  ════════════════════════════════════ */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

})();
