# Handoff operativo

## Data
2026-07-01

## Modifiche effettuate
- Inizializzata struttura repository per sito vetrina.
- Creati file base per analisi intervista, strategia e copy.
- Aggiunta cartella input per PDF cliente.
- Aggiunto .gitignore con esclusione .DS_Store.
- Convertito il questionario cliente in markdown strutturato.
- Integrate le risposte mancanti confermate dal cliente.
- Compilata la sintesi operativa in docs/brief/intervista-cliente.md.
- Inseriti i copy ricevuti dal cliente in docs/contenuti/copy-bozze.md.
- Retrofront architetturale: eliminato percorso WordPress, deciso sito statico Astro + Tailwind.
- Rimossa priorita articoli/posting dal perimetro MVP.
- Rimossi i riferimenti non piu utili (plugin WordPress e documenti collegati).
- Creata cartella dedicata al logo cliente in assets/brand/logo.
- Analizzate le bozze IA in docs/stitch per mappare pattern UI e sezioni riusabili.
- Creata roadmap tecnica Astro + Tailwind in docs/strategia/roadmap-astro-tailwind.md.
- Eseguita Fase 1: scaffolding Astro + Tailwind in root repository.
- Integrati token base design system in src/styles/global.css.
- Creata struttura iniziale: src/layouts, src/components/sections, src/content/site.
- Aggiunto BaseLayout con font, meta base e skip link accessibile.
- Implementato lo strato condiviso Fase 2: SiteHeader, SiteFooter, Container e SectionHeading.
- BaseLayout ora include header/footer globali, canonical URL e meta Open Graph di base.
- Aggiornate le utility globali per skip link, eyebrow testuale e comportamento link coerente.
- Create pagine stub MVP in src/pages (home, chi-sono, servizi, aree-di-intervento, faq, contatti).
- Build di verifica completata con successo (6 pagine statiche generate).
- Eseguita Fase 3: create pagine MVP complete con sezioni componentizzate e contenuti da JSON.
- Aggiunti file contenuto dedicati in src/content/site (home, chi-sono, servizi, aree, faq, contatti).
- Creati componenti sezione riusabili per Home, Chi sono, Servizi, Aree, FAQ e Contatti.
- Introdotti componenti condivisi CtaBanner, FaqAccordion e ContactForm.
- Uniformate CTA principali su tutte le pagine (contatti + WhatsApp).
- Build post-Fase 3 completata con successo (6 pagine statiche generate).
- Eseguita Fase 4 (MVP): integrazione contatti con placeholder Google Form.
- Aggiunto URL centralizzato contactFormUrl in src/content/site/site.json.
- Aggiornate CTA principali (Home, Servizi e banner pagine) verso Google Form + WhatsApp.
- Convertita la sezione contatti da form inline a CTA diretta verso Google Form in nuova scheda.
- Build post-Fase 4 completata con successo (6 pagine statiche generate).
- Eseguita Fase 5: audit responsive/accessibilita con rifiniture su header, footer e focus states globali.
- Aggiunta navigazione mobile accessibile con menu a details/summary e CTA Prenota sempre visibile.
- Migliorata raggiungibilita pagine aggiungendo i link principali anche nel footer.
- Introdotti stili focus-visible coerenti per link, bottoni e controlli form.
- Aggiunto supporto preferenza utente "prefers-reduced-motion".
- Eseguito Lighthouse su server preview (build production-like) e salvato report in docs/strategia/lighthouse-phase5-preview.json.
- Risultati Lighthouse preview Home: Performance 98, Accessibility 100, Best Practices 100, SEO 100.
- Definito blueprint scenografico Stitch -> Astro in docs/strategia/scenografia-stitch-to-astro.md con mapping componenti, token e piano implementativo.
- Eseguito redesign scenografico full-site (Home + pagine interne) allineato al blueprint Stitch -> Astro.
- Potenziati token e utility globali in src/styles/global.css (atmosfere, card elevate/highlight, bottoni hero, section band, reveal motion con prefers-reduced-motion).
- Aggiornati layout e layer condivisi (BaseLayout, SectionHeading, SiteHeader, SiteFooter) con gerarchia editoriale e migliore continuita visiva.
- Rework completo sezioni Home: HomeHero split scenografica, HomeAreasCards con card evidenziata, HomeTrustPillars con micro-interazioni, CtaBanner rafforzata.
- Applicati pattern coerenti alle pagine interne: Servizi, Aree, Chi sono, FAQ, Contatti.
- Rimossi link WhatsApp hardcoded in alcune CTA pagina, ora centralizzati tramite site.whatsappNumber.
- Build di verifica post-redesign completata con successo (6 pagine statiche generate).
- Eseguito secondo pass di art direction su feedback: ridotta dominanza del verde, maggiore uso di lavanda/sabbia in accenti e componenti.
- Ribilanciati token cromatici globali e ombre in chiave Serene Balance (secondary/tertiary piu presenti in gradient, card highlight, hover, CTA).
- Riallineati stati attivi e titolazioni principali (header, section heading, card titoli, footer link) su accenti secondari per migliorare il bilanciamento visivo.
- Build post-pass cromatico completata con successo (6 pagine statiche generate).
- Integrato asset brand reale in public/brand/logo-annachiara.jpg e collegato al sito tramite src/content/site/site.json (chiave brandImage).
- Inserito logo nel SiteHeader e ritratto/immagine brand nel visual block della HomeHero.
- Corretto spacing verticale del blocco successivo all'hero (HomeAreasCards non e piu senza top padding).
- Ribilanciata ulteriormente la palette in ottica multi-colore: lavanda + verde + sabbia distribuiti per sezioni, titoli e hover.
- Build finale di validazione completata con successo (6 pagine statiche generate).
- Home aggiornata: sezione Aree di intervento riportata a layout 3 colonne uniforme (senza card spanning).
- Aggiunta CTA sezione "Scopri di piu sulle aree" con link alla pagina /aree-di-intervento, configurata in src/content/site/home.json.
- Build di verifica post-modifica home completata con successo (6 pagine statiche generate).
- Pagina Aree di intervento: griglia normalizzata a 3 colonne su desktop (6 ambiti in 2 righe), senza card evidenziata con col-span.
- Header alleggerito e reso full-width (container esteso con padding responsive dedicato).
- Ripristinato padding verticale standard rimuovendo gli override pt-0 in sezioni interne (FAQ, Contatti, AboutPillars).
- Build di validazione post-refine layout completata con successo (6 pagine statiche generate).
- Home: introdotte variazioni lievi ma coerenti tra sezioni (hero atmosferica, aree con band cream, trust con band lilla soft) per spezzare la continuita visiva.
- CTA/Banner aggiornata in versione chiara: sfondo lilla (secondary-container), testi verdi (primary) e bottoni ribilanciati su contrasto chiaro.
- Build post-aggiornamento stile homepage completata con successo (6 pagine statiche generate).
- HomeHero: rimossa immagine brand usata come sfondo del visual; introdotta card piccola dedicata con logo (radius + bordo + shadow) sopra il contenuto testuale del visual.
- HomeHero: card logo ulteriormente ingrandita (immagine e contenitore) per maggiore leggibilita e presenza visuale.
- Verifica copy cliente completata: allineati i testi di Home/Chi sono/Contatti alle bozze fornite dal cliente, con trascrizione in italiano corretta (accenti inclusi).
- Normalizzati accenti anche nei contenuti JSON di Servizi/FAQ/Aree per coerenza editoriale complessiva.
- Build di validazione post-copy update completata con successo (6 pagine statiche generate).
- Sezione "Percorso professionale" in Chi sono convertita in timeline verticale (linea + marker + titolo/descrizione per tappa) con resa responsive.
- Timeline resa data-driven: supporta array di tappe (`trainingTimeline`) in src/content/site/chi-sono.json, con fallback automatico al campo legacy `trainingNote`.
- Inserita prima tappa iniziale: "Laurea in Psicologia Clinica" (20 dicembre 2024).
- Build post-implementazione timeline completata con successo (6 pagine statiche generate).
- Applicato pattern di asimmetria orizzontale/verticale ai principali blocchi card (Home Aree, Servizi, Aree di intervento, Pilastri Chi sono) con col-span differenziati e offset verticali controllati.
- Introdotti slot foto dedicati (card-media) all'interno dei blocchi card per dare ritmo visivo e prevedere integrazione immagini reali future.
- Aggiunte utility globali riusabili in CSS (`card-media`, `card-media-caption`, `stagger-up-lg`, `stagger-down-lg`) per gestire composizioni editoriali non uniformi.
- Ridotta la dominanza delle immagini nei blocchi card: slot media ridimensionati (altezza e col-span minori) per preservare centralita del testo.
- IA semplificata: accorpate "Servizi" e "Aree di intervento" in una singola pagina lineare (`/servizi`) con sezione ancorata `#aree-di-intervento`.
- Navigazione principale aggiornata con voce unica "Servizi e aree".
- Pagina legacy `/aree-di-intervento` trasformata in redirect soft alla sezione accorpata.
- CTA Home aree aggiornata verso `/servizi#aree-di-intervento`.
- Navigazione aggiornata: voce menu semplificata in "Servizi" (rimosso label composito "Servizi e aree").
- Rimosso doppione CTA nella pagina Servizi accorpata (eliminato banner finale ridondante, mantenuta CTA prenotazione principale).
- Aumentato lo stacco visivo tra blocco Servizi e blocco Aree con nuova utility `section-band-contrast` applicata alla sezione Aree.
- Rifinito allineamento card: introdotte utility `cards-equal-layout` e `card-uniform` per uniformare altezza e stretching delle card nei blocchi principali.
- Rimossi offset verticali stagger che causavano incastri/disallineamenti tra card.
- Slot media ridimensionati e vincolati alla stessa altezza delle card testuali per mantenere coerenza visiva.
- Card rese piu compatte: ridotte le altezze minime di `card-uniform` e `card-media` per contenere l'impatto verticale.
- Griglie asimmetriche rifinite per evitare righe incomplete: ribilanciati col-span in Home Aree, Servizi, Aree Bento e Pilastri Chi sono.
- Obiettivo del pass: mantenere asimmetria controllata senza "buchi" o incastri visivi tra card.

## Stato attuale
- Repository pronta per ricevere il PDF dell'intervista.
- Workflow documentale impostato.
- Disponibile trascrizione markdown del questionario in docs/brief/input/questionario-preliminare-cliente.md.
- Sintesi intervista aggiornata e utilizzabile per passare a strategia e copy.
- Documento copy-bozze popolato con contenuti reali cliente (Hero, Aree intervento, Approccio, Chi sono).
- Architettura informativa base del sito definita e pronta per passaggio a wireframe/copy finale.
- Progetto riallineato a sito statico senza sistema articoli.
- Struttura asset pronta per ricevere il logo in formato PDF.
- Definita una roadmap operativa completa per sviluppo end-to-end con Astro + Tailwind (layout, componenti, contenuti, fasi e criteri MVP).
- Progetto Astro/Tailwind funzionante in root e completata la Fase 2 (layout condiviso header/footer + componenti base).
- Fase 3 completata: pagine MVP non sono piu stub e leggono contenuti strutturati da src/content/site.
- Fase 4 completata in modalita rapida: raccolta richieste tramite Google Form esterno.
- Fase 5 completata con buon livello qualitativo su audit automatici.
- Pagine legali da preparare in coda, dopo il completamento del flusso MVP principale.
- Instagram gestito per ora con una card CTA verso il profilo, senza widget live.
- Feed Instagram rimandato a una fase futura, da valutare solo se il bisogno lo giustifica.
- Disponibile un piano di design-first per avvicinare la resa visiva agli export Stitch senza perdere architettura Astro/Tailwind.
- Sito ora con resa piu atmosferica/editoriale e interazioni leggere coerenti, mantenendo struttura Astro componentizzata e contenuti JSON data-driven.
- Palette visiva ora piu equilibrata tra verde istituzionale, lavanda e sabbia, con riduzione dell'effetto monocromatico.
- Presenza visuale del brand (logo/foto) ora effettivamente visibile in testata e hero Home.

## Prossime azioni
1. Sostituire il placeholder contactFormUrl con il link reale del Google Form pubblicato.
2. Verificare e validare dati professionali definitivi (telefono, email, albo, eventuale P.IVA).
3. Eseguire passata QA visuale manuale su mobile/desktop (home, servizi, aree, chi sono, faq, contatti) con eventuale fine tuning micro-spaziature.
4. Pianificare pagine legali in coda post-MVP.
